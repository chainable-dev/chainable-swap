'use client';

import { Button } from '@/components/ui/button';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useEffect, useState } from 'react';

export function DisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(false);
  const { getItem, setItem } = useLocalStorage();

  useEffect(() => {
    const accepted = getItem('disclaimer-accepted');
    if (accepted) {
      setHasAccepted(true);
    } else {
      setIsVisible(true);
    }
  }, [getItem]);

  const handleAccept = () => {
    setItem('disclaimer-accepted', 'true');
    setIsVisible(false);
    setHasAccepted(true);
  };

  if (!isVisible || hasAccepted) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t z-50">
      <div className="container flex flex-col sm:flex-row items-center justify-between py-4 gap-4">
        <p className="text-sm text-muted-foreground">
          This application is for demonstration purposes only. By continuing, you agree to our{' '}
          <a
            href="https://www.chainable.co/terms-of-service"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary transition-colors"
          >
            Terms of Service
          </a>{' '}
          and{' '}
          <a
            href="https://www.chainable.co/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary transition-colors"
          >
            Privacy Policy
          </a>
          , and acknowledge the risks associated with blockchain technology and crypto assets.
        </p>
        {/* @ts-ignore */}
        <Button onClick={handleAccept} size="sm" className="whitespace-nowrap">
          I Understand
        </Button>
      </div>
    </div>
  );
}
