export interface TokenConfig {
  name: string
  symbol: string
  address: `0x${string}`
  decimals: number
  logoURI?: string
  verified?: boolean
}

export const CHAIN_IDS = {
  MAINNET: 1,
  BASE: 8453,
  OPTIMISM: 10,
  ARBITRUM: 42161,
} as const 