"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function SelectField({
    label,
    options = [],
    name,
    value,
    onChange,
    error,
    required = false,
    className = "",
    placeholder = "Select an option"
}) {
    return (
        <div className={`space-y-[8px] w-full ${className}`}>
            {label && (
                <label className="text-[14px] font-[600] text-[#374151] flex items-center gap-[4px]">
                    {label}
                    {required && <span className="text-[#EF4444]">*</span>}
                </label>
            )}

            <div className="relative">
                <select
                    name={name}
                    value={value}
                    required={required}
                    onChange={onChange}
                    className={`
                        w-full 
                        px-[16px] 
                        py-[12px] 
                        bg-[#FFFFFF] 
                        border 
                        ${error ? 'border-[#EF4444]' : 'border-[#D1D5DB]'} 
                        rounded-[8px] 
                        text-[16px] 
                        text-[#111827] 
                        focus:outline-none 
                        focus:border-[#1D4ED8] 
                        focus:ring-1 
                        focus:ring-[#1D4ED8]
                        appearance-none
                        transition-all
                    `}
                >
                    <option value="" disabled>{placeholder}</option>
                    {options.map((option, idx) => (
                        <option key={idx} value={option.value || option}>
                            {option.label || option}
                        </option>
                    ))}
                </select>
                <div className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none text-[#6B7280]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
            </div>

            {error && (
                <p className="text-[#EF4444] text-[12px] font-[500]">{error}</p>
            )}
        </div>
    );
}
