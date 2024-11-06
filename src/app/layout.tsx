import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';
import '@coinbase/onchainkit/styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import OnchainProvidersWrapper from 'src/components/OnchainProvidersWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chainable',
  description: 'Swap tokens on Base',
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background min-h-screen`}>
        <OnchainProvidersWrapper>{children}</OnchainProvidersWrapper>
      </body>
    </html>
  );
}
