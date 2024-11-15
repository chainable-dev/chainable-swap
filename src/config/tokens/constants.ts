import type { Token } from '@coinbase/onchainkit/token'

// Chain IDs
export const CHAIN_IDS = {
  BASE: 8453,
  OPTIMISM: 10,
} as const

// Chain-specific token lists
const BASE_TOKENS: Token[] = [
  {
    address: '0x0000000000000000000000000000000000000000',
    chainId: CHAIN_IDS.BASE,
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
    image: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
  },
  {
    address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    chainId: CHAIN_IDS.BASE,
    decimals: 6,
    name: 'USD Coin',
    symbol: 'USDC',
    image: 'https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png',
  },
]

const OPTIMISM_TOKENS: Token[] = [
  {
    address: '0x0000000000000000000000000000000000000000',
    chainId: CHAIN_IDS.OPTIMISM,
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
    image: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
  },
  {
    address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
    chainId: CHAIN_IDS.OPTIMISM,
    decimals: 6,
    name: 'USD Coin',
    symbol: 'USDC',
    image: 'https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png',
  },
]

// Chain configurations
export const CHAIN_CONFIGS = {
  [CHAIN_IDS.BASE]: {
    id: CHAIN_IDS.BASE,
    name: 'Base',
    tokens: BASE_TOKENS,
    rpcUrls: [
      'https://mainnet.base.org',
    ]
  },
  [CHAIN_IDS.OPTIMISM]: {
    id: CHAIN_IDS.OPTIMISM,
    name: 'Optimism',
    tokens: OPTIMISM_TOKENS,
    rpcUrls: [
      'https://mainnet.optimism.io',
    ]
  },
} as const

export type SupportedChainId = keyof typeof CHAIN_CONFIGS

// Helper function to get tokens for a specific chain
export function getTokensForChain(chainId: number): Token[] {
  return CHAIN_CONFIGS[chainId as SupportedChainId]?.tokens ?? []
} 