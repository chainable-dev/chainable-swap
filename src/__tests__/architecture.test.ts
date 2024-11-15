import * as fs from 'fs'
import * as path from 'path'
import { glob } from 'glob'
import { describe, expect, test } from 'vitest'

describe('Project Architecture', () => {
  describe('Directory Structure', () => {
    test('should have correct base directories', () => {
      const requiredDirs = [
        'src',
        'src/app',
        'src/components',
        'src/config',
        'src/hooks',
        'src/utils',
        'src/__tests__',
        'public',
        'public/token-icons'
      ]

      requiredDirs.forEach(dir => {
        expect(fs.existsSync(dir)).toBe(true)
      })
    })

    test('should not have pages directory', () => {
      expect(fs.existsSync('pages')).toBe(false)
      expect(fs.existsSync('src/pages')).toBe(false)
    })
  })

  describe('Component Standards', () => {
    test('all components should be TypeScript files', async () => {
      const files = await glob.sync('src/components/**/*')
      const nonTsFiles = files.filter(file => {
        const stats = fs.statSync(file)
        if (stats.isDirectory() || file.includes('src/components/ui')) {
          return false
        }
        return !file.endsWith('.ts') && !file.endsWith('.tsx') && !file.endsWith('.d.ts')
      })
      
      if (nonTsFiles.length > 0) {
        throw new Error(`Found non-TypeScript files in components directory:\n${nonTsFiles.join('\n')}`)
      }
      expect(nonTsFiles).toHaveLength(0)
    })

    test('all components should have proper exports', () => {
      const components = glob.sync('src/components/**/*.tsx')
      const ignoredComponents = ['src/components/ui/', 'src/components/layout/']
      let failedComponents: string[] = []
      
      const EXPORT_PATTERN = /(export\s+(default\s+|function\s+|const\s+|{[^}]*}|type\s+|interface\s+|class\s+))|(export\s+\{[^}]+\})/
      
      components.forEach(file => {
        if (ignoredComponents.some(ignored => file.includes(ignored))) {
          console.log(`Skipping ignored component: ${file}`)
          return
        }

        const content = fs.readFileSync(file, 'utf8')
        const hasProperExport = EXPORT_PATTERN.test(content)
        
        if (!hasProperExport) {
          failedComponents.push(file)
          console.log('\n' + '='.repeat(80))
          console.log(`File with missing proper exports: ${file}`)
          console.log('First 200 characters:')
          console.log('-'.repeat(50))
          console.log(content.slice(0, 200))
          console.log('-'.repeat(50))
          console.log('Full file path:', path.resolve(file))
          console.log('Content length:', content.length)
          console.log('Export matches found:', content.match(/export/g)?.length || 0)
          console.log('File exists:', fs.existsSync(file))
          console.log('='.repeat(80) + '\n')
        }
      })
      
      if (failedComponents.length > 0) {
        console.log('\nAll components checked:')
        components.forEach(file => console.log(`- ${file}`))
        
        throw new Error(
          'Components with missing proper exports:\n' +
          failedComponents.map(file => `- ${file}`).join('\n') +
          '\n\nExpected pattern: ' + EXPORT_PATTERN.toString()
        )
      }
      
      expect(failedComponents).toHaveLength(0)
    })
  })

  describe('Client Components', () => {
    test('client components should have "use client" directive', async () => {
      const clientComponents = await glob.sync('src/components/**/*.tsx')
      
      for (const file of clientComponents) {
        if (file.includes('src/components/ui/') || file.includes('src/components/layout/')) continue
        
        const content = fs.readFileSync(file, 'utf8')
        const hasUseClient = content.includes('use client')
        
        if (!hasUseClient) {
          console.log('\nFile missing "use client" directive:', file)
          console.log('First 100 characters:')
          console.log('-'.repeat(50))
          console.log(content.slice(0, 100))
          console.log('-'.repeat(50))
        }
        
        expect(
          hasUseClient,
          `Component at ${file} is missing 'use client' directive.\nFirst 100 chars:\n${content.slice(0, 100)}`
        ).toBe(true)
      }
    })
  })

  describe('Configuration', () => {
    test('all config files should be in config directory', async () => {
      const configFiles = await glob.sync('src/**/*.config.*')
      configFiles.forEach(file => {
        expect(file.startsWith('src/config/')).toBe(true)
      })
    })
  })

  describe('Token Configuration', () => {
    test('each chain should have its own token file', () => {
      const tokenFiles = [
        'src/config/tokens/mainnetTokens.ts',
        'src/config/tokens/baseTokens.ts',
        'src/config/tokens/optimismTokens.ts',
        'src/config/tokens/arbitrumTokens.ts'
      ]

      tokenFiles.forEach(file => {
        expect(fs.existsSync(file)).toBe(true)
      })
    })

    test('token files should follow naming convention', async () => {
      const tokenFiles = await glob.sync('src/config/tokens/*Tokens.ts')
      tokenFiles.forEach(file => {
        const filename = path.basename(file)
        expect(filename).toMatch(/^[a-z]+Tokens\.ts$/)
      })
    })
  })

  describe('Hooks', () => {
    test('custom hooks should start with use', async () => {
      const hookFiles = await glob.sync('src/hooks/**/*.ts')
      hookFiles.forEach(file => {
        const filename = path.basename(file, '.ts')
        expect(filename.startsWith('use')).toBe(true)
      })
    })

    test('hooks should be TypeScript files', async () => {
      const files = await glob.sync('src/hooks/**/*')
      const nonTsFiles = files.filter(file => !file.endsWith('.ts'))
      expect(nonTsFiles).toHaveLength(0)
    })
  })

  describe('Testing', () => {
    test('test files should be in __tests__ directory', async () => {
      const testFiles = await glob.sync('src/**/*.test.{ts,tsx}')
      testFiles.forEach(file => {
        expect(file.includes('__tests__')).toBe(true)
      })
    })
  })

  describe('Type Safety', () => {
    test('should not have any .js files', async () => {
      const jsFiles = await glob.sync('src/**/*.js')
      expect(jsFiles).toHaveLength(0)
    })

    test('should have TypeScript config', () => {
      expect(fs.existsSync('tsconfig.json')).toBe(true)
    })
  })
}) 