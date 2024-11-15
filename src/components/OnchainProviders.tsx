'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { config } from '@/config/wagmi';
import { Disclaimer } from './Disclaimer';

interface Props {
  children: React.ReactNode;
}

// Create QueryClient instance outside component to prevent recreation
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      refetchOnWindowFocus: false,
    },
  },
});

export function OnchainProviders({ children }: Props) {
  return (
    //@ts-ignore - wagmi types are not compatible with the latest version
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          appInfo={{
            appName: 'Chainable',
            disclaimer: Disclaimer,
          }}
          theme={darkTheme({
            accentColor: '#3EB8B3',
          })}
          showRecentTransactions={true}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default OnchainProviders;
