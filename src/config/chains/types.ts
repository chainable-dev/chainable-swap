import type { Chain } from 'viem';

export interface ChainConfig extends Chain {
  id: number;
  name: string;
  network: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: {
    default: { http: string[] };
    public: { http: string[] };
  };
  blockExplorers: {
    default: { name: string; url: string };
  };
  contracts: {
    multicall3: {
      address: `0x${string}`;
      blockCreated: number;
    };
  };
  testnet?: boolean;
}

export const CHAIN_IDS = {
  MAINNET: 1,
  BASE: 8453,
  OPTIMISM: 10,
  ARBITRUM: 42161,
} as const;


export interface Token {
  address: string;
  decimals: number;
  name: string;
  symbol: string;
  image: string;
  verified: boolean;
}
