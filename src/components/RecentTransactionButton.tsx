'use client';

import { useAddRecentTransaction } from '@rainbow-me/rainbowkit';
import { Button } from './ui/button';

interface RecentTransactionButtonProps {
  hash: string;
  description: string;
}

export function RecentTransactionButton({ hash, description }: RecentTransactionButtonProps) {
  const addRecentTransaction = useAddRecentTransaction();

  const handleAddTransaction = () => {
    addRecentTransaction({
      hash,
      description,
    });
  };

  return (
    <Button onClick={handleAddTransaction} variant="outline" size="sm">
      Add Transaction
    </Button>
  );
} 