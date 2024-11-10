import {
  Swap,
  SwapAmountInput,
  SwapToggleButton,
  SwapButton,
  SwapMessage,
  SwapToast,
} from '@coinbase/onchainkit/swap'
import { BASE_TOKENS } from '@/config/tokens'
import { useState } from 'react'
import { RainbowKitProvider, coolMode } from '@rainbow-me/rainbowkit'

export default function SwapModal() {
  const swappableTokens = BASE_TOKENS
<<<<<<< Updated upstream

  return (
    <Swap>
      <SwapAmountInput
        label="You pay"
        swappableTokens={swappableTokens}
        token={swappableTokens[0]}
        type="from"
      />

      <SwapToggleButton />

      <SwapAmountInput
        label="You receive"
        swappableTokens={swappableTokens}
        token={swappableTokens[1]}
        type="to"
      />

      <SwapButton />

      <SwapMessage />

      <SwapToast />
    </Swap>
=======
  const [isCoolMode, setIsCoolMode] = useState(false)
  
  return (
    <>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setIsCoolMode(!isCoolMode)}
          className="px-3 py-1.5 text-sm rounded-lg bg-[#3EB8B3]/10 text-[#3EB8B3] hover:bg-[#3EB8B3]/20 transition-colors"
        >
          {isCoolMode ? '🎉 Cool Mode On' : '✨ Cool Mode Off'}
        </button>
      </div>

      <RainbowKitProvider coolMode={isCoolMode}>
        <Swap>
          <SwapAmountInput
            label="You pay"
            swappableTokens={swappableTokens}
            token={swappableTokens[0]}
            type="from"
          />
          
          <SwapToggleButton />
          
          <SwapAmountInput
            label="You receive"
            swappableTokens={swappableTokens}
            token={swappableTokens[1]}
            type="to"
          />
          
          <SwapButton />
          
          <SwapMessage />
          
          <SwapToast />
        </Swap>
      </RainbowKitProvider>
    </>
>>>>>>> Stashed changes
  )
}
