import type { Token } from '@coinbase/onchainkit/token'

export const CHAIN_IDS = {
  BASE: 8453,
  OPTIMISM: 10,
  ARBITRUM: 42161,
  ETHEREUM: 1,
} as const

// Base Mainnet Tokens - Verified and Active
export const BASE_TOKENS: Token[] = [
  {
    address: "", // Native ETH
    chainId: CHAIN_IDS.BASE,
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
  },
  {
    address: "0x4200000000000000000000000000000000000006",
    chainId: CHAIN_IDS.BASE,
    decimals: 18,
    name: "Wrapped Ethereum",
    symbol: "WETH",
    image: "https://assets.coingecko.com/coins/images/2518/large/weth.png",
  },
  {
    address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    chainId: CHAIN_IDS.BASE,
    decimals: 6,
    name: "USD Coin",
    symbol: "USDC",
    image: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png",
  },
  {
    address: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
    chainId: CHAIN_IDS.BASE,
    decimals: 6,
    name: "USD Base Coin",
    symbol: "USDbC",
    image: "https://assets.coingecko.com/coins/images/31112/large/usdb.png",
  },
  {
    address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
    chainId: CHAIN_IDS.BASE,
    decimals: 18,
    name: "Coinbase Wrapped Staked ETH",
    symbol: "cbETH",
    image: "https://assets.coingecko.com/coins/images/27008/large/cbeth.png",
  },
  {
    address: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
    chainId: CHAIN_IDS.BASE,
    decimals: 18,
    name: "DAI",
    symbol: "DAI",
    image: "https://assets.coingecko.com/coins/images/9956/large/Badge_Dai.png",
  },
  {
    address: "0x27D2DECb4bFC9C76F0309b8E88dec3a601Fe25a8",
    chainId: CHAIN_IDS.BASE,
    decimals: 18,
    name: "Aerodrome",
    symbol: "AERO",
    image: "https://assets.coingecko.com/coins/images/31745/large/token-logo.png",
  }
]

// Optimism Mainnet Tokens - Verified and Active
export const OPTIMISM_TOKENS: Token[] = [
  {
    address: "", // Native ETH
    chainId: CHAIN_IDS.OPTIMISM,
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
  },
  {
    address: "0x4200000000000000000000000000000000000006",
    chainId: CHAIN_IDS.OPTIMISM,
    decimals: 18,
    name: "Wrapped Ethereum",
    symbol: "WETH",
    image: "https://assets.coingecko.com/coins/images/2518/large/weth.png",
  },
  {
    address: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
    chainId: CHAIN_IDS.OPTIMISM,
    decimals: 6,
    name: "USD Coin",
    symbol: "USDC",
    image: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png",
  },
  {
    address: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
    chainId: CHAIN_IDS.OPTIMISM,
    decimals: 6,
    name: "Tether USD",
    symbol: "USDT",
    image: "https://assets.coingecko.com/coins/images/325/large/Tether.png",
  },
  {
    address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    chainId: CHAIN_IDS.OPTIMISM,
    decimals: 18,
    name: "DAI",
    symbol: "DAI",
    image: "https://assets.coingecko.com/coins/images/9956/large/Badge_Dai.png",
  },
  {
    address: "0x4200000000000000000000000000000000000042",
    chainId: CHAIN_IDS.OPTIMISM,
    decimals: 18,
    name: "Optimism",
    symbol: "OP",
    image: "https://assets.coingecko.com/coins/images/25244/large/Optimism.png",
  }
]

