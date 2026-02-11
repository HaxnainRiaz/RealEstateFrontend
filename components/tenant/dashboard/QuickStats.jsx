"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';
import { motion } from 'framer-motion';

const stats = [
    { label: "Due Balance", value: "$0.00", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { label: "Lease Period", value: "8 Mo", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
    { label: "Tickets", value: "0 Open", icon: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" }
];

export default function QuickStats() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] mb-[32px]">
            {stats.map((stat, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                >
                    <Card className="bg-[#FFFFFF] p-[24px] border border-[#E5E7EB] hover:border-[#1D4ED8] transition-colors group">
                        <div className="flex items-center justify-between mb-[12px]">
                            <span className="text-[12px] font-[600] text-[#6B7280] uppercase tracking-[0.05em]">{stat.label}</span>
                            <div className="w-[32px] h-[32px] bg-[#F3F4F6] rounded-[8px] flex items-center justify-center text-[#9CA3AF] group-hover:bg-[#EFF6FF] group-hover:text-[#1D4ED8] transition-colors">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d={stat.icon} />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-[28px] font-[800] text-[#111827]">{stat.value}</h3>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}
