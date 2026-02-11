"use client";

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Multi-Axis Data Partitioning
 * Organizes complex node collections into a responsive grid logic.
 */
export default function Grid({
    items = [],
    renderItem,
    columns = { default: 1, md: 2, lg: 3, xl: 4 },
    gap = 32,
    className = ""
}) {
    const gridCols = {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6"
    };

    return (
        <div
            className={`
                grid 
                ${gridCols[columns.default] || 'grid-cols-1'} 
                ${columns.md ? `md:${gridCols[columns.md]}` : ''} 
                ${columns.lg ? `lg:${gridCols[columns.lg]}` : ''} 
                ${columns.xl ? `xl:${gridCols[columns.xl]}` : ''} 
                ${className}
            `}
            style={{ gap: `${gap}px` }}
        >
            {items.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                >
                    {renderItem ? renderItem(item, idx) : item}
                </motion.div>
            ))}
        </div>
    );
}
