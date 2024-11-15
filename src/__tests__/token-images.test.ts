import fs from 'fs'
import path from 'path'
import { 
  baseTokens, 
  optimismTokens, 
  arbitrumTokens,
  mainnetTokens,
  type TokenConfig 
} from '@/config/tokens/index'

describe('Token Images', () => {
  const tokenIconsPath = path.join(process.cwd(), 'public', 'token-icons')

  // Helper function to check if image exists
  const imageExists = (imagePath: string): boolean => {
    return fs.existsSync(path.join(tokenIconsPath, imagePath))
  }

  // Helper function to get image filename from logoURI
  const getImageFilename = (logoURI: string | undefined): string => {
    if (!logoURI) return ''
    return logoURI.split('/').pop() || ''
  }

  // Helper function to check tokens for a chain
  const checkTokenImages = (chainName: string, tokens: TokenConfig[]): void => {
    describe(`${chainName} Chain Tokens`, () => {
      tokens.forEach((token) => {
        test(`${token.name} (${token.symbol}) should have an image`, () => {
          const imageFilename = getImageFilename(token.logoURI)
          expect(imageFilename).not.toBe('')
          expect(imageExists(imageFilename)).toBe(true)
        })
      })

      test(`All ${chainName} tokens should have valid image paths`, () => {
        const missingImages = tokens.filter(token => {
          const imageFilename = getImageFilename(token.logoURI)
          return !imageExists(imageFilename)
        })

        if (missingImages.length > 0) {
          console.error(`\nMissing images for ${chainName} tokens:`)
          missingImages.forEach(token => {
            console.error(`- ${token.name} (${token.symbol}): ${token.logoURI}`)
          })
        }

        expect(missingImages).toHaveLength(0)
      })
    })
  }

  // Test Mainnet tokens
  checkTokenImages('Mainnet', mainnetTokens)

  // Test Base chain tokens
  checkTokenImages('Base', baseTokens)

  // Test Optimism chain tokens
  checkTokenImages('Optimism', optimismTokens)

  // Test Arbitrum chain tokens
  checkTokenImages('Arbitrum', arbitrumTokens)

  // Test for shared token images across chains
  test('Shared tokens use same image across chains', () => {
    const allTokens = [...mainnetTokens, ...baseTokens, ...optimismTokens, ...arbitrumTokens]
    const tokensBySymbol = allTokens.reduce((acc, token) => {
      if (!acc[token.symbol]) {
        acc[token.symbol] = []
      }
      acc[token.symbol].push(token)
      return acc
    }, {} as Record<string, TokenConfig[]>)

    // Check that tokens with same symbol use same image
    Object.values(tokensBySymbol).forEach(tokens => {
      if (tokens.length > 1) {
        const firstImage = tokens[0].logoURI
        tokens.forEach(token => {
          expect(token.logoURI).toBe(firstImage)
        })
      }
    })
  })

  // Test image file properties
  describe('Image File Properties', () => {
    const allTokens = [...mainnetTokens, ...baseTokens, ...optimismTokens, ...arbitrumTokens]
    const uniqueTokens = Array.from(new Set(allTokens.map(token => token.symbol)))
      .map(symbol => allTokens.find(token => token.symbol === symbol))
      .filter((token): token is TokenConfig => token !== undefined)
    
    uniqueTokens.forEach(token => {
      const imageFilename = getImageFilename(token.logoURI)
      
      if (imageExists(imageFilename)) {
        test(`${token.symbol} image should be a valid PNG file`, () => {
          const imagePath = path.join(tokenIconsPath, imageFilename)
          const fileStats = fs.statSync(imagePath)
          
          // Check if file is not empty
          expect(fileStats.size).toBeGreaterThan(0)
          
          // Check file extension
          expect(imageFilename.toLowerCase()).toMatch(/\.png$/)
        })
      }
    })
  })
}) 