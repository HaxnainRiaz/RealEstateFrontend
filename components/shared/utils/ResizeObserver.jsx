"use client";

import React, { useState, useEffect, useRef } from 'react';

/**
 * Responsive Scaling Forensic
 * Monitors dimensional shifts in the node and provides real-time width/height telemetry.
 */
export default function ResizeObserverWrapper({ children, onResize }) {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new ResizeObserver((entries) => {
            const { width, height } = entries[0].contentRect;
            setDimensions({ width, height });
            if (onResize) onResize({ width, height });
        });

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [onResize]);

    return (
        <div ref={ref} className="w-full h-full">
            {typeof children === 'function' ? children(dimensions) : children}
        </div>
    );
}
