import { render, screen } from '@testing-library/react';
import PrimaryButton from '@/components/ui/button/PrimaryButton';

describe('PrimaryButton Institutional Node', () => {
    test('renders with children signal', () => {
        render(<PrimaryButton>Submit Node</PrimaryButton>);
        expect(screen.getByText(/Submit Node/i)).toBeInTheDocument();
    });
});
