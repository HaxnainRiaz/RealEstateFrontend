"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Advanced Contextual Logic Processor
 * Intercepts default system triggers (right-click) to provide forensic node management options.
 */
export default function ContextMenu({ items = [], children }) {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);

    const handleContextMenu = (e) => {
        e.preventDefault();
        setPos({ x: e.pageX, y: e.pageY });
        setVisible(true);
    };

    useEffect(() => {
        const hide = () => setVisible(false);
        window.addEventListener('click', hide);
        return () => window.removeEventListener('click', hide);
    }, []);

    return (
        <div onContextMenu={handleContextMenu} className="w-full h-full">
            {children}

            <AnimatePresence>
                {visible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="fixed z-[200] bg-[#111827] rounded-[10px] shadow-2xl py-[6px] min-w-[180px] border border-[#374151]"
                        style={{ top: pos.y, left: pos.x }}
                    >
                        {items.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={item.onClick}
                                className={`
                                    w-full px-[14px] py-[8px] text-left text-[13px] font-[600] 
                                    transition-colors flex items-center gap-[10px]
                                    ${item.variant === 'danger' ? 'text-[#EF4444] hover:bg-[#EF4444]/10' : 'text-[#FFFFFF] hover:bg-[#FFFFFF]/10'}
                                `}
                            >
                                {item.icon && <span className="opacity-70">{item.icon}</span>}
                                {item.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
