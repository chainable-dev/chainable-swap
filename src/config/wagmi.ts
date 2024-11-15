import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { arbitrum, base, mainnet, optimism } from 'viem/chains';
import { http, createConfig } from 'wagmi';

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID as string;
if (!projectId) {
  throw new Error('Missing NEXT_PUBLIC_WC_PROJECT_ID');
}

const { connectors } = getDefaultWallets({
  appName: 'Chainable Swap',
  projectId,
});

const chains = [base, optimism, arbitrum, mainnet] as const;

export const config = createConfig({
  chains,
  transports: {
    [base.id]: http(),
    [optimism.id]: http(),
    [arbitrum.id]: http(),
    [mainnet.id]: http(),
  },
  connectors,
});

export { chains };
