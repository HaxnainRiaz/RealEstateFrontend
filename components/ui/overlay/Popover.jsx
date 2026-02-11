"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ClickOutside from '@/components/shared/utils/ClickOutside';

/**
 * Contextual Information Node
 * Provides persistent forensic data overlays triggered by specific node interactions.
 */
export default function Popover({
    trigger,
    children,
    position = "bottom",
    className = ""
}) {
    const [isOpen, setIsOpen] = useState(false);

    const positions = {
        bottom: "top-full mt-[12px] left-1/2 -translate-x-1/2",
        top: "bottom-full mb-[12px] left-1/2 -translate-x-1/2",
        left: "right-full mr-[12px] top-1/2 -translate-y-1/2",
        right: "left-full ml-[12px] top-1/2 -translate-y-1/2"
    };

    return (
        <ClickOutside onClickOutside={() => setIsOpen(false)} className="relative inline-block">
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                {trigger}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className={`
                            absolute z-[110] 
                            bg-[#FFFFFF] 
                            rounded-[16px] 
                            shadow-2xl 
                            border border-[#E5E7EB] 
                            p-[24px]
                            min-w-[300px]
                            ${positions[position]}
                            ${className}
                        `}
                    >
                        {children}
                        {/* Triangle Pointer */}
                        <div className={`
                            absolute w-[12px] h-[12px] bg-[#FFFFFF] border-l border-t border-[#E5E7EB] rotate-45
                            ${position === 'bottom' ? 'top-[-6px] left-1/2 -translate-x-1/2' : ''}
                            ${position === 'top' ? 'bottom-[-6px] left-1/2 -translate-x-1/2 border-l-0 border-t-0 border-r border-b' : ''}
                            ${position === 'left' ? 'right-[-6px] top-1/2 -translate-y-1/2 border-l-0 border-t-0 border-r border-b' : ''}
                            ${position === 'right' ? 'left-[-6px] top-1/2 -translate-y-1/2' : ''}
                        `} />
                    </motion.div>
                )}
            </AnimatePresence>
        </ClickOutside>
    );
}
