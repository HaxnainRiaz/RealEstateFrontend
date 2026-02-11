"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Sequential Logic Layering
 * Collapses complex data nodes into a vertical progressive disclosure unit.
 */
export default function Accordion({ items = [], allowMultiple = false }) {
    const [openIndices, setOpenIndices] = useState([0]);

    const toggleIndex = (idx) => {
        if (allowMultiple) {
            setOpenIndices(prev =>
                prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
            );
        } else {
            setOpenIndices(prev => prev.includes(idx) ? [] : [idx]);
        }
    };

    return (
        <div className="space-y-[12px] w-full">
            {items.map((item, idx) => {
                const isOpen = openIndices.includes(idx);
                return (
                    <div key={idx} className="border border-[#E5E7EB] rounded-[12px] overflow-hidden bg-[#FFFFFF]">
                        <button
                            onClick={() => toggleIndex(idx)}
                            className="w-full flex items-center justify-between p-[20px] text-left hover:bg-[#F9FAFB] transition-colors"
                        >
                            <span className="text-[16px] font-[700] text-[#111827]">{item.title}</span>
                            <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                className="text-[#9CA3AF]"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </motion.div>
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                >
                                    <div className="p-[20px] pt-0 text-[15px] text-[#4B5563] leading-[1.6] border-t border-[#F3F4F6]">
                                        {item.content}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
