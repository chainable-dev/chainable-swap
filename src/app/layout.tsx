import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './global.css';
import '@coinbase/onchainkit/styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import OnchainProviders from 'src/components/OnchainProviders';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chainable',
  description: 'Swap tokens on Base',
  icons: {
    icon: '/favicon.ico',
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background min-h-screen`}>
        <OnchainProviders>{children}</OnchainProviders>
      </body>
    </html>
  );
}
