'use client';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { RainbowKitProvider, DisclaimerComponent, darkTheme } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { base } from 'viem/chains';
import { WagmiProvider } from 'wagmi';
import { NEXT_PUBLIC_CDP_API_KEY } from '../config';
import { useWagmiConfig } from '../wagmi';

type Props = { children: ReactNode };

const Disclaimer: DisclaimerComponent = ({ Text, Link }) => (
  //@ts-ignore
  <Text>
    By connecting your wallet, you agree to the{' '}
    {/* @ts-ignore */}
    <Link href="https://www.chainable.co/terms-of-service" style={{color: '#0066CC', textDecoration: 'underline'}}>
      Terms of Service
    </Link> and
    acknowledge you have read and understand that Chainable is in beta. Please review our{' '}
    {/* @ts-ignore */}
    <Link href="https://www.chainable.co/privacy-policy" style={{color: '#0066CC', textDecoration: 'underline'}}>
      Privacy Policy
    </Link>
  </Text>
);

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
            modalSize="compact"
            initialChain={base}
            showRecentTransactions={true}
            theme={darkTheme()} 
          >
            {children}
          </RainbowKitProvider>
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default OnchainProviders;
