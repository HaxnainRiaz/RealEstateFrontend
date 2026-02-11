"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Drawer({
    isOpen,
    onClose,
    title,
    children,
    side = "right"
}) {
    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const slideVariants = {
        right: { x: '100%' },
        left: { x: '-100%' },
        top: { y: '-100%' },
        bottom: { y: '100%' }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[150] overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#111827]/40 backdrop-blur-[2px]"
                    />

                    <motion.div
                        initial={slideVariants[side]}
                        animate={{ x: 0, y: 0 }}
                        exit={slideVariants[side]}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className={`
                            absolute bg-[#FFFFFF] shadow-2xl flex flex-col
                            ${side === 'right' ? 'top-0 right-0 h-full w-full max-w-[480px]' : ''}
                            ${side === 'left' ? 'top-0 left-0 h-full w-full max-w-[480px]' : ''}
                            ${side === 'top' ? 'top-0 left-0 w-full h-[300px]' : ''}
                            ${side === 'bottom' ? 'bottom-0 left-0 w-full h-[auto]' : ''}
                        `}
                    >
                        <div className="flex items-center justify-between p-[24px] border-b border-[#F3F4F6]">
                            <h3 className="text-[18px] font-[700] text-[#111827]">{title}</h3>
                            <button
                                onClick={onClose}
                                className="p-[8px] text-[#9CA3AF] hover:text-[#111827] hover:bg-[#F9FAFB] rounded-full transition-all"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-[24px]">
                            {children}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
