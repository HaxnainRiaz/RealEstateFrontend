/**
 * Currency Formatting Logic
 * Transforms numeric nodes into institutional-grade currency strings.
 */
export const formatCurrency = (amount, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
};

/**
 * Data Unit Formatting
 * Normalizes square footage and metric nodes.
 */
export const formatArea = (sqft) => {
    return `${new Intl.NumberFormat('en-US').format(sqft)} sq ft`;
};

/**
 * Date Forensic Formatting
 * Converts temporal nodes into human-readable forensic logs.
 */
export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(new Date(date));
};

/**
 * Relative Time Telemetry
 * Provides contextual time-since markers.
 */
export const formatRelativeTime = (date) => {
    const now = new Date();
    const then = new Date(date);
    const diff = now - then;
    const minutes = Math.floor(diff / 60000);

    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return formatDate(date);
};
