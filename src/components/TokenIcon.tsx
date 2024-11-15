'use client';

import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { useState } from 'react';

interface TokenIconProps {
  src: string | StaticImageData;
  alt: string;
  size?: number;
}

export const TokenIcon = ({ src, alt, size = 48 }: TokenIconProps) => {
  const [error, setError] = useState(false);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* @ts-ignore */}
      <Image
        src={error ? '/token-icons/default.png' : src}
        alt={alt}
        width={size}
        height={size}
        className="rounded-full"
        priority={false}
        onError={() => setError(true)}
        loading="lazy"
      />
    </div>
  );
};

export default TokenIcon;
