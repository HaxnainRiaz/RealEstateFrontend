"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Sequential Visual Traverser
 * Proxies multiple visual data nodes through a linear viewport logic.
 */
export default function Carousel({ items = [], autoPlay = false }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % items.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

    return (
        <div className="relative w-full aspect-video rounded-[20px] overflow-hidden bg-[#F3F4F6] group">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                >
                    {items[currentIndex]}
                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute inset-0 flex items-center justify-between p-[24px] opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    onClick={prev}
                    className="w-[48px] h-[48px] bg-[#FFFFFF]/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#111827] shadow-lg hover:bg-[#FFFFFF] transition-all"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <button
                    onClick={next}
                    className="w-[48px] h-[48px] bg-[#FFFFFF]/90 backdrop-blur-md rounded-full flex items-center justify-center text-[#111827] shadow-lg hover:bg-[#FFFFFF] transition-all"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-[24px] left-1/2 -translate-x-1/2 flex gap-[8px]">
                {items.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`h-[4px] rounded-full transition-all duration-300 ${i === currentIndex ? 'w-[24px] bg-[#1D4ED8]' : 'w-[8px] bg-[#FFFFFF]/50'}`}
                    />
                ))}
            </div>
        </div>
    );
}
