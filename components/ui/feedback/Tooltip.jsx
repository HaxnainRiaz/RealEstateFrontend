"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Tooltip({ children, content, position = "top", className = "" }) {
    const [isVisible, setIsVisible] = useState(false);

    const positions = {
        top: "-translate-x-1/2 -translate-y-full top-[-10px] left-1/2",
        bottom: "-translate-x-1/2 translate-y-full bottom-[-10px] left-1/2",
        left: "-translate-x-full -translate-y-1/2 top-1/2 left-[-10px]",
        right: "translate-x-full -translate-y-1/2 top-1/2 right-[-10px]"
    };

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.1 }}
                        className={`
                            absolute 
                            z-50 
                            whitespace-nowrap 
                            px-[12px] 
                            py-[6px] 
                            bg-[#111827] 
                            text-[#FFFFFF] 
                            text-[12px] 
                            font-[600] 
                            rounded-[6px] 
                            shadow-[0_4px_12px_rgba(0,0,0,0.15)]
                            pointer-events-none
                            ${positions[position]}
                            ${className}
                        `}
                    >
                        {content}
                        <div className={`
                            absolute 
                            w-[8px] 
                            h-[8px] 
                            bg-[#111827] 
                            rotate-45
                            ${position === 'top' ? 'bottom-[-4px] left-1/2 -translate-x-1/2' : ''}
                            ${position === 'bottom' ? 'top-[-4px] left-1/2 -translate-x-1/2' : ''}
                            ${position === 'left' ? 'right-[-4px] top-1/2 -translate-y-1/2' : ''}
                            ${position === 'right' ? 'left-[-4px] top-1/2 -translate-y-1/2' : ''}
                        `} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
