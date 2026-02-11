"use client";

import React from 'react';
import { motion } from 'framer-motion';

/**
 * Symbolic Interaction Node
 * A compact interactive unit prioritizing visual logic over text labels.
 */
export default function IconButton({
    icon,
    onClick,
    className = "",
    variant = "ghost",
    size = "md",
    disabled = false,
    tooltip
}) {
    const variants = {
        primary: "bg-[#1D4ED8] text-[#FFFFFF] hover:bg-[#1E40AF]",
        secondary: "bg-[#F3F4F6] text-[#374151] hover:bg-[#E5E7EB]",
        ghost: "bg-transparent text-[#6B7280] hover:bg-[#F3F4F6] hover:text-[#111827]",
        outline: "bg-transparent border border-[#D1D5DB] text-[#374151] hover:border-[#111827] hover:bg-[#F9FAFB]"
    };

    const sizes = {
        sm: "w-[32px] h-[32px] p-[6px]",
        md: "w-[40px] h-[40px] p-[8px]",
        lg: "w-[48px] h-[48px] p-[10px]"
    };

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            disabled={disabled}
            className={`
                flex items-center justify-center 
                rounded-[8px] 
                transition-all 
                disabled:opacity-50 
                disabled:cursor-not-allowed
                ${variants[variant] || variants.ghost}
                ${sizes[size] || sizes.md}
                ${className}
            `}
            title={tooltip}
        >
            {icon}
        </motion.button>
    );
}
