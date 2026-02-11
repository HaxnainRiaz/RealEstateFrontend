"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';
import { motion } from 'framer-motion';

const METRICS = [
    { name: "Yield Performance", value: 4.8, max: 6.0, color: "#10B981" },
    { name: "Maintenance Efficiency", value: 92, max: 100, color: "#1D4ED8" },
    { name: "Tenant Satisfaction", value: 8.9, max: 10, color: "#FBBF24" },
    { name: "Collection Rate", value: 99.2, max: 100, color: "#8B5CF6" }
];

export default function PerformanceMetrics() {
    return (
        <Card className="bg-[#FFFFFF] p-[32px] rounded-[16px] border border-[#E5E7EB] h-full">
            <h3 className="text-[18px] font-[700] text-[#111827] mb-[24px]">Operational Indices</h3>

            <div className="space-y-[24px]">
                {METRICS.map((metric, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className="flex justify-between mb-[8px] text-[14px] font-[600]">
                            <span className="text-[#374151]">{metric.name}</span>
                            <span className="text-[#111827]">{metric.value}{metric.max === 100 ? '%' : ''}</span>
                        </div>
                        <div className="h-[8px] w-full bg-[#F3F4F6] rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${(metric.value / metric.max) * 100}%` }}
                                transition={{ duration: 1, ease: "easeOut", delay: i * 0.2 }}
                                className="h-full rounded-full"
                                style={{ backgroundColor: metric.color }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </Card>
    );
}
