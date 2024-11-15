import { Token } from "@coinbase/onchainkit/token";

export const mainnetTokens: Token[] = [
  {
    address: '0x0000000000000000000000000000000000000000',
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
    image: '/token-icons/eth.png',
    chainId: 1, // Add chainId
  },
  {
    name: 'Wrapped Ether',
    symbol: 'WETH',
    address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    decimals: 18,
    image: '/token-icons/weth.png',
    chainId: 1, // Add chainId
  },
  {
    name: 'USD Coin',
    symbol: 'USDC',
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    decimals: 6,
    image: '/token-icons/usdc.png',
    chainId: 1, // Add chainId
  },
  {
    name: 'Tether USD',
    symbol: 'USDT',
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    decimals: 6,
    image: '/token-icons/usdt.png',
    chainId: 1, // Add chainId
  },
  {
    name: 'Dai Stablecoin',
    symbol: 'DAI',
    address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    decimals: 18,
    image: '/token-icons/dai.png',
    chainId: 1, // Add chainId
  },
  {
    name: 'Wrapped Bitcoin',
    symbol: 'WBTC',
    address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    decimals: 8,
    image: '/token-icons/wbtc.png',
    chainId: 1, // Add chainId
  },
  {
    name: 'Chainlink',
    symbol: 'LINK',
    address: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
    decimals: 18,
    image: '/token-icons/link.png',
    chainId: 1, // Add chainId
  },
  {
    name: 'Uniswap',
    symbol: 'UNI',
    address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
    decimals: 18,
    image: '/token-icons/uni.png',
    chainId: 1, // Add chainId
  },
  {
    name: 'Aave',
    symbol: 'AAVE',
    address: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
    decimals: 18,
    image: '/token-icons/aave.png',
    chainId: 1, // Add chainId
  },
  {
    name: 'Gala v2',
    symbol: 'GALA',
    address: '0x17A1D8C9de53e54498A7B2DBc9b59102E6E38FeE',
    decimals: 8,
    image: '/token-icons/gala.png',
    chainId: 1, // Add chainId
  },
];
