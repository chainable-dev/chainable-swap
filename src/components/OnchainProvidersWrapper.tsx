'use client';

import { http } from 'viem'
import { WagmiProvider, createConfig } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { base, optimism, arbitrum, polygon, bsc } from 'viem/chains'
import { walletConnect, coinbaseWallet, injected } from 'wagmi/connectors'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { OnchainKitProvider } from '@coinbase/onchainkit'
import type { Transport } from 'viem'

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID || ''

const chains = [base, optimism, arbitrum, polygon, bsc] as const

const metadata = {
  name: 'Chainable',
  description: 'Swap tokens on Base',
  url: 'https://chainable.xyz',
  icons: ['/logo.png'],
}

const connectors = [
  walletConnect({ 
    projectId, 
    metadata, 
    showQrModal: false
  }),
  injected({ shimDisconnect: true }),
  coinbaseWallet({
    appName: metadata.name,
    appLogoUrl: metadata.icons[0]
  })
]

const transports = chains.reduce(
  (acc, chain) => ({
    ...acc,
    [chain.id]: http()
  }),
  {} as Record<(typeof chains)[number]['id'], Transport>
)

const wagmiConfig = createConfig({
  chains,
  transports,
  connectors,
})

const queryClient = new QueryClient()

export default function OnchainProvidersWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <OnchainKitProvider chain="base">
            {children}
          </OnchainKitProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
} 