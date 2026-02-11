
"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Card({ children, className = "", animate = false }) {
    const Component = animate ? motion.div : 'div';

    return (
        <Component
            {...(animate ? {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
            } : {})}
            className={`
        bg-[#F9FAFB] 
        rounded-[16px] 
        p-[16px] 
        shadow-[0_4px_6px_rgba(0,0,0,0.1)] 
        border border-[#D1D5DB]/10 
        ${className}
      `}
        >
            {children}
        </Component>
    );
}

export function CardHeader({ children, className = "" }) {
    return (
        <div className={`mb-[16px] ${className}`}>
            {children}
        </div>
    );
}

export function CardTitle({ children, className = "" }) {
    return (
        <h3 className={`text-[20px] font-[700] text-[#111827] leading-[1.2] ${className}`}>
            {children}
        </h3>
    );
}

export function CardDescription({ children, className = "" }) {
    return (
        <p className={`text-[14px] text-[#6B7280] leading-[1.5] mt-[4px] ${className}`}>
            {children}
        </p>
    );
}

export function CardContent({ children, className = "" }) {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    );
}

export function CardFooter({ children, className = "" }) {
    return (
        <div className={`mt-[16px] pt-[16px] border-t border-[#D1D5DB]/20 ${className}`}>
            {children}
        </div>
    );
}
