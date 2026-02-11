"use client";

import React from 'react';
import { motion, useInView } from 'framer-motion';

export default function FadeIn({ children, delay = 0, duration = 0.5, direction = 'up', className = "" }) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
            x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: { duration, delay, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
