"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Spinner({ size = "default", color = "primary", className = "" }) {
    const sizes = {
        small: "w-[16px] h-[16px] border-[2px]",
        default: "w-[32px] h-[32px] border-[3px]",
        large: "w-[56px] h-[56px] border-[4px]"
    };

    const colors = {
        primary: "border-[#1D4ED8] border-t-transparent",
        white: "border-[#FFFFFF] border-t-transparent",
        gray: "border-[#D1D5DB] border-t-transparent"
    };

    return (
        <div
            className={`
                animate-spin 
                rounded-full 
                ${sizes[size] || sizes.default} 
                ${colors[color] || colors.primary} 
                ${className}
            `}
        />
    );
}

export function PageLoader({ text = "Synchronizing node data..." }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-[24px]">
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <Spinner size="large" />
            </motion.div>
            <p className="text-[14px] font-[700] text-[#111827] uppercase tracking-[0.15em] animate-pulse">
                {text}
            </p>
        </div>
    );
}
