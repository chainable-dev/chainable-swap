import { base } from 'viem/chains'
import type { Chain } from 'viem'

export interface ChainConfig extends Chain {
  network: string
}

export const chainConfigs = {
  [base.id]: {
    ...base,
    network: 'base',
    rpcUrls: {
      default: {
        http: ['https://mainnet.base.org'],
      },
      public: {
        http: ['https://mainnet.base.org'],
      },
    },
  },
} as const

export const BASE_CHAIN_ID = base.id
