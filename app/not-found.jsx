"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#FFFFFF] flex flex-col items-center justify-center px-[24px]">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <div className="mb-[40px]">
                    <span className="text-[120px] font-[900] text-[#1D4ED8]/10 select-none">404</span>
                </div>
                <h1 className="text-[32px] font-[800] text-[#111827] mb-[16px]">Node Not Found</h1>
                <p className="text-[18px] text-[#6B7280] max-w-[480px] mx-auto mb-[48px]">
                    The asset or instruction node you are attempting to access does not exist in the platform's current structural mapping.
                </p>
                <div className="flex justify-center gap-[16px]">
                    <Link href="/">
                        <button className="px-[32px] py-[16px] bg-[#111827] text-[#FFFFFF] text-[16px] font-[600] rounded-[8px] hover:bg-[#1D4ED8] transition-all">
                            Return to Command Center
                        </button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
