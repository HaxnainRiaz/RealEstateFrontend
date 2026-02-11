"use client";

import { useState, useEffect } from 'react';

/**
 * Volatile Data Persistence
 * Synchronizes component state with the browser's session-limited storage logic.
 */
export default function useSessionStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === 'undefined') return initialValue;
        try {
            const item = window.sessionStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error('SessionStorage Retrieval Failure:', error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            window.sessionStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error('SessionStorage Sync Failure:', error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}
