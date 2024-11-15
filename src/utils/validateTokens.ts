import { type TokenConfig } from '@/config/tokens/types'

export const validateTokens = (tokens: TokenConfig[]): TokenConfig[] => {
  return tokens.filter(token => token.verified && token.logoURI)
} 