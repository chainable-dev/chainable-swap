'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full py-4 text-center bg-gray-800 text-white">
      <div className="mb-2">
        
        <Link href="https://chainable.co" target="_blank" rel="noopener noreferrer">
          Powered by Chainable
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
