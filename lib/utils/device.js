/**
 * Environmental Detection Telemetry
 * Identifies viewport and device logic for responsive bridging.
 */
export const getDeviceTelemetry = () => {
    if (typeof window === 'undefined') return { isMobile: false, isSSR: true };

    return {
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 768,
        isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
        isDesktop: window.innerWidth >= 1024,
        pixelRatio: window.devicePixelRatio,
        isSSR: false
    };
};

/**
 * Platform Forensic Detection
 */
export const isTouchDevice = () => {
    if (typeof window === 'undefined') return false;
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};
