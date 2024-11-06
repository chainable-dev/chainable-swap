'use client'

import { Button } from "@/components/ui/button"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

interface Chain {
  id: number
  name: string
  logo: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: 18
  }
}

const chains: Chain[] = [
  { 
    id: 8453,
    name: 'Base',
    logo: '/chain-logos/base.svg',
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18
    }
  },
  { 
    id: 42161,
    name: 'Arbitrum One',
    logo: '/chain-logos/arbitrum.svg',
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18
    }
  },
  { 
    id: 10,
    name: 'Optimism',
    logo: '/chain-logos/optimism.svg',
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18
    }
  },
  { 
    id: 137,
    name: 'Polygon',
    logo: '/chain-logos/polygon.svg',
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
    }
  },
  { 
    id: 56,
    name: 'BNB Chain',
    logo: '/chain-logos/bnb.svg',
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18
    }
  }
]

interface ChainSelectorProps {
  selectedChain: number
  onChainSelect: (chainId: number) => void
  className?: string
}

export function ChainSelector({ selectedChain, onChainSelect, className = "" }: ChainSelectorProps) {
  const currentChain = chains.find(chain => chain.id === selectedChain) || chains[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className={`flex items-center gap-2 ${className}`}>
          <Image 
            src={currentChain.logo}
            alt={currentChain.name}
            width={24}
            height={24}
          />
          {currentChain.name}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {chains.map((chain) => (
          <DropdownMenuItem
            key={chain.id}
            onClick={() => onChainSelect(chain.id)}
            className="flex items-center gap-2"
          >
            <Image 
              src={chain.logo}
              alt={chain.name}
              width={24}
              height={24}
            />
            {chain.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 