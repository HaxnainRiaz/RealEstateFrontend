"use client";

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Institutional Section Header
 * Standardized component for section titles, subtitles, and labels.
 */
export default function SectionHeading({
    label,
    title,
    subtitle,
    align = 'center',
    className = ""
}) {
    const alignmentClasses = {
        left: 'text-left mr-auto',
        center: 'text-center mx-auto',
        right: 'text-right ml-auto'
    };

    return (
        <div className={`max-w-[760px] mb-[64px] ${alignmentClasses[align]} ${className}`}>
            {label && (
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#1D4ED8] font-[700] uppercase tracking-[0.1em] text-[14px]"
                >
                    {label}
                </motion.span>
            )}

            {title && (
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-[36px] md:text-[48px] font-[800] text-[#111827] mt-[16px] mb-[24px]"
                >
                    {title}
                </motion.h2>
            )}

            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-[18px] text-[#6B7280]"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}
