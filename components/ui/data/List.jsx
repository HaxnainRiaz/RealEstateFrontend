"use client";

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Linear Node Sequentializer
 * Organizes data nodes into a vertical logic stream for rapid forensic scanning.
 */
export default function List({
    items = [],
    renderItem,
    spacing = 12,
    className = "",
    divider = false
}) {
    return (
        <div className={`flex flex-col ${className}`} style={{ gap: `${spacing}px` }}>
            {items.map((item, idx) => (
                <React.Fragment key={idx}>
                    <motion.div
                        initial={{ opacity: 0, x: -5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.03 }}
                    >
                        {renderItem ? renderItem(item, idx) : item}
                    </motion.div>
                    {divider && idx < items.length - 1 && (
                        <div className="h-[1px] bg-[#F3F4F6] w-full" />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}
