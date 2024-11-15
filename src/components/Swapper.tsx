import {
  Swap,
  SwapAmountInput,
  SwapToggleButton,
  SwapButton,
  SwapMessage,
  SwapToast,
} from '@coinbase/onchainkit/swap';
import {useChainId} from "wagmi";
import {chainConfigs} from "@/config/chains";
import {getTokensByChain} from "@/config/tokens";

export default function SwapModal() {

    const chainId = useChainId(); // Get chain ID directly from wagmi

    //map the chain ID to the chain
    const chain = chainConfigs[chainId];


    //use the chain to get the tokenlist
    const tokens = getTokensByChain(chain.id);







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
  );
}
