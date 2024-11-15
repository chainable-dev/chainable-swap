import { 
  CHAIN_IDS,
  type ChainConfig,
  arbitrumConfig,
  baseConfig,
  mainnetConfig,
  optimismConfig
} from '@/config/chains'
import { describe, expect, test } from 'vitest'

describe('Chain Configurations', () => {
  const allChains = {
    mainnet: mainnetConfig,
    base: baseConfig,
    optimism: optimismConfig,
    arbitrum: arbitrumConfig
  }

  describe('Chain IDs', () => {
    test('each chain should have correct chain ID', () => {
      expect(mainnetConfig.id).toBe(CHAIN_IDS.MAINNET)
      expect(baseConfig.id).toBe(CHAIN_IDS.BASE)
      expect(optimismConfig.id).toBe(CHAIN_IDS.OPTIMISM)
      expect(arbitrumConfig.id).toBe(CHAIN_IDS.ARBITRUM)
    })
  })

  describe('RPC URLs', () => {
    Object.entries(allChains).forEach(([chainName, config]) => {
      test(`${chainName} should have valid RPC URLs`, () => {
        expect(config.rpcUrls.default.http).toBeDefined()
        expect(config.rpcUrls.default.http.length).toBeGreaterThan(0)
        expect(config.rpcUrls.public.http).toBeDefined()
        expect(config.rpcUrls.public.http.length).toBeGreaterThan(0)

        // Check URL format
        config.rpcUrls.default.http.forEach(url => {
          expect(url).toMatch(/^https?:\/\//)
        })
        config.rpcUrls.public.http.forEach(url => {
          expect(url).toMatch(/^https?:\/\//)
        })
      })
    })
  })

  describe('Chain Properties', () => {
    Object.entries(allChains).forEach(([chainName, config]) => {
      test(`${chainName} should have required properties`, () => {
        // Basic properties
        expect(config.name).toBeDefined()
        expect(config.network).toBeDefined()
        
        // Native currency
        expect(config.nativeCurrency).toBeDefined()
        expect(config.nativeCurrency.name).toBeDefined()
        expect(config.nativeCurrency.symbol).toBeDefined()
        expect(config.nativeCurrency.decimals).toBe(18)

        // Block explorer
        expect(config.blockExplorers?.default?.url).toBeDefined()
        expect(config.blockExplorers?.default?.name).toBeDefined()

        // Multicall contract
        expect(config.contracts?.multicall3?.address).toBeDefined()
        expect(config.contracts?.multicall3?.blockCreated).toBeGreaterThan(0)
      })
    })
  })

  describe('Chain Consistency', () => {
    test('all chains should use consistent RPC providers', () => {
      const providers = new Set(
        Object.values(allChains)
          .flatMap(chain => chain.rpcUrls.default.http)
          .map(url => new URL(url).hostname)
      )
      
      // All chains should use the same RPC provider (llamarpc)
      expect(providers.size).toBe(1)
      expect(Array.from(providers)[0]).toBe('llamarpc.com')
    })
  })
}) 