'use client';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { RainbowKitProvider, DisclaimerComponent, darkTheme } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { base } from 'viem/chains';
import { WagmiProvider } from 'wagmi';
import { NEXT_PUBLIC_CDP_API_KEY } from '../config';
import { useWagmiConfig } from '../wagmi';
import {Disclaimer} from './Disclaimer';
type Props = { children: ReactNode };

const queryClient = new QueryClient();

function OnchainProviders({ children }: Props) {
  const wagmiConfig = useWagmiConfig();

  return (
    //@ts-ignore
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider apiKey={NEXT_PUBLIC_CDP_API_KEY} chain={base}>
          <RainbowKitProvider 
            appInfo={{
              appName: 'Chainable Swap',
              disclaimer: Disclaimer,
            }}
            
            modalSize="wide"

            theme={
              darkTheme()
            }
            
            showRecentTransactions={true}
            

          >
            {children}
          </RainbowKitProvider>
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default OnchainProviders;
