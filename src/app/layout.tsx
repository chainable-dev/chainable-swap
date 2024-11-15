import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';
import '@coinbase/onchainkit/styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import OnchainProviders from '@/components/OnchainProviders';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chainable',
  description: 'Swap tokens on Base',
  icons: {
    icon: '/logo-swap.svg',
    shortcut: '/logo-swap.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en" className="dark">
      <body className={`${inter.className} bg-background min-h-screen`}>
      <OnchainProviders>{children}</OnchainProviders>
      </body>
      </html>
  );
}
