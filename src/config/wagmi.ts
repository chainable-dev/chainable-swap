import { http, createConfig } from 'wagmi'
import { base, optimism, arbitrum } from 'viem/chains'
import { getDefaultWallets } from '@rainbow-me/rainbowkit'

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string
if (!projectId) {
  throw new Error('Missing NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID')
}

const { connectors } = getDefaultWallets({
  appName: 'Chainable Swap',
  projectId
})

const chains = [base, optimism, arbitrum] as const

export const config = createConfig({
  chains,
  transports: {
    [base.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
  },
  connectors
})

export { chains } 