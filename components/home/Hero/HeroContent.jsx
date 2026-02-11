"use client";

import React from 'react';
import { motion } from 'framer-motion';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import SecondaryButton from '@/components/ui/button/SecondaryButton';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function HeroContent() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col max-w-[800px] z-20 relative p-[24px]"
        >
            <motion.div variants={itemVariants} className="mb-[16px]">
                <span className="text-[14px] font-[700] text-[#1D4ED8] bg-[#1D4ED8]/10 px-[12px] py-[6px] rounded-[6px] uppercase tracking-[0.1em] border border-[#1D4ED8]/20">
                    Institutional Standard
                </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-[48px] md:text-[64px] font-[800] text-[#FFFFFF] leading-[1.1] mb-[24px]">
                Forensic Clarity in <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA]">Asset Management</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-[18px] md:text-[20px] text-[#D1D5DB] mb-[40px] max-w-[600px] leading-[1.6]">
                Deploy capital with precision. Monitor portfolio performance through real-time telemetry and institutional-grade analytics.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-[16px]">
                <PrimaryButton onClick={() => window.location.href = '/listings'} className="w-full sm:w-auto">
                    Browse Properties
                </PrimaryButton>
                <SecondaryButton onClick={() => window.location.href = '/register'} className="w-full sm:w-auto text-[#FFFFFF] border-[#D1D5DB]/30 hover:bg-[#FFFFFF]/10 hover:text-[#FFFFFF]">
                    List Your Property
                </SecondaryButton>
            </motion.div>
        </motion.div>
    );
}
