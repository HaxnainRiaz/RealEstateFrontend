
"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Section({ children, className = "", id = "" }) {
    return (
        <section
            id={id}
            className={`py-[120px] px-[80px] w-full ${className}`}
        >
            <div className="max-w-[1240px] mx-auto w-full">
                {children}
            </div>
        </section>
    );
}

export function SectionHeader({ title, subtitle, centered = false }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`mb-[64px] ${centered ? 'text-center max-w-[800px] mx-auto' : ''}`}
        >
            {subtitle && (
                <span className="text-[#1D4ED8] text-[14px] font-[600] uppercase tracking-[0.05em] mb-[12px] block">
                    {subtitle}
                </span>
            )}
            <h2 className="text-[40px] font-[700] text-[#111827] tracking-[-0.01em] leading-[1.2]">
                {title}
            </h2>
        </motion.div>
    );
}
