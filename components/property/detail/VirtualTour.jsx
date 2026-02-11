"use client";

import React, { useState } from 'react';
import Card from '@/components/ui/data/Card';
import { motion, AnimatePresence } from 'framer-motion';

export default function VirtualTour({ tourUrl }) {
    if (!tourUrl) return null;

    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <Card className="p-[32px] bg-[#FFFFFF] rounded-[16px] border border-[#E5E7EB] mt-[32px] overflow-hidden">
            <h3 className="text-[20px] font-[700] text-[#111827] mb-[24px]">Forensic Walkthrough</h3>

            <div className="relative aspect-video bg-[#111827] rounded-[12px] overflow-hidden group">
                {!isPlaying ? (
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                        onClick={() => setIsPlaying(true)}
                    >
                        <div className="absolute inset-0 bg-[#000000]/40 group-hover:bg-[#000000]/30 transition-colors" />
                        <div className="w-[80px] h-[80px] bg-[#FFFFFF]/20 backdrop-blur-md rounded-full flex items-center justify-center border border-[#FFFFFF]/30 z-10 group-hover:scale-110 transition-transform">
                            <div className="w-[64px] h-[64px] bg-[#FFFFFF] rounded-full flex items-center justify-center shadow-lg">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#1D4ED8] ml-[4px]"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                            </div>
                        </div>
                        <p className="absolute bottom-[24px] text-[#FFFFFF] font-[600] text-[16px] tracking-[0.05em] uppercase">Start Tour</p>
                    </motion.div>
                ) : (
                    <iframe
                        src={tourUrl}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
        </Card>
    );
}
