'use client';

import { useAddRecentTransaction } from '@rainbow-me/rainbowkit';
import { useCallback } from 'react';

export interface TransactionDetails {
  hash: `0x${string}`;
  description: string;
  confirmations?: number;
}

export function useRecentTransactions() {
  const addRecentTransaction = useAddRecentTransaction();

  const trackTransaction = useCallback(
    ({ hash, description }: TransactionDetails) => {
      if (!hash || !description) {
        console.warn('Transaction hash and description are required');
        return;
      }

      try {
        // Add transaction to RainbowKit's transaction list
        addRecentTransaction({
          hash,
          description,
        });
      } catch (error) {
        console.error('Failed to track transaction:', error);
      }
    },
    [addRecentTransaction]
  );

  return { trackTransaction };
}
