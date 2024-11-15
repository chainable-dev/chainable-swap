'use client';

import Image from 'next/image';
import Link from 'next/link';

export const ChainableLogo = () => {
  return (
    //@ts-ignore
    <Link href="/" className="flex items-center">
      {/* @ts-ignore */}
      <Image src="/chainable-logo.svg" alt="Chainable Logo" width={32} height={32} priority />
      <span className="ml-2 text-xl font-bold">Chainable</span>
    </Link>
  );
};

export default ChainableLogo;
