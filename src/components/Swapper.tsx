'use client';

import { useState, useEffect } from 'react';
import { useAccount, useChainId, useSignTypedData, useSendTransaction, useBalance } from 'wagmi';
import { formatUnits, parseUnits } from 'viem';
import { ChainSelector } from './ChainSelector';
import { Button } from './ui/button';
import { TokenSelector } from './TokenSelector';
import { Input } from './ui/input';
import { getTokensByChain } from '@/config/tokens/index';
import { ArrowDownUp } from 'lucide-react';
import type { TokenConfig } from '@/types/types';
import { base, mainnet, optimism, arbitrum } from 'wagmi/chains';
import Image from 'next/image';

// Add type for supported chains
type SupportedChains = {
  [key: number]: {
    id: number;
    name: string;
    logoUrl: string;
  }
};

// Update supported chains with proper typing
const SUPPORTED_CHAINS: SupportedChains = {
  [base.id]: {
    id: base.id,
    name: 'Base',
    logoUrl: '/chain-logos/base-logo.svg'
  },
  [mainnet.id]: {
    id: mainnet.id,
    name: 'Ethereum',
    logoUrl: '/chain-logos/eth.png'
  },
  [optimism.id]: {
    id: optimism.id,
    name: 'Optimism',
    logoUrl: '/chain-logos/optimism.svg'
  },
  [arbitrum.id]: {
    id: arbitrum.id,
    name: 'Arbitrum',
    logoUrl: '/chain-logos/arb.png'
  },
};

// Update the formatting functions
const formatDisplayValue = (value: string | number, maxDecimals: number = 8): string => {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(num)) return '0.0';
  
  // Format with up to 8 decimal places, but trim unnecessary zeros
  const formatted = num.toFixed(maxDecimals);
  
  // Remove trailing zeros after decimal point, but keep at least one decimal if there is one
  const trimmed = formatted.replace(/\.?0+$/, '');
  return trimmed === Math.floor(num).toString() ? trimmed + '.0' : trimmed;
};

// Helper to format balance displays
const formatBalance = (value: string | number): string => {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(num)) return '0.0';
  
  // For balances, show up to 8 decimals
  if (num < 0.00000001) return '0.0';
  if (num < 1) return num.toFixed(8);
  if (num < 1000) return num.toFixed(4);
  return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
};

