import tsconfig from '../../tsconfig.json';

describe('TypeScript Configuration', () => {
    it('should have strict type checking enabled', () => {
        expect(tsconfig.compilerOptions.strict).toBe(true);
    });

    it('should target ESNext', () => {
        expect(tsconfig.compilerOptions.target).toBe('ESNext');
    });

    it('should include the src directory', () => {
        expect(tsconfig.include).toContain('src');
    });
}); 