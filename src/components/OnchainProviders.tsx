'use client';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { base, baseSepolia } from 'viem/chains';
import { createWeb3Modal } from '@web3modal/wagmi';
import { defaultWagmiConfig } from '@web3modal/wagmi';
import { arbitrum, optimism } from '@/config/chains';

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID!;

if (!projectId) {
  throw new Error('NEXT_PUBLIC_WC_PROJECT_ID is not defined');
}

const metadata = {
  name: 'Swap App',
  description: 'Multichain Swap Application',
  url: 'https://swap.app',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const chains = [base, baseSepolia, optimism, arbitrum] as const;

const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  chains,
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#3EB8B3'
  }
});

const queryClient = new QueryClient();

interface Props {
  children: React.ReactNode;
}

export function OnchainProviders({ children }: Props) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default OnchainProviders;
