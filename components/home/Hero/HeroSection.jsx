"use client";

import React from 'react';
import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';

export default function HeroSection() {
    return (
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            <HeroBackground />

            <div className="container mx-auto px-[24px] relative z-20 flex flex-col items-start justify-center h-full">
                <HeroContent />
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                className="absolute bottom-[32px] left-1/2 transform -translate-x-1/2 z-20"
            >
                <div className="w-[24px] h-[36px] border-[2px] border-[#D1D5DB]/30 rounded-[12px] flex justify-center pt-[6px]">
                    <div className="w-[4px] h-[4px] bg-[#FFFFFF] rounded-full animate-bounce" />
                </div>
            </motion.div>
        </section>
    );
}
