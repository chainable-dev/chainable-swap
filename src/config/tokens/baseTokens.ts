import type { TokenConfig } from './types'

export const baseTokens: TokenConfig[] = [
  // Native & Stablecoins
  {
    name: "Wrapped Ether",
    symbol: "WETH",
    address: "0x4200000000000000000000000000000000000006",
    decimals: 18,
    logoURI: "/token-icons/weth.png",
    verified: true
  },
  {
    name: "USD Coin",
    symbol: "USDC",
    address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    decimals: 6,
    logoURI: "/token-icons/usdc.png",
    verified: true
  },
  {
    name: "Tether USD",
    symbol: "USDT",
    address: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
    decimals: 6,
    logoURI: "/token-icons/usdt.png",
    verified: true
  },
  {
    name: "DAI Stablecoin",
    symbol: "DAI",
    address: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
    decimals: 18,
    logoURI: "/token-icons/dai.png",
    verified: true
  },
  // Base-Specific Tokens
  {
    name: "Coinbase Wrapped Staked ETH",
    symbol: "cbETH",
    address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
    decimals: 18,
    logoURI: "/token-icons/cbeth.png",
    verified: true
  },
  // DeFi Blue Chips available on Base
  {
    name: "Chainlink",
    symbol: "LINK",
    address: "0x88Fb150BDc53A65fe94Dea0c9BA0a6dAf8C6e196",
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
    name: "Wrapped Bitcoin",
    symbol: "WBTC",
    address: "0x77852193BD608A518987b42A495b799E0Fc4E066",
    decimals: 8,
    logoURI: "/token-icons/wbtc.png",
    verified: true
  },
  {
    name: "Aave",
    symbol: "AAVE",
    address: "0x0c466540B2ee1a31b441671eac0ca886e051E410",
    decimals: 18,
    logoURI: "/token-icons/aave.png",
    verified: true
  },
  // Additional Base Tokens
  {
    name: "Balancer",
    symbol: "BAL",
    address: "0x4158734D47Fc9692176B5085E0F52ee0Da5d47F1",
    decimals: 18,
    logoURI: "/token-icons/bal.png",
    verified: true
  },
  {
    name: "Compound",
    symbol: "COMP",
    address: "0x9e1028F5F1D5eDE59748FFceE5532509976840E0",
    decimals: 18,
    logoURI: "/token-icons/comp.png",
    verified: true
  }
] 