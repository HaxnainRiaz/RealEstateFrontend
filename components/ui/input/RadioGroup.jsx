"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function RadioGroup({
    label,
    options = [],
    name,
    value,
    onChange,
    className = ""
}) {
    return (
        <div className={`space-y-[12px] ${className}`}>
            {label && <p className="text-[14px] font-[600] text-[#374151] mb-[12px]">{label}</p>}
            <div className="flex flex-col gap-[12px]">
                {options.map((option, idx) => (
                    <label key={idx} className="flex items-center gap-[12px] cursor-pointer group">
                        <div className="relative">
                            <input
                                type="radio"
                                name={name}
                                value={option.value || option}
                                checked={value === (option.value || option)}
                                onChange={onChange}
                                className="sr-only"
                            />
                            <div className={`
                                w-[20px] 
                                h-[20px] 
                                rounded-full 
                                border-2 
                                transition-colors
                                flex 
                                items-center 
                                justify-center
                                ${value === (option.value || option) ? 'border-[#1D4ED8]' : 'border-[#D1D5DB] group-hover:border-[#1D4ED8]'}
                            `}>
                                {value === (option.value || option) && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="w-[10px] h-[10px] bg-[#1D4ED8] rounded-full"
                                    />
                                )}
                            </div>
                        </div>
                        <span className="text-[14px] font-[500] text-[#374151] group-hover:text-[#111827]">
                            {option.label || option}
                        </span>
                    </label>
                ))}
            </div>
        </div>
    );
}
