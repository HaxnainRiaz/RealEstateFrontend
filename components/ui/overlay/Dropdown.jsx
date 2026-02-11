"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ClickOutside from '@/components/shared/utils/ClickOutside';

/**
 * Functional Branching Node
 * Triggers a contextual logic list for node-specific operations.
 */
export default function Dropdown({
    trigger,
    items = [],
    align = "right",
    className = ""
}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ClickOutside onClickOutside={() => setIsOpen(false)} className="relative inline-block">
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                {trigger}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className={`
                            absolute z-[100] mt-[8px] 
                            min-w-[200px] 
                            bg-[#FFFFFF] 
                            rounded-[12px] 
                            shadow-[0_12px_40px_rgba(0,0,0,0.12)] 
                            border border-[#F3F4F6] 
                            py-[8px]
                            ${align === 'right' ? 'right-0' : 'left-0'}
                            ${className}
                        `}
                    >
                        {items.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    if (item.onClick) item.onClick();
                                    setIsOpen(false);
                                }}
                                className={`
                                    w-full px-[16px] py-[10px] text-left text-[14px] font-[600] 
                                    transition-colors flex items-center gap-[12px]
                                    ${item.variant === 'danger' ? 'text-[#EF4444] hover:bg-[#FEF2F2]' : 'text-[#374151] hover:bg-[#F9FAFB]'}
                                `}
                            >
                                {item.icon && <span className="w-[18px] opacity-60">{item.icon}</span>}
                                {item.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </ClickOutside>
    );
}
