'use client';

import { useState, useEffect } from 'react';
import { useAccount, useChainId, useSignTypedData, useSendTransaction, useBalance } from 'wagmi';
import { formatUnits, parseUnits } from 'viem';
import { Button } from './ui/button';
import { TokenSelector } from './TokenSelector';
import { Input } from './ui/input';
import { getTokensByChain } from '@/config/tokens/index';
import { ArrowDownUp } from 'lucide-react';
import type { TokenConfig } from '@/types/types';

// Formatting functions remain the same
const formatDisplayValue = (value: string | number, maxDecimals: number = 8): string => {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(num)) return '0.0';
  const formatted = num.toFixed(maxDecimals);
  const trimmed = formatted.replace(/\.?0+$/, '');
  return trimmed === Math.floor(num).toString() ? trimmed + '.0' : trimmed;
};

const formatBalance = (value: string | number): string => {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(num)) return '0.0';
  if (num < 0.00000001) return '0.0';
  if (num < 1) return num.toFixed(8);
  if (num < 1000) return num.toFixed(4);
  return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
};

// Add permit2 constants
const PERMIT2_ADDRESS = '0x000000000022D473030F116dDEE9F6B43aC78BA3';
const MAGIC_CALLDATA_STRING = "f".repeat(130);

interface QuoteResponse {
  price: string;
  guaranteedPrice: string;
  buyAmount: string;
  sellAmount: string;
  estimatedPriceImpact: string;
  value: string;
  gas: string;
  to: string;
  data: string;
  permit2?: {
    eip712: {
      domain: {
        name: string;
        version: string;
        chainId: number;
        verifyingContract: string;
      };
      types: Record<string, Array<{ name: string; type: string }>>;
      value: Record<string, any>;
      primaryType: string;
    };
  };
}

interface SwapState {
  amount: string;
  loading: boolean;
  error: string | null;
  priceImpact: string;
  usdValue: string;
  estimatedGas?: string;
  route?: string;
}

