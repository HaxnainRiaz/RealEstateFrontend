"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PrimaryButton from '@/components/ui/button/PrimaryButton';

export default function Modal({
    isOpen,
    onClose,
    title,
    children,
    footer,
    size = "default"
}) {
    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const sizes = {
        default: 'max-w-[600px]',
        small: 'max-w-[400px]',
        large: 'max-w-[900px]',
        full: 'max-w-[95vw]'
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-[24px]">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#111827]/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className={`relative w-full ${sizes[size] || sizes.default} bg-[#FFFFFF] rounded-[16px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]`}
                    >
                        <div className="flex items-center justify-between p-[24px] border-b border-[#F3F4F6]">
                            <h3 className="text-[20px] font-[700] text-[#111827]">{title}</h3>
                            <button
                                onClick={onClose}
                                className="p-[8px] text-[#9CA3AF] hover:text-[#111827] hover:bg-[#F9FAFB] rounded-full transition-all"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>

                        <div className="p-[24px] overflow-y-auto flex-1">
                            {children}
                        </div>

                        {footer && (
                            <div className="p-[24px] border-t border-[#F3F4F6] bg-[#F9FAFB] flex justify-end gap-[12px]">
                                {footer}
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
