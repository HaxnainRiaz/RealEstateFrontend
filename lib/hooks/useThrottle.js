import { useState, useEffect, useRef } from 'react';

/**
 * Frequency Restriction Hook
 * Limits the rate at which a specific logic node can execute.
 */
export default function useThrottle(value, interval) {
    const [throttledValue, setThrottledValue] = useState(value);
    const lastExecuted = useRef(Date.now());

    useEffect(() => {
        if (Date.now() >= lastExecuted.current + interval) {
            lastExecuted.current = Date.now();
            setThrottledValue(value);
        } else {
            const timer = setTimeout(() => {
                lastExecuted.current = Date.now();
                setThrottledValue(value);
            }, interval);

            return () => clearTimeout(timer);
        }
    }, [value, interval]);

    return throttledValue;
}
