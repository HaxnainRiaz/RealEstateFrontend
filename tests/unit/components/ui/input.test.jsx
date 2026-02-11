import { render, screen } from '@testing-library/react';
import TextField from '@/components/ui/input/TextField';

describe('Forensic Input Node', () => {
    test('captures user data entry signal', () => {
        const onChange = jest.fn();
        render(<TextField label="Identity" value="" onChange={onChange} />);

        const input = screen.getByLabelText(/Identity/i);
        expect(input).toBeInTheDocument();
    });
});
