"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function SlideIn({ children, delay = 0, duration = 0.5, direction = "right", className = "" }) {
    const hidden = {
        x: direction === "right" ? 50 : direction === "left" ? -50 : 0,
        y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
        opacity: 0
    };

    const visible = {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration,
            delay,
            ease: "easeOut"
        }
    };

    return (
        <motion.div
            initial={hidden}
            whileInView={visible}
            viewport={{ once: true }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
