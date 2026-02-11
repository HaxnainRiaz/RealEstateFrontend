"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function ProgressBar({
    value = 0,
    max = 100,
    height = 8,
    color = "#1D4ED8",
    label,
    showPercentage = false,
    className = ""
}) {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    return (
        <div className={`w-full ${className}`}>
            {(label || showPercentage) && (
                <div className="flex justify-between items-end mb-[8px]">
                    {label && <span className="text-[14px] font-[600] text-[#374151]">{label}</span>}
                    {showPercentage && <span className="text-[14px] font-[707] text-[#111827]">{Math.round(percentage)}%</span>}
                </div>
            )}
            <div
                className="w-full bg-[#F3F4F6] rounded-full overflow-hidden"
                style={{ height: `${height}px` }}
            >
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: color }}
                />
            </div>
        </div>
    );
}
