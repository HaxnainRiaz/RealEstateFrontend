
"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function TextField({
    label,
    type = "text",
    placeholder,
    name,
    value,
    onChange,
    error,
    required = false,
    className = ""
}) {
    return (
        <div className={`space-y-[8px] w-full ${className}`}>
            {label && (
                <label className="text-[14px] font-[600] text-[#111827] flex items-center gap-[4px]">
                    {label}
                    {required && <span className="text-[#EF4444]">*</span>}
                </label>
            )}

            <div className="relative">
                <motion.input
                    whileFocus={{ scale: 1.005 }}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    placeholder={placeholder}
                    className={`
            w-full 
            px-[20px] 
            py-[16px] 
            bg-[#FFFFFF] 
            border 
            ${error ? 'border-[#EF4444]' : 'border-[#D1D5DB]'} 
            rounded-[8px] 
            text-[16px] 
            text-[#111827] 
            placeholder:text-[#6B7280]
            focus:outline-none 
            focus:border-[#2563EB] 
            transition-all
          `}
                />
            </div>

            {error && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[#EF4444] text-[12px] font-[500]"
                >
                    {error}
                </motion.p>
            )}
        </div>
    );
}
