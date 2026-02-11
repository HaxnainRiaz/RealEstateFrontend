"use client";

import React, { useState, useEffect, useRef } from 'react';

/**
 * Institutional Perspective Trigger
 * Detects when a node enters the viewport logic and triggers visibility state.
 */
export default function IntersectionObserverWrapper({
    children,
    onIntersect,
    rootMargin = "0px",
    threshold = 0.1,
    once = true
}) {
    const [hasIntersected, setHasIntersected] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasIntersected(true);
                    if (onIntersect) onIntersect();
                    if (once) observer.unobserve(entry.target);
                } else if (!once) {
                    setHasIntersected(false);
                }
            },
            { rootMargin, threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [onIntersect, rootMargin, threshold, once]);

    return (
        <div ref={ref}>
            {typeof children === 'function' ? children(hasIntersected) : children}
        </div>
    );
}
