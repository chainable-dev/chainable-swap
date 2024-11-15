'use client';

import { Swapper } from '@/components/Swapper';
import { ChainSelector } from '@/components/ChainSelector';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D111C]">
      {/* Header */}
      <div className="w-full border-b border-gray-800/50 bg-[#0D111C]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Swap</h1>
          <div className="flex items-center gap-4">
            <ChainSelector />
            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                className="text-white hover:text-white/90"
              >
                Market
              </Button>
              <Button 
                variant="ghost"
                className="text-gray-500"
              >
                Limit
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Swap Interface */}
      <div className="container mx-auto px-4 py-8">
        <Swapper />
      </div>
    </main>
  );
}