// Arbitrum Mainnet Tokens - Verified and Active
export const ARBITRUM_TOKENS: Token[] = [
  {
    address: "", // Native ETH
    chainId: CHAIN_IDS.ARBITRUM,
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
  },
  {
    address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    chainId: CHAIN_IDS.ARBITRUM,
    decimals: 18,
    name: "Wrapped Ethereum",
    symbol: "WETH",
    image: "https://assets.coingecko.com/coins/images/2518/large/weth.png",
  },
  {
    address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
    chainId: CHAIN_IDS.ARBITRUM,
    decimals: 6,
    name: "USD Coin",
    symbol: "USDC",
    image: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png",
  },
  {
    address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
    chainId: CHAIN_IDS.ARBITRUM,
    decimals: 6,
    name: "Tether USD",
    symbol: "USDT",
    image: "https://assets.coingecko.com/coins/images/325/large/Tether.png",
  },
  {
    address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    chainId: CHAIN_IDS.ARBITRUM,
    decimals: 18,
    name: "DAI",
    symbol: "DAI",
    image: "https://assets.coingecko.com/coins/images/9956/large/Badge_Dai.png",
  },
  {
    address: "0x912CE59144191C1204E64559FE8253a0e49E6548",
    chainId: CHAIN_IDS.ARBITRUM,
    decimals: 18,
    name: "Arbitrum",
    symbol: "ARB",
    image: "https://assets.coingecko.com/coins/images/16547/large/photo_2023-03-29_21.47.00.jpeg",
  },
  {
    address: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
    chainId: CHAIN_IDS.ARBITRUM,
    decimals: 8,
    name: "Wrapped Bitcoin",
    symbol: "WBTC",
    image: "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png",
  }
]

// Ethereum Mainnet Tokens - Most liquid and verified
export const ETHEREUM_TOKENS: Token[] = [
  {
    address: "", // Native ETH
    chainId: CHAIN_IDS.ETHEREUM,
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
    image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
  },
  {
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    chainId: CHAIN_IDS.ETHEREUM,
    decimals: 18,
    name: "Wrapped Ethereum",
    symbol: "WETH",
    image: "https://assets.coingecko.com/coins/images/2518/large/weth.png",
  },
  {
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    chainId: CHAIN_IDS.ETHEREUM,
    decimals: 6,
    name: "USD Coin",
    symbol: "USDC",
    image: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png",
  },
  {
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    chainId: CHAIN_IDS.ETHEREUM,
    decimals: 6,
    name: "Tether USD",
    symbol: "USDT",
    image: "https://assets.coingecko.com/coins/images/325/large/Tether.png",
  },
  {
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    chainId: CHAIN_IDS.ETHEREUM,
    decimals: 18,
    name: "DAI",
    symbol: "DAI",
    image: "https://assets.coingecko.com/coins/images/9956/large/Badge_Dai.png",
  },
  {
    address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    chainId: CHAIN_IDS.ETHEREUM,
    decimals: 8,
    name: "Wrapped Bitcoin",
    symbol: "WBTC",
    image: "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png",
  },
  {
    address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    chainId: CHAIN_IDS.ETHEREUM,
    decimals: 18,
    name: "Chainlink",
    symbol: "LINK",
    image: "https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png",
  },
  {
    address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
    chainId: CHAIN_IDS.ETHEREUM,
    decimals: 18,
    name: "Aave",
    symbol: "AAVE",
    image: "https://assets.coingecko.com/coins/images/12645/large/AAVE.png",
  }
]

// Helper function to get tokens by chain ID
export const getTokensByChainId = (chainId: number): Token[] => {
  switch (chainId) {
    case CHAIN_IDS.BASE:
      return BASE_TOKENS
    case CHAIN_IDS.OPTIMISM:
      return OPTIMISM_TOKENS
    case CHAIN_IDS.ARBITRUM:
      return ARBITRUM_TOKENS
    case CHAIN_IDS.ETHEREUM:
      return ETHEREUM_TOKENS
    default:
      return [] // Return empty array if chain not supported
  }
}

// Export all supported tokens
export const ALL_SUPPORTED_TOKENS = [
  ...BASE_TOKENS,
  ...OPTIMISM_TOKENS,
  ...ARBITRUM_TOKENS,
  ...ETHEREUM_TOKENS,
]