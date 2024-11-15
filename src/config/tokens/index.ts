import { baseTokens } from './base'
import type { Token } from '@coinbase/onchainkit/token'

export const BASE_CHAIN_ID = 8453

export const CHAIN_CONFIGS = {
  [BASE_CHAIN_ID]: {
    id: BASE_CHAIN_ID,
    name: 'Base',
    tokens: baseTokens,
  },
} as const

export type SupportedChainId = keyof typeof CHAIN_CONFIGS

export function getTokensForChain(chainId: number): Token[] {
  return CHAIN_CONFIGS[chainId as SupportedChainId]?.tokens ?? []
}
