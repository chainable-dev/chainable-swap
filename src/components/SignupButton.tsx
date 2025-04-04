'use client';

import WalletWrapper from './WalletWrapper';

export default function SignupButton() {
  return (
    //@ts-ignore
    <WalletWrapper className="px-4 py-2 text-[var(--accent-green)] border border-[var(--accent-green)] rounded-lg hover:bg-[var(--accent-green)] hover:text-[var(--background)] transition-colors">
      Sign Up
    </WalletWrapper>
  );
}
