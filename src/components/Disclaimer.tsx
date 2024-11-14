'use client';

import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Disclaimer() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    if (hasSeenDisclaimer) {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('hasSeenDisclaimer', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-[400px] bg-card/90 backdrop-blur-sm border border-[#3EB8B3]/20 rounded-xl p-4 z-50">
      <button 
        onClick={handleClose}
        className="absolute top-3 right-3 text-white/60 hover:text-white"
      >
        <X size={20} />
      </button>
      <div className="pr-6">
        <h3 className="text-lg font-semibold mb-2">⚠️ Beta Warning</h3>
        <p className="text-sm text-white/80">
          This is a beta version. Please use with caution and only trade small amounts.
        </p>
      </div>
    </div>
  );
} 