"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';
import { motion } from 'framer-motion';

const PAYMENTS = [
    { date: "Oct 01, 2023", amount: 2450.00, status: "completed", type: "Rent", method: "ACH" },
    { date: "Sep 01, 2023", amount: 2450.00, status: "completed", type: "Rent", method: "ACH" },
    { date: "Aug 15, 2023", amount: 75.00, status: "completed", type: "Maintenance Fee", method: "Card" },
    { date: "Aug 01, 2023", amount: 2450.00, status: "completed", type: "Rent", method: "ACH" },
];

export default function PaymentHistory() {
    return (
        <Card className="p-[32px] bg-[#FFFFFF] rounded-[16px] border border-[#E5E7EB]">
            <h3 className="text-[20px] font-[800] text-[#111827] mb-[24px]">Financial Ledger Archive</h3>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-[#F3F4F6]">
                            <th className="pb-[12px] text-[12px] font-[700] uppercase tracking-[0.05em] text-[#9CA3AF]">Date</th>
                            <th className="pb-[12px] text-[12px] font-[700] uppercase tracking-[0.05em] text-[#9CA3AF]">Description</th>
                            <th className="pb-[12px] text-[12px] font-[700] uppercase tracking-[0.05em] text-[#9CA3AF]">Method</th>
                            <th className="pb-[12px] text-[12px] font-[700] uppercase tracking-[0.05em] text-[#9CA3AF] text-right">Amount</th>
                            <th className="pb-[12px] text-[12px] font-[700] uppercase tracking-[0.05em] text-[#9CA3AF] text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F9FAFB]">
                        {PAYMENTS.map((pmt, idx) => (
                            <motion.tr
                                key={idx}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: idx * 0.05 }}
                                className="group hover:bg-[#F9FAFB] transition-colors"
                            >
                                <td className="py-[16px] text-[14px] font-[600] text-[#374151]">{pmt.date}</td>
                                <td className="py-[16px] text-[14px] font-[700] text-[#111827]">{pmt.type}</td>
                                <td className="py-[16px] text-[12px] font-[600] text-[#6B7280]">{pmt.method}</td>
                                <td className="py-[16px] text-[14px] font-[800] text-[#111827] text-right">${pmt.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                                <td className="py-[16px] text-right">
                                    <span className="bg-[#10B981]/10 text-[#10B981] px-[10px] py-[4px] rounded-[6px] text-[11px] font-[800] uppercase">
                                        {pmt.status}
                                    </span>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <button className="w-full mt-[32px] py-[12px] text-[14px] font-[700] text-[#1D4ED8] hover:bg-[#1D4ED8]/5 rounded-[8px] transition-all border border-[#1D4ED8]/20">
                Download Full Statement
            </button>
        </Card>
    );
}
