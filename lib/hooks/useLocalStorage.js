import { useState, useEffect } from 'react';

/**
 * Local Data Persistence
 * Synchronizes component state with the browser's persistent node storage.
 */
export default function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        if (typeof window === 'undefined') return initialValue;
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error('LocalStorage Retrieval Failure:', error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error('LocalStorage Sync Failure:', error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}
