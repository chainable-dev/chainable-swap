'use client';

import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Disclaimer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has previously dismissed the disclaimer
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    if (!hasSeenDisclaimer) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('hasSeenDisclaimer', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 m-4 z-50">
      <div className="bg-gray-800/95 border border-gray-700 rounded-lg p-4 backdrop-blur-sm shadow-lg max-w-2xl mx-auto">
        <div className="flex items-start justify-between">
          <div className="flex-1 text-sm text-white/90">
            <p>
              Warning: This is beta software. Use at your own risk. Funds may be lost. 
              By using Chainable, you agree to our Terms of Service and acknowledge the risks involved in DeFi transactions.
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="ml-4 p-1 hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Dismiss disclaimer"
          >
            <X className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
} 