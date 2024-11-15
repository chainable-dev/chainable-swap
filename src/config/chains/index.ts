export * from './types';
export * from './mainnet';
export * from './base';
export * from './optimism';
export * from './arbitrum';

import { arbitrumConfig } from './arbitrum';
import { baseConfig } from './base';
import { mainnetConfig } from './mainnet';
import { optimismConfig } from './optimism';

export const chains = [mainnetConfig, baseConfig, optimismConfig, arbitrumConfig] as const;

export const chainConfigs = {
  [mainnetConfig.id]: mainnetConfig,
  [baseConfig.id]: baseConfig,
  [optimismConfig.id]: optimismConfig,
  [arbitrumConfig.id]: arbitrumConfig,
} as const;
