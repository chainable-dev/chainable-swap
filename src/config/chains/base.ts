import { base } from 'viem/chains';
import type { ChainConfig } from './types';

export const baseConfig: ChainConfig = {
  ...base,
  network: 'base',
  rpcUrls: {
    default: {
      http: [
        'https://mainnet.base.org',
        'https://base.llamarpc.com',
        'https://base.drpc.org'
      ],
    },
    public: {
      http: [
        'https://mainnet.base.org',
        'https://base.llamarpc.com', 
        'https://base.drpc.org'
      ],
    },
  },
  blockExplorers: {
    default: { name: 'BaseScan', url: 'https://basescan.org' },
  },
};
