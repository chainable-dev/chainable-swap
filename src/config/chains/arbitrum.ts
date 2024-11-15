import { arbitrum } from 'viem/chains';
import type { ChainConfig } from './types';

export const arbitrumConfig: ChainConfig = {
  ...arbitrum,
  network: 'arbitrum',
  rpcUrls: {
    default: {
      http: ['https://llamarpc.com'],
    },
    public: {
      http: ['https://llamarpc.com'],
    },
  },
};
