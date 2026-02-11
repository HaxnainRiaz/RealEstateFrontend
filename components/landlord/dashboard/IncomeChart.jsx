"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';
import { motion } from 'framer-motion';

const DATA_POINTS = [28, 32, 29, 36, 42, 45, 41, 48, 52, 58, 55, 62];

export default function IncomeChart() {
    const maxVal = Math.max(...DATA_POINTS);

    return (
        <Card className="bg-[#FFFFFF] p-[32px] rounded-[16px] border border-[#E5E7EB] h-full flex flex-col">
            <h3 className="text-[18px] font-[700] text-[#111827] mb-[24px]">Revenue Trajectory</h3>

            <div className="flex-1 flex items-end gap-[8px] h-[200px]">
                {DATA_POINTS.map((val, i) => (
                    <div key={i} className="flex-1 h-full flex flex-col justify-end group cursor-pointer relative">
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${(val / maxVal) * 100}%` }}
                            transition={{ duration: 0.8, delay: i * 0.05 }}
                            className="w-full bg-[#E5E7EB] rounded-t-[4px] relative group-hover:bg-[#1D4ED8] transition-colors"
                        >
                            <div className="opacity-0 group-hover:opacity-100 absolute -top-[32px] left-1/2 transform -translate-x-1/2 bg-[#111827] text-[#FFFFFF] text-[10px] font-[600] px-[6px] py-[2px] rounded-[4px] pointer-events-none transition-opacity z-10">
                                ${val}k
                            </div>
                        </motion.div>
                        <div className="h-[2px] bg-[#F3F4F6] mt-[1px]" />
                        <span className="text-[10px] text-[#9CA3AF] text-center mt-[8px]">
                            {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}
                        </span>
                    </div>
                ))}
            </div>
        </Card>
    );
}
