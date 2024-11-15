import { 
  baseTokens, 
  optimismTokens, 
  arbitrumTokens,
  mainnetTokens,
  type TokenConfig 
} from '@/config/tokens/index'

describe('Token Images', () => {
  // Helper function to validate token config
  const validateToken = (token: TokenConfig): boolean => {
    return !!(token.verified && token.logoURI && token.address && token.decimals)
  }

  // Helper function to check tokens for a chain
  const checkTokens = (chainName: string, tokens: TokenConfig[]): void => {
    describe(`${chainName} Chain Tokens`, () => {
      test(`all ${chainName} tokens should be properly configured`, () => {
        const invalidTokens = tokens.filter(token => !validateToken(token))
        
        if (invalidTokens.length > 0) {
          console.error(`\nInvalid tokens for ${chainName}:`)
          invalidTokens.forEach(token => {
            console.error(`- ${token.name} (${token.symbol}): missing required fields`)
          })
        }
        
        expect(invalidTokens).toHaveLength(0)
      })

      test(`all ${chainName} tokens should have valid image paths`, () => {
        const tokensWithoutImages = tokens.filter(token => !token.logoURI?.startsWith('/token-icons/'))
        
        if (tokensWithoutImages.length > 0) {
          console.error(`\nTokens missing valid image paths for ${chainName}:`)
          tokensWithoutImages.forEach(token => {
            console.error(`- ${token.name} (${token.symbol}): ${token.logoURI}`)
          })
        }
        
        expect(tokensWithoutImages).toHaveLength(0)
      })

      test(`all ${chainName} tokens should have PNG images`, () => {
        const nonPngTokens = tokens.filter(token => !token.logoURI?.endsWith('.png'))
        
        if (nonPngTokens.length > 0) {
          console.error(`\nTokens with non-PNG images for ${chainName}:`)
          nonPngTokens.forEach(token => {
            console.error(`- ${token.name} (${token.symbol}): ${token.logoURI}`)
          })
        }
        
        expect(nonPngTokens).toHaveLength(0)
      })
    })
  }

  // Test each chain's tokens
  checkTokens('Mainnet', mainnetTokens)
  checkTokens('Base', baseTokens)
  checkTokens('Optimism', optimismTokens)
  checkTokens('Arbitrum', arbitrumTokens)

  // Test for shared token consistency
  test('shared tokens should use consistent image paths', () => {
    const allTokens = [...mainnetTokens, ...baseTokens, ...optimismTokens, ...arbitrumTokens]
    const tokensBySymbol = allTokens.reduce((acc, token) => {
      if (!acc[token.symbol]) {
        acc[token.symbol] = []
      }
      acc[token.symbol].push(token)
      return acc
    }, {} as Record<string, TokenConfig[]>)

    // Check that tokens with same symbol use same image
    for (const [symbol, tokens] of Object.entries(tokensBySymbol)) {
      if (tokens.length > 1) {
        const firstImage = tokens[0].logoURI
        const inconsistentTokens = tokens.filter(token => token.logoURI !== firstImage)
        
        if (inconsistentTokens.length > 0) {
          console.error(`\nInconsistent image paths for ${symbol}:`)
          inconsistentTokens.forEach(token => {
            console.error(`- ${token.name}: ${token.logoURI} (expected: ${firstImage})`)
          })
        }
        
        expect(inconsistentTokens).toHaveLength(0)
      }
    }
  })
}) 