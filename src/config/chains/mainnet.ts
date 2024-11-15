import { mainnet } from 'viem/chains';
import type { ChainConfig } from './types';

export const mainnetConfig: ChainConfig = {
  ...mainnet,
  network: 'mainnet',
  rpcUrls: {
    default: {
      http: ['https://base.llamarpc.io'],
    },
    public: {
      http: ['https://base.llamarpc.com'],
    },
  },
};
