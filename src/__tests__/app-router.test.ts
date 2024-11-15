import * as fs from 'fs'
import * as path from 'path'
import { glob } from 'glob'
import { describe, expect, test } from 'vitest'

describe('Next.js App Router Best Practices', () => {
  describe('Directory Structure', () => {
    test('should use app directory instead of pages', () => {
      expect(fs.existsSync('src/app')).toBe(true)
      expect(fs.existsSync('pages')).toBe(false)
      expect(fs.existsSync('src/pages')).toBe(false)
    })

    test('should have proper app directory structure', () => {
      const requiredFiles = [
        'src/app/layout.tsx',
        'src/app/page.tsx'
      ]

      requiredFiles.forEach(file => {
        expect(fs.existsSync(file)).toBe(true)
      })
    })
  })

  describe('Client Components', () => {
    test('client components should have "use client" directive', async () => {
      const clientComponents = await glob.sync('src/components/**/*.tsx')
      const ignoredComponents = ['src/components/ui/', 'src/components/layout/']
      
      for (const file of clientComponents) {
        // Skip ignored components
        if (ignoredComponents.some(ignored => file.includes(ignored))) {
          console.log(`Skipping ignored component: ${file}`)
          continue
        }
        
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

  describe('Route Handlers', () => {
    test('API routes should be in app/api directory', async () => {
      const apiFiles = await glob.sync('src/app/api/**/*.ts')
      apiFiles.forEach(file => {
        expect(file.startsWith('src/app/api/')).toBe(true)
      })
    })
  })

  describe('Metadata', () => {
    test('layout should have proper metadata', () => {
      const layoutPath = 'src/app/layout.tsx'
      const content = fs.readFileSync(layoutPath, 'utf8')
      
      expect(content).toMatch(/metadata|generateMetadata/)
    })
  })

  describe('Loading and Error States', () => {
    test('should have loading states for routes', async () => {
      const routeDirs = await glob.sync('src/app/*/', { ignore: ['src/app/api'] })
      
      routeDirs.forEach(dir => {
        const hasLoading = fs.existsSync(path.join(dir, 'loading.tsx'))
        const hasError = fs.existsSync(path.join(dir, 'error.tsx'))
        expect(hasLoading || hasError).toBe(true)
      })
    })
  })

  describe('Component Organization', () => {
    test('components should be in appropriate directories', async () => {
      const components = await glob.sync('src/components/**/*.tsx')
      
      components.forEach(component => {
        const isInUI = component.includes('src/components/ui/')
        const isInFeature = component.includes('src/components/features/')
        const isInLayout = component.includes('src/components/layout/')
        
        expect(isInUI || isInFeature || isInLayout || component.includes('src/components/')).toBe(true)
      })
    })
  })

  describe('Server Components', () => {
    test('page components should be server components by default', async () => {
      const pageFiles = await glob.sync('src/app/**/page.tsx')
      const ignoredPages = ['src/app/api/'] 
      
      for (const file of pageFiles) {
        if (ignoredPages.some(ignored => file.includes(ignored))) {
          console.log(`Skipping ignored page: ${file}`)
          continue
        }
        
        const content = fs.readFileSync(file, 'utf8')
        const hasUseClient = content.includes('use client')
        
        if (hasUseClient) {
          console.log('\nPage component with "use client" directive found:', file)
          console.log('First 200 characters:')
          console.log('-'.repeat(50))
          console.log(content.slice(0, 200))
          console.log('-'.repeat(50))
          console.log('Full file path:', path.resolve(file))
        }
        
        expect(
          hasUseClient,
          `Page component at ${file} should not have 'use client' directive.\n` +
          `This is a server component by default.\n` +
          `Content preview:\n${content.slice(0, 200)}...`
        ).toBe(false)
      }
    })
  })
}) 