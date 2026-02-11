/**
 * Motion Logic Utilities
 * Helper functions for calculating dynamic animation properties.
 */

/**
 * Institutional Stagger Logic
 * Calculates delay based on node index for progressive disclosure.
 */
export const getStaggerDelay = (index, baseDelay = 0.1, factor = 0.05) => {
    return baseDelay + (index * factor);
};

/**
 * Spring Logic Builder
 * Generates custom spring configurations for institutional-grade interactions.
 */
export const createSpringTransition = (stiffness = 300, damping = 30) => {
    return {
        type: "spring",
        stiffness,
        damping
    };
};

/**
 * Parallax Offset Forensic
 * Calculates vertical shift based on scroll position and factor.
 */
export const calculateParallax = (scrollY, factor = 0.5) => {
    return scrollY * factor;
};
