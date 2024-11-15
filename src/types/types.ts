export interface TokenConfig {
  address: string;
  decimals: number;
  name: string;
  symbol: string;
  logoURI: string;
  verified: boolean;
}

export const CHAIN_IDS = {
  MAINNET: 1,
  BASE: 8453,
  OPTIMISM: 10,
  ARBITRUM: 42161,
} as const;
