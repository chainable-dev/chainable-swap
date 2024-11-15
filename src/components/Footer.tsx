'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full py-4 text-center">
      {/* @ts-ignore */}
      <Link href="https://chainable.co" target="_blank" rel="noopener noreferrer">
        Powered by Chainable
      </Link>
    </footer>
  );
}

export default Footer;
