/**
 * Synthetic Network Artificial Latency
 */
export const simulateDelay = (ms = 1000) => new Promise(res => setTimeout(res, ms));

/**
 * Forensic Error Wrapper
 */
export const handleApiError = (error) => {
    console.error('API Interaction Logic Failure:', error);
    return {
        success: false,
        error: error.message || 'Unknown protocol violation'
    };
};

/**
 * Node Fetch Abstraction
 */
export const apiFetch = async (url, options = {}) => {
    try {
        const response = await fetch(url, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            }
        });

        if (!response.ok) throw new Error(`HTTP Node Failure: ${response.status}`);

        return await response.json();
    } catch (e) {
        return handleApiError(e);
    }
};
