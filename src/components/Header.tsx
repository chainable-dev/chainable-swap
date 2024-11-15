'use client';

import { ChainableLogo } from './ChainableLogo';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ChainSelector } from './ChainSelector';

export function Header() {
  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between h-16 px-4">
        <ChainableLogo />
        
        <div className="flex items-center gap-4">
          <ChainSelector />
          <ConnectButton 
            chainStatus="none"
            showBalance={true}
            accountStatus={{
              smallScreen: 'avatar',
              largeScreen: 'full',
            }}
          />
        </div>
      </div>
    </header>
  );
} 