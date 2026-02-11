export interface AnimationVariant {
    initial: Record<string, any>;
    animate: Record<string, any>;
    exit?: Record<string, any>;
}

export interface TransitionConfig {
    type?: "spring" | "tween" | "inertia";
    stiffness?: number;
    damping?: number;
    mass?: number;
    duration?: number;
    ease?: string | number[];
    delay?: number;
}

export type MotionVariant = "FADE_IN" | "SLIDE_UP" | "SCALE_IN" | "STAGGER";
