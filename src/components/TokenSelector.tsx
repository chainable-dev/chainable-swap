'use client';

import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import Image from 'next/image';
import { useChainId } from 'wagmi';

import { getTokensByChain } from '@/config/tokens/index';
import type { TokenConfig } from '@/types/types';

interface TokenSelectorProps {
  selectedToken: TokenConfig;
  onSelect: (token: TokenConfig) => void;
  disabledTokens?: string[]; // Optional array of token addresses to disable
}

export function TokenSelector({ selectedToken, onSelect, disabledTokens = [] }: TokenSelectorProps) {
  const chainId = useChainId();
  const availableTokens = getTokensByChain(chainId);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          className="h-10 px-3 flex items-center gap-2 bg-[#131A2A] hover:bg-[#1B2436] rounded-2xl"
        >
          <div className="relative w-6 h-6">
            <Image
              src={selectedToken.logoURI}
              alt={selectedToken.symbol}
              fill
              className="object-contain rounded-full"
            />
          </div>
          <span className="text-base font-medium text-white">
            {selectedToken.symbol}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-[200px] bg-[#131A2A] border border-gray-800/50"
      >
        {availableTokens.map((token: TokenConfig) => (
          <DropdownMenuItem
            key={token.address}
            onClick={() => onSelect(token)}
            disabled={disabledTokens.includes(token.address)}
            className={`flex items-center gap-3 px-3 py-2 hover:bg-[#1B2436] cursor-pointer ${disabledTokens.includes(token.address) ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <div className="relative w-6 h-6">
              <Image
                src={token.logoURI}
                alt={token.symbol}
                fill
                className="object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-white">
                {token.symbol}
              </span>
              <span className="text-xs text-gray-400">
                {token.name}
              </span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default TokenSelector; 