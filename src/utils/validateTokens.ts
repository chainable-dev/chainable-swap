import type { TokenConfig } from '@/types/types';

export const validateTokens = (tokens: TokenConfig[]): TokenConfig[] => {
  return tokens.filter((token) => token.verified && token.logoURI);
};
