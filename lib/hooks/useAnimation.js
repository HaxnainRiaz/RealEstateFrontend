"use client";

import { useAnimation as useFramerAnimation } from 'framer-motion';
import { useEffect } from 'react';

/**
 * Advanced Motion Logic Hook
 * Provides imperative control over Framer Motion sequences for complex node transitions.
 */
export default function useAnimation() {
    const controls = useFramerAnimation();

    const sequence = async (steps) => {
        for (const step of steps) {
            await controls.start(step);
        }
    };

    return {
        controls,
        sequence,
        start: (definition) => controls.start(definition),
        stop: () => controls.stop(),
    };
}
