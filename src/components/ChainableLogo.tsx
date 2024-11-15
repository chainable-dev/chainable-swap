'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ChainableLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const LOGO_SIZES = {
  sm: 24,
  md: 32,
  lg: 40,
} as const;

const TEXT_SIZES = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
} as const;

export const ChainableLogo = ({ 
  className, 
  showText = true,
  size = 'md' 
}: ChainableLogoProps) => {
  const logoSize = LOGO_SIZES[size];
  const textSize = TEXT_SIZES[size];

  return (
    <Link 
      href="/" 
      className={cn(
        "flex items-center gap-2 hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-md",
        className
      )}
      aria-label="Chainable Home"
    >
      <div 
        className="relative shrink-0" 
        style={{ width: logoSize, height: logoSize }}
      >
        <Image
          src="/chainable-logo.svg"
          alt="Chainable Logo"
          fill
          sizes={`${logoSize}px`}
          priority
          className="object-contain"
        />
      </div>
      {showText && (
        <span className={cn(
          textSize,
          "font-bold select-none text-foreground"
        )}>
          Chainable
        </span>
      )}
    </Link>
  );
};

export default ChainableLogo;
