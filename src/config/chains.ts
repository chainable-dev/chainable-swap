import { base, mainnet, optimism, arbitrum } from 'wagmi/chains';
import type { TokenConfig } from '@/types/types';
import { baseTokens } from './tokens/baseTokens';
import { optimismTokens } from './tokens/optimismTokens';
import { arbitrumTokens } from './tokens/arbitrumTokens';
import { mainnetTokens } from './tokens/mainnetTokens';

export const SUPPORTED_CHAINS = [
  {
    ...base,
    iconUrl: '/chain-logos/base.svg',
    tokens: baseTokens,
  },
  {
    ...optimism,
    iconUrl: '/chain-logos/optimism.svg',
    tokens: optimismTokens,
  },
  {
    ...arbitrum,
    iconUrl: '/chain-logos/arbitrum.svg',
    tokens: arbitrumTokens,
  },
  {
    ...mainnet,
    iconUrl: '/chain-logos/ethereum.svg',
    tokens: mainnetTokens,
  },
] as const;

export function getTokensForChain(chainId: number): TokenConfig[] {
  const chain = SUPPORTED_CHAINS.find(c => c.id === chainId);
  return chain?.tokens ?? baseTokens; // Default to Base tokens
}

export function getChainById(chainId: number) {
  return SUPPORTED_CHAINS.find(c => c.id === chainId) ?? SUPPORTED_CHAINS[0];
} 