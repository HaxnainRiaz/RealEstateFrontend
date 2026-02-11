"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#111827] to-[#111827]/80 z-10" />
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full h-full"
            >
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                    alt="Modern Architecture"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Abstract geometric overlay for institutional feel */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1D4ED8]/10 to-transparent z-10 hidden lg:block" />
        </div>
    );
}
