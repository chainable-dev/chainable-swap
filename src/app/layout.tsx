import { OnchainProviders } from '@/components/OnchainProviders';
import '@rainbow-me/rainbowkit/styles.css';
import { Header } from '@/components/Header';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <OnchainProviders>
          <Header />
          {children}
        </OnchainProviders>
      </body>
    </html>
  );
}