export function Swapper() {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { signTypedDataAsync } = useSignTypedData();
  const { sendTransaction } = useSendTransaction();

  const tokens = getTokensByChain(chainId);
  const [payToken, setPayToken] = useState<TokenConfig>(tokens[0]);
  const [receiveToken, setReceiveToken] = useState<TokenConfig>(tokens[1]);
  const [payAmount, setPayAmount] = useState('0.0');
  const [receiveAmount, setReceiveAmount] = useState('0.0');
  const [isLoading, setIsLoading] = useState(false);
  const [quoteData, setQuoteData] = useState<any>(null);

  // Check if current chain is supported
  const isSupported = chainId && chainId in SUPPORTED_CHAINS;
  
  // Get balance for pay token
  const { data: payTokenBalance } = useBalance({
    address,
    token: payToken.address === '0x0000000000000000000000000000000000000000' 
      ? undefined 
      : payToken.address as `0x${string}`,
  });

  // Get balance for receive token
  const { data: receiveTokenBalance } = useBalance({
    address,
    token: receiveToken.address === '0x0000000000000000000000000000000000000000' 
      ? undefined 
      : receiveToken.address as `0x${string}`,
  });

  // Get quote when values change
  useEffect(() => {
    async function getQuote() {
      if (!payAmount || payAmount === '0.0' || !address || !isConnected) {
        setReceiveAmount('0.0');
        return;
      }

      setIsLoading(true);
      try {
        const sellAmount = parseUnits(payAmount, payToken.decimals).toString();

        // First get price to check allowance
        const params = new URLSearchParams({
          chainId: chainId.toString(),
          sellToken: payToken.address,
          buyToken: receiveToken.address,
          sellAmount,
          takerAddress: address,
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
          throw new Error('Failed to get quote');
        }
        
        const quote = await response.json();
        setReceiveAmount(formatUnits(BigInt(quote.buyAmount), receiveToken.decimals));
        setQuoteData(quote);

      } catch (error) {
        console.error('Failed to get quote:', error);
        setReceiveAmount('0.0');
      } finally {
        setIsLoading(false);
      }
    }

    const timeoutId = setTimeout(() => {
      getQuote();
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [payAmount, payToken, receiveToken, chainId, address, isConnected]);

  const handleSwapTokens = () => {
    setPayToken(receiveToken);
    setReceiveToken(payToken);
    setPayAmount(receiveAmount);
    setReceiveAmount(payAmount);
  };

  // Handle max amount click
  const handleMaxAmount = () => {
    if (payTokenBalance) {
      setPayAmount(payTokenBalance.formatted);
    }
  };

  // Handle 50% amount click
  const handleHalfAmount = () => {
    if (payTokenBalance) {
      const halfAmount = Number(payTokenBalance.formatted) / 2;
      setPayAmount(halfAmount.toString());
    }
  };

  if (!isConnected) {
    return (
      <div className="w-full max-w-md mx-auto p-4 space-y-4 bg-background rounded-lg border shadow-lg">
        <div className="text-center">Please connect your wallet to swap tokens</div>
      </div>
    );
  }

  if (!isSupported) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0D111C]">
        <div className="w-full max-w-md p-6 space-y-4 bg-[#0D111C] rounded-3xl border border-gray-800/50">
          <div className="text-center text-white">
            <p>Please switch to a supported network:</p>
            <div className="flex flex-col gap-2 mt-4">
              {Object.values(SUPPORTED_CHAINS).map((supportedChain) => (
                <Button
                  key={supportedChain.id}
                  variant="outline"
                  className="flex items-center gap-2"
                  onClick={() => ChainSelector()} 
                >
                  <Image
                    src={supportedChain.logoUrl}
                    alt={supportedChain.name}
                    width={20}
                    height={20}
                  />
                  {supportedChain.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D111C]">
      <div className="w-full max-w-md p-6 space-y-5 bg-[#0D111C] rounded-3xl border border-gray-800/50">
        {/* Header with chain display */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Swap</h1>
          <div className="flex items-center gap-4">
            {chainId && (
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#131A2A]">
                <Image
                  src={SUPPORTED_CHAINS[chainId].logoUrl}
                  alt={SUPPORTED_CHAINS[chainId].name}
                  width={16}
                  height={16}
                />
                <span className="text-sm text-white">
                  {SUPPORTED_CHAINS[chainId].name}
                </span>
              </div>
            )}
            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                className="text-white hover:text-white/90"
              >
                Market
              </Button>
              <Button 
                variant="ghost"
                className="text-gray-500"
              >
                Limit
              </Button>
            </div>
          </div>
        </div>
        
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

        {/* Receive section */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-xl text-white">You receive</label>
            <span className="text-sm text-gray-500">
              Balance: {receiveTokenBalance ? formatBalance(receiveTokenBalance.formatted) : '0.0'}
            </span>
          </div>
          <div className="relative">
            <Input
              type="text"
              value={formatDisplayValue(receiveAmount)}
              readOnly
              className="w-full h-16 text-2xl px-4 bg-[#131A2A] border-0 rounded-2xl text-white placeholder-gray-500 focus:ring-0"
              placeholder="0.0"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <TokenSelector
                selectedToken={receiveToken}
                onSelect={setReceiveToken}
                disabledTokens={[payToken.address]}
              />
            </div>
          </div>
        </div>

        {/* Swap button */}
        <Button 
          className="w-full h-14 text-lg font-medium bg-[#131A2A] hover:bg-[#1B2436] text-white rounded-2xl"
          disabled={!payAmount || payAmount === '0.0' || isLoading}
          onClick={() => {
            if (quoteData) {
              // Implement the swap transaction logic here
              sendTransaction({
                to: quoteData.to,
                data: quoteData.data,
                value: quoteData.value,
              });
            }
          }}
        >
          {isLoading ? 'Getting Best Price...' : 'Swap'}
        </Button>
      </div>
    </div>
  );
}
