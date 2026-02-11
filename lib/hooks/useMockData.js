"use client";

import { useState, useEffect } from 'react';
import { api } from '@/lib/api';

/**
 * Synthetic Data Ingestion Hook
 * Simulates institutional API calls to retrieve mock data nodes with lifecycle states.
 */
export default function useMockData(endpoint, params = {}) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            setIsLoading(true);
            try {
                // Navigate nested API structure (e.g., 'assets.getAll')
                const keys = endpoint.split('.');
                let method = api;
                for (const key of keys) {
                    method = method[key];
                }

                const result = await method(params);
                if (isMounted) {
                    setData(result);
                    setError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message || 'Data retrieval protocol failed');
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [endpoint, JSON.stringify(params)]);

    return { data, isLoading, error };
}
