"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';
import { motion } from 'framer-motion';

export default function LoadingState({ text = "Loading data..." }) {
    return (
        <Card className="flex flex-col items-center justify-center p-[64px] bg-[#FFFFFF] rounded-[16px]">
            <div className="flex gap-[8px] mb-[24px]">
                {[0, 0.2, 0.4].map((delay) => (
                    <motion.div
                        key={delay}
                        initial={{ scale: 0.8, opacity: 0.5 }}
                        animate={{ scale: 1.2, opacity: 1 }}
                        transition={{
                            repeat: Infinity,
                            repeatType: 'reverse',
                            duration: 0.6,
                            delay
                        }}
                        className="w-[16px] h-[16px] bg-[#1D4ED8] rounded-full"
                    />
                ))}
            </div>
            <p className="text-[16px] font-[600] text-[#6B7280]">{text}</p>
        </Card>
    );
}
