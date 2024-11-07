'use client'

import { ChainSelector } from "./ChainSelector"
import WalletWrapper from "./WalletWrapper"
import { useState } from "react"
import { base } from "viem/chains"

export function Header() {
  const [selectedChain, setSelectedChain] = useState(base.id)

  return (
    <header className="flex justify-between items-center p-4 border-b">
      <div className="flex-1">
        <h1 className="text-xl font-bold">Chainable</h1>
      </div>
      <div className="flex items-center gap-4">
        <ChainSelector 
          selectedChain={selectedChain}
          //@ts-ignore
          onChainSelect={setSelectedChain}
        />
        <WalletWrapper />
      </div>
    </header>
  )
} 