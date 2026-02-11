"use client";

import { useState, useEffect } from 'react';

/**
 * Vertical Navigation Telemetry
 * Tracks the scroll position of the active browser node for parallax or sticky logic.
 */
export default function useScrollPosition() {
    const [scrollPos, setScrollPos] = useState({
        x: typeof window !== 'undefined' ? window.scrollX : 0,
        y: typeof window !== 'undefined' ? window.scrollY : 0,
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleScroll = () => {
            setScrollPos({
                x: window.scrollX,
                y: window.scrollY,
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollPos;
}
