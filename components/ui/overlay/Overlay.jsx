"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Depth Buffer Layer
 * Provides a focus logic by isolating the background nodes from the active interface component.
 */
export default function Overlay({
    isVisible,
    onClick,
    blur = true,
    opacity = 0.6,
    zIndex = 100
}) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClick}
                    className={`
                        fixed inset-0 
                        ${blur ? 'backdrop-blur-sm' : ''} 
                        cursor-pointer
                    `}
                    style={{
                        backgroundColor: `rgba(17, 24, 39, ${opacity})`,
                        zIndex
                    }}
                />
            )}
        </AnimatePresence>
    );
}
