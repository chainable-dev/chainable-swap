import { base } from 'viem/chains';
import type { ChainConfig } from './types';

export const baseConfig: ChainConfig = {
  ...base,
  network: 'base',
  rpcUrls: {
    default: {
      http: ['https://llamarpc.com'],
    },
    public: {
      http: ['https://llamarpc.com'],
    },
  },
};
