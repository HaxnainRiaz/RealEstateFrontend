"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Checkbox({
    label,
    name,
    checked,
    onChange,
    className = ""
}) {
    return (
        <label className={`flex items-center gap-[12px] cursor-pointer group ${className}`}>
            <div className="relative">
                <input
                    type="checkbox"
                    name={name}
                    checked={checked}
                    onChange={onChange}
                    className="sr-only"
                />
                <motion.div
                    className={`
                        w-[20px] 
                        h-[20px] 
                        rounded-[4px] 
                        border-2 
                        transition-colors
                        flex 
                        items-center 
                        justify-center
                        ${checked ? 'bg-[#1D4ED8] border-[#1D4ED8]' : 'bg-[#FFFFFF] border-[#D1D5DB] group-hover:border-[#1D4ED8]'}
                    `}
                >
                    <motion.svg
                        initial={false}
                        animate={{ scale: checked ? 1 : 0, opacity: checked ? 1 : 0 }}
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#FFFFFF]"
                    >
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </motion.svg>
                </motion.div>
            </div>
            {label && <span className="text-[14px] font-[500] text-[#374151] group-hover:text-[#111827]">{label}</span>}
        </label>
    );
}
