import { Token } from "@coinbase/onchainkit/token";

export const optimismTokens: Token[] = [
  {
    address: '0x0000000000000000000000000000000000000000',
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
    image: '/token-icons/eth.png',
    chainId: 10, // Add chainId
  },
  // Native & Stablecoins
  {
    name: 'Wrapped Ether',
    symbol: 'WETH',
    address: '0x4200000000000000000000000000000000000006',
    decimals: 18,
    image: '/token-icons/weth.png',
    chainId: 10, // Add chainId
  },
  {
    name: 'USD Coin',
    symbol: 'USDC',
    address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
    decimals: 6,
    image: '/token-icons/usdc.png',
    chainId: 10, // Add chainId
  },
  {
    name: 'Tether USD',
    symbol: 'USDT',
    address: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
    decimals: 6,
    image: '/token-icons/usdt.png',
    chainId: 10, // Add chainId
  },
  {
    name: 'DAI Stablecoin',
    symbol: 'DAI',
    address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
    decimals: 18,
    image: '/token-icons/dai.png',
    chainId: 10, // Add chainId
  },
  // Protocol & Governance Tokens
  {
    name: 'Optimism',
    symbol: 'OP',
    address: '0x4200000000000000000000000042000000',
    decimals: 18,
    image: '/token-icons/op.png',
    chainId: 10, // Add chainId
  },
  {
    name: 'Synthetix',
    symbol: 'SNX',
    address: '0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4',
    decimals: 18,
    image: '/token-icons/snx.png',
    chainId: 10, // Add chainId
  },
  {
    name: 'Velodrome',
    symbol: 'VELO',
    address: '0x3c8B650257cFb5f272f799F5e2b4e65093a11a05',
    decimals: 18,
    image: '/token-icons/velo.png',
    chainId: 10, // Add chainId
  },
  // DeFi Blue Chips
  {
    name: 'Wrapped Bitcoin',
    symbol: 'WBTC',
    address: '0x68f180fcCe6836688e9084f035309E29Bf0A2095',
    decimals: 8,
    image: '/token-icons/wbtc.png',
    chainId: 10, // Add chainId
  },
  {
    name: 'Chainlink',
    symbol: 'LINK',
    address: '0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6',
    decimals: 18,
    image: '/token-icons/link.png',
    chainId: 10, // Add chainId
  },
  {
    name: 'Uniswap',
    symbol: 'UNI',
    address: '0x6fd9d7AD17242c41f7131d257212c54A0e816691',
    decimals: 18,
    image: '/token-icons/uni.png',
    chainId: 10, // Add chainId
  },
  {
    name: 'Aave',
    symbol: 'AAVE',
    address: '0x76FB31fb4af56892A25e32cFC43De717950c9278',
    decimals: 18,
    image: '/token-icons/aave.png',
    chainId: 10, // Add chainId
  },
];
