"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';
import { motion } from 'framer-motion';

const STATS = [
    { label: "Active Signals", value: 12, trend: "+2", color: "#EF4444" },
    { label: "Mean Time to Repair", value: "4.2h", trend: "-15%", color: "#3B82F6" },
    { label: "Opex (Current Month)", value: "$2,840", trend: "Normal", color: "#111827" },
    { label: "Scheduled Visits", value: 8, trend: "+1", color: "#10B981" }
];

export default function MaintenanceStats() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
            {STATS.map((stat, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                >
                    <Card className="bg-[#FFFFFF] p-[24px] border border-[#E5E7EB] hover:border-[#1D4ED8] transition-all group">
                        <p className="text-[12px] font-[700] uppercase tracking-[0.1em] text-[#6B7280] mb-[8px]">{stat.label}</p>
                        <div className="flex items-baseline gap-[12px]">
                            <h4 className="text-[28px] font-[800] text-[#111827]" style={{ color: stat.color }}>{stat.value}</h4>
                            <span className={`text-[12px] font-[600] ${stat.trend.startsWith('+') ? 'text-[#EF4444]' : stat.trend.startsWith('-') ? 'text-[#10B981]' : 'text-[#6B7280]'}`}>
                                {stat.trend}
                            </span>
                        </div>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}
