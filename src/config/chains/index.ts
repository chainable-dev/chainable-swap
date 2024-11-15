import { base, baseSepolia } from 'viem/chains'
import { defineChain } from 'viem'

// Custom chain definitions based on chainlist.org
export const optimism = defineChain({
  id: 10,
  name: 'OP Mainnet',
  network: 'optimism',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { 
      http: [
        'https://mainnet.optimism.io',
        'https://optimism.llamarpc.com',
        'https://optimism.drpc.org'
      ] 
    },
    public: { 
      http: [
        'https://mainnet.optimism.io',
        'https://optimism.llamarpc.com',
        'https://optimism.drpc.org'
      ] 
    }
  },
  blockExplorers: {
    default: { name: 'OPScan', url: 'https://optimistic.etherscan.io' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 4286263,
    },
  },
})

export const arbitrum = defineChain({
  id: 42161,
  name: 'Arbitrum One',
  network: 'arbitrum',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { 
      http: [
        'https://arb1.arbitrum.io/rpc',
        'https://arbitrum.llamarpc.com',
        'https://arbitrum-one.public.blastapi.io'
      ] 
    },
    public: { 
      http: [
        'https://arb1.arbitrum.io/rpc',
        'https://arbitrum.llamarpc.com',
        'https://arbitrum-one.public.blastapi.io'
      ] 
    }
  },
  blockExplorers: {
    default: { name: 'Arbiscan', url: 'https://arbiscan.io' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 7654707,
    },
  },
})

// Export all supported chains
export const chainConfigs = {
  [base.id]: base,
  [baseSepolia.id]: baseSepolia,
  [optimism.id]: optimism,
  [arbitrum.id]: arbitrum,
} as const

// Helper function to get chain by ID
export function getChainById(chainId: number) {
  return chainConfigs[chainId as keyof typeof chainConfigs]
}

// Export chain IDs for easy reference
export const CHAIN_IDS = {
  BASE: base.id,
  BASE_SEPOLIA: baseSepolia.id,
  OPTIMISM: optimism.id,
  ARBITRUM: arbitrum.id,
} as const
