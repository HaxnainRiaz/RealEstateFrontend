"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function StaggerChildren({ children, stagger = 0.1, className = "" }) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: stagger
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={className}
        >
            {React.Children.map(children, (child) => (
                <motion.div variants={item}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
}
