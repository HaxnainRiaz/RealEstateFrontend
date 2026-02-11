import { isValidEmail } from '@/lib/utils/validators';

describe('Forensic Validator Logic', () => {
    test('verifies institutional email protocol', () => {
        expect(isValidEmail('test@node.com')).toBe(true);
        expect(isValidEmail('invalid-protocol')).toBe(false);
    });
});
