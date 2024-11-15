'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { config } from '@/config/wagmi';
import { Disclaimer } from './Disclaimer';

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

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
