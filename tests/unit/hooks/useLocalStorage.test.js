import { renderHook, act } from '@testing-library/react';
import useLocalStorage from '@/lib/hooks/useLocalStorage';

describe('Persistent Node Storage Hook', () => {
    test('should synchronize state with browser storage logic', () => {
        const { result } = renderHook(() => useLocalStorage('test-protocol', 'initial-node'));

        expect(result.current[0]).toBe('initial-node');

        act(() => {
            result.current[1]('updated-node');
        });

        expect(result.current[0]).toBe('updated-node');
        expect(window.localStorage.getItem('test-protocol')).toBe(JSON.stringify('updated-node'));
    });
});
