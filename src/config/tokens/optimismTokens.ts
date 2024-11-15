import type { TokenConfig } from './types'

export const optimismTokens: TokenConfig[] = [
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
    address: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
    decimals: 6,
    logoURI: "/token-icons/usdc.png",
    verified: true
  },
  {
    name: "Tether USD",
    symbol: "USDT",
    address: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
    decimals: 6,
    logoURI: "/token-icons/usdt.png",
    verified: true
  },
  {
    name: "DAI Stablecoin",
    symbol: "DAI",
    address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    decimals: 18,
    logoURI: "/token-icons/dai.png",
    verified: true
  },
  // Protocol & Governance Tokens
  {
    name: "Optimism",
    symbol: "OP",
    address: "0x4200000000000000000000000042000000",
    decimals: 18,
    logoURI: "/token-icons/op.png",
    verified: true
  },
  {
    name: "Synthetix",
    symbol: "SNX",
    address: "0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4",
    decimals: 18,
    logoURI: "/token-icons/snx.png",
    verified: true
  },
  {
    name: "Velodrome",
    symbol: "VELO",
    address: "0x3c8B650257cFb5f272f799F5e2b4e65093a11a05",
    decimals: 18,
    logoURI: "/token-icons/velo.png",
    verified: true
  },
  // DeFi Blue Chips
  {
    name: "Wrapped Bitcoin",
    symbol: "WBTC",
    address: "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
    decimals: 8,
    logoURI: "/token-icons/wbtc.png",
    verified: true
  },
  {
    name: "Chainlink",
    symbol: "LINK",
    address: "0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6",
    decimals: 18,
    logoURI: "/token-icons/link.png",
    verified: true
  },
  {
    name: "Uniswap",
    symbol: "UNI",
    address: "0x6fd9d7AD17242c41f7131d257212c54A0e816691",
    decimals: 18,
    logoURI: "/token-icons/uni.png",
    verified: true
  },
  {
    name: "Aave",
    symbol: "AAVE",
    address: "0x76FB31fb4af56892A25e32cFC43De717950c9278",
    decimals: 18,
    logoURI: "/token-icons/aave.png",
    verified: true
  }
] 