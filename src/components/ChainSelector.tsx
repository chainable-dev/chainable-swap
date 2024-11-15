'use client';

import { Button } from './ui/button';
import { useChainId, useSwitchChain } from 'wagmi';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import Image from 'next/image';
import { base, optimism, arbitrum, mainnet } from 'wagmi/chains';
import { getTokensForChain } from '@/config/chains';

const SUPPORTED_CHAINS = [
  {
    ...base,
    iconUrl: '/chain-logos/base.svg',
    tokens: getTokensForChain(base.id)
  },
  {
    ...optimism,
    iconUrl: '/chain-logos/optimism.svg',
    tokens: getTokensForChain(optimism.id)
  },
  {
    ...arbitrum,
    iconUrl: '/chain-logos/arbitrum.svg',
    tokens: getTokensForChain(arbitrum.id)
  },
  {
    ...mainnet,
    iconUrl: '/chain-logos/ethereum.svg',
    tokens: getTokensForChain(mainnet.id)
  }
] as const;

export function ChainSelector() {
  const chainId = useChainId();
  const { switchChain, isPending } = useSwitchChain();

  const currentChain = SUPPORTED_CHAINS.find(c => c.id === chainId) ?? SUPPORTED_CHAINS[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="flex items-center gap-2 px-3 py-2 rounded-full"
          disabled={isPending}
        >
          <div className="relative w-5 h-5">
            <Image
              src={currentChain.iconUrl}
              alt={currentChain.name}
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
          {currentChain.name}
          {isPending && <span className="ml-2">...</span>}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {SUPPORTED_CHAINS.map((chain) => (
          <DropdownMenuItem
            key={chain.id}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => switchChain?.({ chainId: chain.id })}
            disabled={chain.id === chainId}
          >
            <div className="relative w-5 h-5">
              <Image
                src={chain.iconUrl}
                alt={chain.name}
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span>{chain.name}</span>
              <span className="text-xs text-muted-foreground">
                {chain.tokens.length} tokens available
              </span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
