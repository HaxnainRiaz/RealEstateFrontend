import { renderHook, act } from '@testing-library/react';
import useForm from '@/lib/hooks/useForm';

describe('useForm Hook Logic', () => {
    test('should initialize with starting nodes', () => {
        const initialValues = { email: 'sterling@node.com' };
        const { result } = renderHook(() => useForm(initialValues, jest.fn()));

        expect(result.current.values.email).toBe('sterling@node.com');
    });

    test('should update values on change signal', () => {
        const { result } = renderHook(() => useForm({ email: '' }, jest.fn()));

        act(() => {
            result.current.handleChange({
                target: { name: 'email', value: 'new@node.com', type: 'text' }
            });
        });

        expect(result.current.values.email).toBe('new@node.com');
    });

    test('should invoke submission protocol', async () => {
        const onSubmit = jest.fn();
        const { result } = renderHook(() => useForm({ email: 'test' }, onSubmit));

        await act(async () => {
            await result.current.handleSubmit({ preventDefault: jest.fn() });
        });

        expect(onSubmit).toHaveBeenCalledWith({ email: 'test' });
    });
});
