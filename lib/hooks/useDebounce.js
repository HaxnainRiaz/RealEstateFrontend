import { useState, useEffect } from 'react';

/**
 * Rapid Input Suppression
 * Stabilizes fast-changing data nodes before committing to logic operations.
 */
export default function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
}
