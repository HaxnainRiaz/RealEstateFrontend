import { useState, useEffect } from 'react';

/**
 * Viewport Proximity Detection
 * Monitors when a specific data node enters or exits the institutional window.
 */
export default function useIntersectionObserver(ref, options = {}) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref, options]);

    return isIntersecting;
}
