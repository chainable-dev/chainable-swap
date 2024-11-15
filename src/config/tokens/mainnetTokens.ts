import type { TokenConfig } from './types'

export const mainnetTokens: TokenConfig[] = [
  {
    name: "Wrapped Ether",
    symbol: "WETH",
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    decimals: 18,
    logoURI: "/token-icons/weth.png",
    verified: true
  },
  {
    name: "USD Coin",
    symbol: "USDC",
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    decimals: 6,
    logoURI: "/token-icons/usdc.png",
    verified: true
  },
  {
    name: "Tether USD",
    symbol: "USDT",
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    decimals: 6,
    logoURI: "/token-icons/usdt.png",
    verified: true
  },
  {
    name: "Dai Stablecoin",
    symbol: "DAI",
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    decimals: 18,
    logoURI: "/token-icons/dai.png",
    verified: true
  },
  {
    name: "Wrapped Bitcoin",
    symbol: "WBTC",
    address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    decimals: 8,
    logoURI: "/token-icons/wbtc.png",
    verified: true
  },
  {
    name: "Chainlink",
    symbol: "LINK",
    address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    decimals: 18,
    logoURI: "/token-icons/link.png",
    verified: true
  },
  {
    name: "Uniswap",
    symbol: "UNI",
    address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    decimals: 18,
    logoURI: "/token-icons/uni.png",
    verified: true
  },
  {
    name: "Aave",
    symbol: "AAVE",
    address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
    decimals: 18,
    logoURI: "/token-icons/aave.png",
    verified: true
  },
  {
    name: "Gala v2",
    symbol: "GALA",
    address: "0x17A1D8C9de53e54498A7B2DBc9b59102E6E38FeE",
    decimals: 8,
    logoURI: "/token-icons/gala.png",
    verified: true
  }
] 