'use client';

import type React from 'react';

export default function RainbowKitDisclaimer() {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '12px 16px',
        fontSize: '12px',
        color: '#666',
        borderTop: '1px solid #eaeaea',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: '#fff',
        borderBottomLeftRadius: '12px',
        borderBottomRightRadius: '12px',
      }}
    >
      By connecting your wallet, you agree to our{' '}
      <a
        href="https://www.chainable.co/terms-of-service"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#0066FF] no-underline font-medium hover:underline"
      >
        Terms of Service
      </a>{' '}
      and{' '}
      <a
        href="https://www.chainable.co/privacy-policy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#0066FF] no-underline font-medium hover:underline"
      >
        Privacy Policy
      </a>
    </div>
  );
}
