import { mainnet } from 'viem/chains';
import type { ChainConfig } from './types';

export const mainnetConfig: ChainConfig = {
  ...mainnet,
  network: 'mainnet',
  rpcUrls: {
    default: {
      http: ['https://llamarpc.com'],
    },
    public: {
      http: ['https://llamarpc.com'],
    },
  },
};
