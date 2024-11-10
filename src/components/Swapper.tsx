import {
  Swap,
  SwapAmountInput,
  SwapToggleButton,
  SwapButton,
  SwapMessage,
  SwapToast,
} from '@coinbase/onchainkit/swap'
import { BASE_TOKENS } from '@/config/tokens'

export default function SwapModal() {
  const swappableTokens = BASE_TOKENS

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
  )
}
