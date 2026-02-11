
"use client";

import React from 'react';
import { motion } from 'framer-motion';

/**
 * @param {import('@/types').ButtonProps} props
 */
export default function PrimaryButton({ children, onClick = () => { }, className = "", type = "button", disabled = false, loading = false }) {
    return (
        <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`
        bg-[#1D4ED8] 
        text-[#FFFFFF] 
        text-[16px] 
        font-[600] 
        px-[32px] 
        py-[16px] 
        rounded-[8px] 
        hover:bg-[#2563EB] 
        transition-all 
        flex 
        items-center 
        justify-center 
        disabled:opacity-50 
        disabled:cursor-not-allowed
        ${className}
      `}
        >
            {loading ? (
                <div className="w-[20px] h-[20px] border-2 border-[#FFFFFF] border-t-transparent rounded-full animate-spin" />
            ) : children}
        </motion.button>
    );
}
