import { optimism } from 'viem/chains';
import type { ChainConfig } from './types';

export const optimismConfig: ChainConfig = {
  ...optimism,
  network: 'optimism',
  rpcUrls: {
    default: {
      http: [
        'https://mainnet.optimism.io',
        'https://optimism.llamarpc.com',
        'https://optimism.drpc.org'
      ],
    },
    public: {
      http: [
        'https://mainnet.optimism.io',
        'https://optimism.llamarpc.com',
        'https://optimism.drpc.org'
      ],
    },
  },
  blockExplorers: {
    default: { name: 'OPScan', url: 'https://optimistic.etherscan.io' },
  },
};
