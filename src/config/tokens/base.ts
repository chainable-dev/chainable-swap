import type { Token } from '@coinbase/onchainkit/token'

export const BASE_CHAIN_ID = 8453

// Helper function to verify image URL
const verifyImageUrl = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};
export const baseTokens: Token[] = [
  {
    address: "0x0000000000000000000000000000000000000000" as const,
    chainId: BASE_CHAIN_ID,
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
    image: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
  },
  {
    address: "0x4200000000000000000000000000000000000006" as const,
    chainId: BASE_CHAIN_ID,
    decimals: 18,
    name: 'Wrapped Ether',
    symbol: 'WETH',
    image: 'https://assets.coingecko.com/coins/images/2518/small/weth.png',
  },
  {
    address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" as const,
    chainId: BASE_CHAIN_ID,
    decimals: 6,
    name: 'USD Coin',
    symbol: 'USDC',
    image: 'https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png',
  },
  {
    address: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb" as const,
    chainId: BASE_CHAIN_ID,
    decimals: 18,
    name: 'DAI Stablecoin',
    symbol: 'DAI',
    image: 'https://assets.coingecko.com/coins/images/9956/small/4943.png',
  },
  {
    address: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA" as const,
    chainId: BASE_CHAIN_ID,
    decimals: 6,
    name: 'USD Tether',
    symbol: 'USDT',
    image: 'https://assets.coingecko.com/coins/images/325/small/Tether.png',
  },
  {
    address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22" as const,
    chainId: BASE_CHAIN_ID,
    decimals: 18,
    name: 'Coinbase Wrapped Staked ETH',
    symbol: 'cbETH',
    image: 'https://assets.coingecko.com/coins/images/27008/small/cbeth.png',
  },
  {
    address: "0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85" as const,
    chainId: BASE_CHAIN_ID,
    decimals: 8,
    name: 'Wrapped BTC',
    symbol: 'WBTC',
    image: 'https://assets.coingecko.com/coins/images/7598/small/wrapped_bitcoin_wbtc.png',
  }
].filter(token => token.image) // Only include tokens with image URLs