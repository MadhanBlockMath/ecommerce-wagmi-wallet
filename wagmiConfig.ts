// wagmiConfig.ts
import { createConfig, http } from 'wagmi';
import { mainnet, sepolia, polygon } from 'wagmi/chains';
import { metaMask } from '@wagmi/connectors';

export const config = createConfig({
  chains: [mainnet, sepolia, polygon],
  connectors: [metaMask()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [polygon.id]: http(),
  },
  ssr: true,
});
