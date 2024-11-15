'use client'

import {
  Swap,
  SwapAmountInput,
  SwapToggleButton,
  SwapButton,
  SwapMessage,
  SwapToast,
} from '@coinbase/onchainkit/swap'
import type { Token } from '@coinbase/onchainkit/token'
import { useChainId } from 'wagmi'
import { baseTokens } from '@/config/tokens/base'
import { useState } from 'react'

export default function SwapModal() {
  const chainId = useChainId()
  const [tokens] = useState<Token[]>(baseTokens)

  if (chainId !== 8453) {
    return (
      <div className="flex flex-col gap-4 p-4 text-center">
        <p>Please switch to Base chain</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <Swap>
        <SwapAmountInput
          label="You pay"
          swappableTokens={tokens}
          token={tokens[0]}
          type="from"
        />
        <SwapToggleButton />
        <SwapAmountInput
          label="You receive"
          swappableTokens={tokens}
          token={tokens[1]}
          type="to"
        />
        <SwapButton />
        <SwapMessage />
        <SwapToast />
      </Swap>
    </div>
  )
}
