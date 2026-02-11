export const TRANSITIONS = {
    SPRING: { type: "spring", stiffness: 300, damping: 30 },
    BOUNCE: { type: "spring", stiffness: 400, damping: 10 },
    SHARP: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.4 },
    SLOW: { type: "tween", ease: "easeInOut", duration: 0.8 }
};

export const VARIANTS = {
    FADE_IN: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    },
    SLIDE_UP: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    },
    SCALE_IN: {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 }
    }
};

export const STAGGER_CHILDREN = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};
