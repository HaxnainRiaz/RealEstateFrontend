"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';
import { motion } from 'framer-motion';

const STEPS = [
    { label: "Profile", status: "complete", date: "Oct 24" },
    { label: "Financials", status: "complete", date: "Oct 25" },
    { label: "Background", status: "processing", date: "In Progress" },
    { label: "Decision", status: "pending", date: "Est. Oct 28" }
];

export default function ApplicationProgress() {
    return (
        <Card className="p-[32px] bg-[#FFFFFF] rounded-[16px] border border-[#E5E7EB] mt-[32px]">
            <h3 className="text-[20px] font-[700] text-[#111827] mb-[32px]">Application Timeline</h3>

            <div className="relative">
                {/* Connecting Line */}
                <div className="absolute top-[24px] left-[24px] right-[24px] h-[4px] bg-[#F3F4F6] -z-10" />

                <div className="flex justify-between relative">
                    {STEPS.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: idx * 0.2 }}
                                className={`w-[48px] h-[48px] rounded-full border-[4px] border-[#FFFFFF] flex items-center justify-center mb-[16px] 
                                    ${step.status === 'complete' ? 'bg-[#10B981] text-[#FFFFFF]'
                                        : step.status === 'processing' ? 'bg-[#FBBF24] text-[#FFFFFF]'
                                            : 'bg-[#E5E7EB] text-[#9CA3AF]'}`}
                            >
                                {step.status === 'complete' ? (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                ) : (
                                    <span className="text-[16px] font-[700]">{idx + 1}</span>
                                )}
                            </motion.div>
                            <span className={`text-[14px] font-[700] mb-[4px] ${step.status === 'pending' ? 'text-[#9CA3AF]' : 'text-[#111827]'}`}>{step.label}</span>
                            <span className="text-[12px] text-[#6B7280]">{step.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
}
