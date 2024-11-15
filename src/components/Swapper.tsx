'use client';

import { CHAIN_IDS, getTokensByChain } from '@/config/tokens/index';
import {
  Swap,
  SwapAmountInput,
  SwapButton,
  SwapMessage,
  SwapToast,
  SwapToggleButton,
} from '@coinbase/onchainkit/swap';
import type { Token } from '@coinbase/onchainkit/token';
import { useEffect, useState } from 'react';
import { useChainId } from 'wagmi';

export function Swapper() {
  const chainId = useChainId(); // Get chain ID directly from wagmi
  const [swappableTokens, setSwappableTokens] = useState<Token[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const loadTokens = async () => {
      try {
        setIsLoading(true);
        // Get current chain ID or default to BASE
        const currentChainId = chainId ?? CHAIN_IDS.BASE;
        // Get tokens specific to the current chain
        const chainTokens = getTokensByChain(currentChainId);

        if (chainTokens.length > 0) {
          const tokens = chainTokens.map((token) => ({
            address: token.address,
            chainId: currentChainId,
            decimals: token.decimals,
            name: token.name,
            symbol: token.symbol,
            image: token.logoURI || '',
          }));
          setSwappableTokens(tokens);
        } else {
          setSwappableTokens([]); // Clear tokens if none available for chain
        }
      } catch (error) {
        console.error('Failed to load tokens:', error);
        setSwappableTokens([]); // Clear tokens on error
      } finally {
        setIsLoading(false);
      }
    };

    if (mounted) {
      loadTokens();
    }
  }, [chainId, mounted]);

  if (!mounted) {
    return null;
  }

  // Show loading state when connecting
  if (!chainId) {
    return (
      <div className="w-full max-w-md mx-auto p-4 text-center">Please connect your wallet</div>
    );
  }

  // Show loading state while fetching tokens
  if (isLoading) {
    return (
      <div className="w-full max-w-md mx-auto p-4 text-center">
        Loading available tokens for{' '}
        {chainId === CHAIN_IDS.BASE
          ? 'Base'
          : chainId === CHAIN_IDS.OPTIMISM
            ? 'Optimism'
            : chainId === CHAIN_IDS.ARBITRUM
              ? 'Arbitrum'
              : 'current'}{' '}
        chain...
      </div>
    );
  }

  // Show message if no tokens available for current chain
  if (swappableTokens.length < 2) {
    return (
      <div className="w-full max-w-md mx-auto p-4 text-center">
        No tokens available for{' '}
        {chainId === CHAIN_IDS.BASE
          ? 'Base'
          : chainId === CHAIN_IDS.OPTIMISM
            ? 'Optimism'
            : chainId === CHAIN_IDS.ARBITRUM
              ? 'Arbitrum'
              : 'current'}{' '}
        chain
      </div>
    );
  }

  return (
    <Swap>
      <SwapAmountInput
        label="You pay"
        swappableTokens={swappableTokens}
        token={swappableTokens[0]}
        type="from"
      />

      <SwapToggleButton />

      <SwapAmountInput
        label="You receive"
        swappableTokens={swappableTokens}
        token={swappableTokens[1]}
        type="to"
      />

      <SwapButton />
      <SwapMessage />
      <SwapToast />
    </Swap>
  );
}

export default Swapper;
