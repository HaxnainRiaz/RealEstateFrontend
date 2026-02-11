"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Toggle({
    label,
    enabled,
    onChange,
    className = ""
}) {
    return (
        <label className={`flex items-center gap-[12px] cursor-pointer group ${className}`}>
            {label && <span className="text-[14px] font-[600] text-[#374151] group-hover:text-[#111827]">{label}</span>}
            <div className="relative">
                <input
                    type="checkbox"
                    checked={enabled}
                    onChange={onChange}
                    className="sr-only"
                />
                <motion.div
                    animate={{
                        backgroundColor: enabled ? '#1D4ED8' : '#D1D5DB'
                    }}
                    className="w-[44px] h-[24px] rounded-full p-[2px] transition-colors"
                >
                    <motion.div
                        animate={{
                            x: enabled ? 20 : 0
                        }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        className="w-[20px] h-[20px] bg-[#FFFFFF] rounded-full shadow-sm"
                    />
                </motion.div>
            </div>
        </label>
    );
}
