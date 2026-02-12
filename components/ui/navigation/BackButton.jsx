"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BackButton({ className = "", label = "Back", href }) {
    const router = useRouter();

    const content = (
        <div
            className={`flex items-center gap-[12px] text-[14px] font-[600] text-[#64748B] hover:text-[#1D4ED8] transition-all group ${className}`}
        >
            <motion.div
                whileHover={{ x: -4 }}
                whileTap={{ scale: 0.95 }}
                className="w-[36px] h-[36px] rounded-[10px] bg-[#FFFFFF] border border-[#E2E8F0] shadow-sm flex items-center justify-center group-hover:border-[#1D4ED8] group-hover:bg-[#1D4ED8] group-hover:text-[#FFFFFF] transition-all"
            >
                <FiArrowLeft className="w-[18px] h-[18px]" />
            </motion.div>
            <span className="group-hover:translate-x-1 transition-transform">{label}</span>
        </div>
    );

    if (href) {
        return (
            <Link href={href} className="inline-block no-underline">
                {content}
            </Link>
        );
    }

    return (
        <button onClick={() => router.back()} className="inline-block text-left bg-transparent border-none p-0 cursor-pointer">
            {content}
        </button>
    );
}
