'use client';

import Image from 'next/image';
import Link from 'next/link';

export const ChainableLogo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/chainable-logo.svg"
        alt="Chainable Logo"
        width={32}
        height={32}
        priority
      />
      <span className="ml-2 text-xl font-bold">Chainable</span>
    </Link>
  );
};

export default ChainableLogo;
