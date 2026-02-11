import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AuthProvider, { useAuth } from '@/lib/context/AuthContext';
import LoginForm from '@/app/(auth)/login/page'; // Assuming form exists in page or separate component
import { AuthLayout } from '@/app/(auth)/login/layout';

// Mock Component to test useAuth
const TestAuthComponent = () => {
    const { user, login } = useAuth();
    return (
        <div>
            {user ? <span data-testid="user-node">{user.email}</span> : <span data-testid="guest-node">Guest</span>}
            <button onClick={() => login('resident@example.com', 'protocol-123', 'tenant')}>Authorize</button>
        </div>
    );
};

describe('Identity Authorization Sequence', () => {
    test('should authorize user node successfully', async () => {
        render(
            <AuthProvider>
                <TestAuthComponent />
            </AuthProvider>
        );

        expect(screen.getByTestId('guest-node')).toBeInTheDocument();

        fireEvent.click(screen.getByText(/Authorize/i));

        await waitFor(() => {
            expect(screen.getByTestId('user-node')).toHaveTextContent('resident@example.com');
        });
    });
});
