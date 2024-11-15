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

  // Quote effect remains the same
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

  // Handler functions remain the same
  const handleSwapTokens = () => {
    setPayToken(receiveToken);
    setReceiveToken(payToken);
    setPayAmount(receiveAmount);
    setReceiveAmount(payAmount);
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
  );
}
