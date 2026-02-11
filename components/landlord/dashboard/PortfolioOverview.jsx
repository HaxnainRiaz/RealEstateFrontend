"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';
import { motion } from 'framer-motion';

const STATS = [
    { label: "Total Asset Value", value: "$42.5M", change: "+2.4%", trend: "up" },
    { label: "Monthly Revenue", value: "$248.2K", change: "+5.1%", trend: "up" },
    { label: "Occupancy Rate", value: "94.2%", change: "+0.8%", trend: "up" },
    { label: "Active Nodes", value: "142", change: "0", trend: "neutral" }
];

export default function PortfolioOverview() {
    return (
        <Card className="p-[32px] bg-[#FFFFFF] rounded-[16px] border border-[#E5E7EB] shadow-sm mb-[32px]">
            <div className="flex justify-between items-center mb-[32px]">
                <h2 className="text-[20px] font-[700] text-[#111827]">Portfolio Forensics</h2>
                <div className="flex gap-[8px]">
                    <span className="text-[12px] font-[600] text-[#6B7280] bg-[#F3F4F6] px-[12px] py-[6px] rounded-[6px]">Last 30 Days</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
                {STATS.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-[20px] bg-[#F9FAFB] rounded-[12px] border border-[#F3F4F6]"
                    >
                        <p className="text-[12px] font-[600] text-[#6B7280] uppercase tracking-[0.05em] mb-[8px]">{stat.label}</p>
                        <div className="flex items-end justify-between">
                            <h3 className="text-[28px] font-[800] text-[#111827] leading-[1]">{stat.value}</h3>
                            <span className={`text-[12px] font-[700] px-[6px] py-[2px] rounded-[4px] ${stat.trend === 'up' ? 'bg-[#10B981]/10 text-[#10B981]' : stat.trend === 'down' ? 'bg-[#EF4444]/10 text-[#EF4444]' : 'bg-[#6B7280]/10 text-[#374151]'}`}>
                                {stat.change}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Card>
    );
}
