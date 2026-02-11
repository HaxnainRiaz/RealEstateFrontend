"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';
import { motion } from 'framer-motion';

const EXPENSES = [
    { category: "Property Tax", current: 4200, lastMonth: 4200, trend: "neutral" },
    { category: "Maintenance", current: 1850, lastMonth: 2100, trend: "down" },
    { category: "Insurance", current: 850, lastMonth: 850, trend: "neutral" },
    { category: "Management", current: 2400, lastMonth: 2350, trend: "up" },
    { category: "Utilities", current: 1200, lastMonth: 1100, trend: "up" }
];

export default function ExpenseBreakdown() {
    const totalCurrent = EXPENSES.reduce((acc, curr) => acc + curr.current, 0);
    const totalLast = EXPENSES.reduce((acc, curr) => acc + curr.lastMonth, 0);

    return (
        <Card className="bg-[#FFFFFF] p-[32px] rounded-[16px] border border-[#E5E7EB]">
            <h3 className="text-[20px] font-[700] text-[#111827] mb-[24px]">Expense Distribution</h3>

            <div className="space-y-[16px]">
                {EXPENSES.map((expense, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex flex-col gap-[8px]"
                    >
                        <div className="flex justify-between items-end">
                            <span className="text-[14px] font-[600] text-[#374151]">{expense.category}</span>
                            <div className="text-right">
                                <span className="text-[14px] font-[700] text-[#111827]">${expense.current.toLocaleString()}</span>
                                <span className="text-[10px] text-[#9CA3AF] ml-[8px]">
                                    ({((expense.current / totalCurrent) * 100).toFixed(1)}%)
                                </span>
                            </div>
                        </div>
                        <div className="h-[4px] w-full bg-[#F3F4F6] rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${(expense.current / totalCurrent) * 100}%` }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className="h-full bg-[#6B7280] rounded-full"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-[32px] pt-[24px] border-t border-[#F3F4F6] flex justify-between items-center">
                <span className="text-[14px] font-[700] text-[#111827]">Total Capex/Opex</span>
                <span className="text-[20px] font-[800] text-[#111827]">${totalCurrent.toLocaleString()}</span>
            </div>
        </Card>
    );
}
