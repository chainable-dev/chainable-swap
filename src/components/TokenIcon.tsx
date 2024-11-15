'use client';

import Image from 'next/image';
import type { TokenConfig } from '@/types/types';

interface TokenIconProps {
  token: TokenConfig;
  className?: string;
}

export function TokenIcon({ token, className = "w-5 h-5" }: TokenIconProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={token.logoURI || `/token-icons/${token.symbol.toLowerCase()}.png`}
        alt={token.symbol}
        fill
        className="object-contain"
      />
    </div>
  );
}
