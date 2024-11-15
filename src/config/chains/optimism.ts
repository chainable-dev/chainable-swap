import { optimism } from 'viem/chains';
import type { ChainConfig } from './types';

export const optimismConfig: ChainConfig = {
  ...optimism,
  network: 'optimism',
  rpcUrls: {
    default: {
      http: ['https://llamarpc.com'],
    },
    public: {
      http: ['https://llamarpc.com'],
    },
  },
};
