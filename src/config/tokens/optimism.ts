import type { Token } from '@coinbase/onchainkit/token'

export const OPTIMISM_CHAIN_ID = 10

export const optimismTokens: Token[] = [
  {
    address: '0x0000000000000000000000000000000000000000',
    chainId: OPTIMISM_CHAIN_ID,
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
    image: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
  },
  {
    address: '0x4200000000000000000000000000000000000006',
    chainId: OPTIMISM_CHAIN_ID,
    decimals: 18,
    name: 'Wrapped Ether',
    symbol: 'WETH',
    image: '/token-icons/weth.png',
  },
  {
    address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
    chainId: OPTIMISM_CHAIN_ID,
    decimals: 6,
    name: 'USD Coin',
    symbol: 'USDC',
    image: '/token-icons/usdc.png',
  },
  {
    address: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
    chainId: OPTIMISM_CHAIN_ID,
    decimals: 6,
    name: 'Tether USD',
    symbol: 'USDT',
    image: '/token-icons/usdt.png',
  },
  {
    address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
    chainId: OPTIMISM_CHAIN_ID,
    decimals: 18,
    name: 'DAI Stablecoin',
    symbol: 'DAI',
    image: '/token-icons/dai.png',
  },
  {
    address: '0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6',
    chainId: OPTIMISM_CHAIN_ID,
    decimals: 18,
    name: 'Chainlink',
    symbol: 'LINK',
    image: '/token-icons/link.png',
  },
  {
    address: '0x6fd9d7AD17242c41f7131d257212c54A0e816691',
    chainId: OPTIMISM_CHAIN_ID,
    decimals: 18,
    name: 'Uniswap',
    symbol: 'UNI',
    image: '/token-icons/uni.png',
  },
  {
    address: '0x68f180fcCe6836688e9084f035309E29Bf0A2095',
    chainId: OPTIMISM_CHAIN_ID,
    decimals: 8,
    name: 'Wrapped Bitcoin',
    symbol: 'WBTC',
    image: '/token-icons/wbtc.png',
  },
  {
    address: '0x76FB31fb4af56892A25e32cFC43De717950c9278',
    chainId: OPTIMISM_CHAIN_ID,
    decimals: 18,
    name: 'Aave',
    symbol: 'AAVE',
    image: '/token-icons/aave.png',
  }
]