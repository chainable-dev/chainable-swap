import { defineConfig } from 'vitest/config';
import vitestConfig from '../../vitest.config';

describe('Vitest Configuration', () => {
    it('should be a valid configuration', () => {
        const config = defineConfig(vitestConfig);
        expect(config).toBeDefined();
        expect(config.test).toBeDefined();
    });

    it('should have the correct test environment', () => {
        expect(config.test?.environment).toBe('jsdom');
    });
}); 