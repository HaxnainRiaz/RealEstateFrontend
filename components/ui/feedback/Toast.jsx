"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Toast({
    message,
    type = "success",
    isVisible,
    onClose,
    duration = 5000
}) {
    React.useEffect(() => {
        if (isVisible && duration) {
            const timer = setTimeout(onClose, duration);
            return () => clearTimeout(timer);
        }
    }, [isVisible, duration, onClose]);

    const types = {
        success: {
            bg: "bg-[#10B981]",
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        },
        error: {
            bg: "bg-[#EF4444]",
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        },
        warning: {
            bg: "bg-[#F59E0B]",
            icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        }
    };

    const currentType = types[type] || types.success;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className={`
                        fixed bottom-[40px] right-[40px] z-[200]
                        flex items-center gap-[16px] 
                        px-[24px] py-[16px] 
                        rounded-[12px] 
                        text-[#FFFFFF] 
                        shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                        ${currentType.bg}
                    `}
                >
                    <div className="flex-shrink-0">
                        {currentType.icon}
                    </div>
                    <p className="text-[14px] font-[700] tracking-[0.01em]">{message}</p>
                    <button
                        onClick={onClose}
                        className="ml-[8px] p-[4px] hover:bg-[#000000]/10 rounded-full transition-colors"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
