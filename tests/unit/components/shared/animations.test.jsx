import { render, screen } from '@testing-library/react';
import { FadeIn } from '@/components/shared/animations';

describe('Institutional Animation Wrapper', () => {
    test('renders children within a motion container', () => {
        render(<FadeIn><span>Animated Node</span></FadeIn>);
        expect(screen.getByText(/Animated Node/i)).toBeInTheDocument();
    });
});
