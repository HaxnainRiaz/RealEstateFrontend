import { formatCurrency, formatArea } from '@/lib/utils/formatters';

describe('Forensic Formatter Logic', () => {
    test('should transform numeric nodes to USD currency signals', () => {
        expect(formatCurrency(1250)).toBe('$1,250');
        expect(formatCurrency(85000)).toBe('$85,000');
    });

    test('should normalize square footage metrics', () => {
        expect(formatArea(1250)).toBe('1,250 sq ft');
    });
});