export function Swapper() {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { signTypedDataAsync } = useSignTypedData();
  const { sendTransaction } = useSendTransaction();

  const tokens = getTokensByChain(chainId);
  const [payToken, setPayToken] = useState<TokenConfig>(tokens[0]);
  const [receiveToken, setReceiveToken] = useState<TokenConfig>(tokens[1]);
  const [payAmount, setPayAmount] = useState('0.0');
  const [swapState, setSwapState] = useState<SwapState>({
    amount: '0.0',
    loading: false,
    error: null,
    priceImpact: '0',
    usdValue: '0',
  });
  const [isPriceLoading, setPriceLoading] = useState(false);
  const [isSwapLoading, setSwapLoading] = useState(false);
  const [showPriceImpactWarning, setShowPriceImpactWarning] = useState(false);

  // Get balances
  const { data: payTokenBalance } = useBalance({
    address,
    token: payToken.address === '0x0000000000000000000000000000000000000000' 
      ? undefined 
      : payToken.address as `0x${string}`,
  });

  const { data: receiveTokenBalance } = useBalance({
    address,
    token: receiveToken.address === '0x0000000000000000000000000000000000000000' 
      ? undefined 
      : receiveToken.address as `0x${string}`,
  });

  // Update quote effect with better UX
  useEffect(() => {
    let isStale = false;

    async function getQuote() {
      if (!payAmount || payAmount === '0.0' || !address || !isConnected) {
        setSwapState(prev => ({
          ...prev,
          amount: '0.0',
          priceImpact: '0',
          usdValue: '0',
        }));
        return;
      }

      setPriceLoading(true);
      try {
        const sellAmount = parseUnits(payAmount, payToken.decimals).toString();

        const params = new URLSearchParams({
          chainId: chainId.toString(),
          sellToken: payToken.address,
          buyToken: receiveToken.address,
          sellAmount,
          takerAddress: address,
          skipValidation: 'true',
          intentOnFilling: 'true',
          enablePermit2: 'true', // Enable permit2
        });

        const response = await fetch(
          `https://api.0x.org/swap/permit2/quote?${params.toString()}`,
          {
            headers: {
              '0x-api-key': process.env.NEXT_PUBLIC_0X_API_KEY!,
              '0x-version': 'v2',
            },
          }
        );
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.reason || 'Failed to get quote');
        }
        
        const quote: QuoteResponse = await response.json();
        
        if (!isStale) {
          const formattedAmount = formatUnits(BigInt(quote.buyAmount), receiveToken.decimals);
          const impact = quote.estimatedPriceImpact 
            ? (Number(quote.estimatedPriceImpact) * 100).toFixed(3)
            : '0';

          // Show warning for high price impact
          setShowPriceImpactWarning(Number(impact) > 2);

          setSwapState({
            amount: formattedAmount,
            loading: false,
            error: null,
            priceImpact: impact,
            usdValue: quote.price || '0',
            estimatedGas: quote.gas,
            route: 'Best route via 0x API',
          });
        }
      } catch (error) {
        console.error('Quote error:', error);
        if (!isStale) {
          setSwapState(prev => ({
            ...prev,
            amount: '0.0',
            loading: false,
            error: error instanceof Error ? error.message : 'Failed to get quote',
            priceImpact: '0',
            usdValue: '0',
          }));
        }
      } finally {
        if (!isStale) {
          setPriceLoading(false);
        }
      }
    }

    const timeoutId = setTimeout(() => {
      getQuote();
    }, 300);

    return () => {
      isStale = true;
      clearTimeout(timeoutId);
    };
  }, [
    payAmount,
    payToken.address,
    payToken.decimals,
    receiveToken.address,
    receiveToken.decimals,
    chainId,
    address,
    isConnected
  ]);

  // Update the swap handler to handle permit2 signature
  const handleSwap = async () => {
    if (!swapState.route) return;
    
    try {
      setSwapLoading(true);

      // Sign permit2 message if needed
      let signature: `0x${string}` | undefined;
      if (swapState.route.permit2?.eip712) {
        signature = await signTypedDataAsync(swapState.route.permit2.eip712);
      }

      // Prepare transaction data
      let txData = swapState.route.data;
      if (signature) {
        // Replace magic string with actual signature
        txData = txData.replace(
          MAGIC_CALLDATA_STRING,
          signature.slice(2) // Remove '0x' prefix
        );
      }

      // Send transaction
      await sendTransaction({
        to: swapState.route.to as `0x${string}`,
        data: txData as `0x${string}`,
        value: BigInt(swapState.route.value || '0'),
      });

    } catch (error) {
      console.error('Swap failed:', error);
      setSwapState(prev => ({
        ...prev,
        error: 'Swap failed. Please try again.',
      }));
    } finally {
      setSwapLoading(false);
    }
  };

  // Handler functions remain the same
  const handleSwapTokens = () => {
    setPayToken(receiveToken);
    setReceiveToken(payToken);
    setPayAmount(swapState.amount);
    setSwapState(prev => ({ ...prev, amount: payAmount }));
  };

  const handleMaxAmount = () => {
    if (payTokenBalance) {
      setPayAmount(payTokenBalance.formatted);
    }
  };

  const handleHalfAmount = () => {
    if (payTokenBalance) {
      const halfAmount = Number(payTokenBalance.formatted) / 2;
      setPayAmount(halfAmount.toString());
    }
  };

  // Get button text based on state
  const getButtonText = () => {
    if (isSwapLoading) return 'Confirming Swap...';
    if (isPriceLoading) return 'Getting Best Price...';
    if (swapState.error) return 'Try Again';
    if (!payAmount || payAmount === '0.0') return 'Enter an amount';
    if (showPriceImpactWarning) return 'Swap Anyway';
    return 'Swap';
  };

  if (!isConnected) {
    return (
      <div className="w-full max-w-md mx-auto p-4 text-center text-white">
        Please connect your wallet to swap tokens
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-5 bg-[#0D111C] rounded-3xl border border-gray-800/50 p-6">
      {/* Pay section */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-xl text-white">Pay with</label>
          <span className="text-sm text-gray-500">
            Balance: {payTokenBalance ? formatBalance(payTokenBalance.formatted) : '0.0'}
          </span>
        </div>
        <div className="space-y-2">
          <div className="relative">
            <Input
              type="text"
              value={formatDisplayValue(payAmount)}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9.]/g, '');
                if (value.split('.').length > 2) return;
                setPayAmount(value);
              }}
              className="w-full h-16 text-2xl px-4 bg-[#131A2A] border-0 rounded-2xl text-white placeholder-gray-500 focus:ring-0"
              placeholder="0.0"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <TokenSelector
                selectedToken={payToken}
                onSelect={setPayToken}
                disabledTokens={[receiveToken.address]}
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button 
              variant="ghost"
              onClick={handleMaxAmount}
              className="h-8 px-3 text-sm font-medium text-gray-400 hover:text-white bg-[#131A2A] rounded-xl"
            >
              MAX
            </Button>
            <Button 
              variant="ghost"
              onClick={handleHalfAmount}
              className="h-8 px-3 text-sm font-medium text-gray-400 hover:text-white bg-[#131A2A] rounded-xl"
            >
              50%
            </Button>
          </div>
        </div>
      </div>

      {/* Swap direction button */}
      <div className="flex justify-center">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={handleSwapTokens}
          className="rounded-full bg-[#131A2A] border border-gray-800/50 p-2"
        >
          <ArrowDownUp className="w-4 h-4 text-gray-400" />
        </Button>
      </div>

      {/* Enhanced receive section with more info */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-xl text-white">You receive</label>
          <div className="flex flex-col items-end">
            <span className="text-sm text-gray-500">
              Balance: {receiveTokenBalance ? formatBalance(receiveTokenBalance.formatted) : '0.0'}
            </span>
            {Number(swapState.priceImpact) !== 0 && (
              <span className={`text-xs ${
                Number(swapState.priceImpact) > 2 ? 'text-red-400' : 
                Number(swapState.priceImpact) > 1 ? 'text-yellow-400' : 
                'text-gray-400'
              }`}>
                Price Impact: {swapState.priceImpact}%
              </span>
            )}
          </div>
        </div>
        <div className="relative">
          <Input
            type="text"
            value={formatDisplayValue(swapState.amount)}
            readOnly
            className={`w-full h-16 text-2xl px-4 bg-[#131A2A] border-0 rounded-2xl text-white placeholder-gray-500 focus:ring-0 ${
              swapState.loading ? 'opacity-50' : ''
            }`}
            placeholder="0.0"
          />
          {swapState.error && (
            <span className="text-xs text-red-400 mt-1">
              {swapState.error}
            </span>
          )}
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <TokenSelector
              selectedToken={receiveToken}
              onSelect={setReceiveToken}
              disabledTokens={[payToken.address]}
            />
          </div>
        </div>

        {/* Add route and gas info */}
        {swapState.route && (
          <div className="text-xs text-gray-400 mt-1 flex justify-between">
            <span>{swapState.route}</span>
            {swapState.estimatedGas && (
              <span>Est. Gas: {formatUnits(BigInt(swapState.estimatedGas), 9)} GWEI</span>
            )}
          </div>
        )}

        {/* Price impact warning */}
        {showPriceImpactWarning && (
          <div className="text-xs text-red-400 mt-1">
            Warning: High price impact! Your trade will move the market price significantly.
          </div>
        )}
      </div>

      {/* Enhanced swap button */}
      <Button 
        className={`w-full h-14 text-lg font-medium rounded-2xl transition-colors
          ${showPriceImpactWarning 
            ? 'bg-red-500/20 hover:bg-red-500/30 text-red-400' 
            : 'bg-[#131A2A] hover:bg-[#1B2436] text-white'}`}
        disabled={!payAmount || payAmount === '0.0' || isPriceLoading || isSwapLoading}
        onClick={handleSwap}
      >
        {getButtonText()}
      </Button>
    </div>
  );
}
