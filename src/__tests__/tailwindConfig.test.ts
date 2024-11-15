import tailwindConfig from '../../tailwind.config';

describe('Tailwind Configuration', () => {
    it('should be a valid configuration', () => {
        expect(tailwindConfig).toBeDefined();
    });

    it('should have theme configuration', () => {
        expect(tailwindConfig.theme).toBeDefined();
    });
}); 