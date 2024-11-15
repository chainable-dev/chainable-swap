export * from '../../types/types';
export * from './mainnetTokens';
export * from './baseTokens';
export * from './optimismTokens';
export * from './arbitrumTokens';

import { arbitrumTokens } from './arbitrumTokens';
import { baseTokens } from './baseTokens';
import { mainnetTokens } from './mainnetTokens';
import { optimismTokens } from './optimismTokens';
import { CHAIN_IDS, type TokenConfig } from '../../types/types';

// Helper function to validate tokens
const validateTokens = (tokens: TokenConfig[]): TokenConfig[] => {
  return tokens.filter((token) => token.verified && token.logoURI);
};

// Helper function to get tokens by chain
export const getTokensByChain = (chainId: number): TokenConfig[] => {
  switch (chainId) {
    case CHAIN_IDS.MAINNET:
      return validateTokens(mainnetTokens);
    case CHAIN_IDS.BASE:
      return validateTokens(baseTokens);
    case CHAIN_IDS.OPTIMISM:
      return validateTokens(optimismTokens);
    case CHAIN_IDS.ARBITRUM:
      return validateTokens(arbitrumTokens);
    default:
      return [];
  }
};

// Export verified tokens for each chain separately
export const VERIFIED_TOKENS = {
  [CHAIN_IDS.MAINNET]: validateTokens(mainnetTokens),
  [CHAIN_IDS.BASE]: validateTokens(baseTokens),
  [CHAIN_IDS.OPTIMISM]: validateTokens(optimismTokens),
  [CHAIN_IDS.ARBITRUM]: validateTokens(arbitrumTokens),
} as const;

// Export all supported tokens with chain IDs
export const ALL_SUPPORTED_TOKENS = Object.entries(VERIFIED_TOKENS).flatMap(([chainId, tokens]) =>
  tokens.map((token) => ({
    ...token,
    chainId: Number.parseInt(chainId),
  }))
);

// Export common ABIs
export const COMMON_ABIS = {
  erc20: [
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function decimals() view returns (uint8)',
    'function totalSupply() view returns (uint256)',
    'function balanceOf(address) view returns (uint256)',
    'function allowance(address,address) view returns (uint256)',
    'function approve(address,uint256) returns (bool)',
    'function transfer(address,uint256) returns (bool)',
    'function transferFrom(address,address,uint256) returns (bool)',
    'event Transfer(address indexed from, address indexed to, uint256 value)',
    'event Approval(address indexed owner, address indexed spender, uint256 value)',
  ],
} as const;
