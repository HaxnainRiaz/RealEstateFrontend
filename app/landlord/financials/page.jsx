
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card, { CardTitle } from '@/components/ui/data/Card';
import { MOCK_PAYMENTS } from '@/lib/mockData';

export default function LandlordFinancialsPage() {
    const stats = [
        { label: "Total Asset Yield (MoM)", val: "$52,400", change: "+4.2%", positive: true },
        { label: "Accounts Receivable", val: "$1,850", change: "-12%", positive: false },
        { label: "YTD Gross Deployment", val: "$482,900", change: "+14.8%", positive: true }
    ];

    return (
        <div className="space-y-[40px]">
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Revenue Forensics</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Financial Analytics</h1>
                <p className="text-[16px] text-[#6B7280]">Comprehensive auditing of portfolio revenue and settlement velocity.</p>
            </div>

            {/* Financial HUD */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px]">
                            <p className="text-[12px] font-[700] text-[#6B7280] uppercase tracking-[0.05em] mb-[12px]">{stat.label}</p>
                            <div className="flex items-end gap-[12px]">
                                <p className="text-[32px] font-[700] text-[#111827]">{stat.val}</p>
                                <span className={`text-[14px] font-[700] mb-[6px] ${stat.positive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                                    {stat.change}
                                </span>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px]">
                {/* Settlement History */}
                <div className="lg:col-span-8 space-y-[24px]">
                    <h2 className="text-[20px] font-[700] text-[#111827]">Settlement History</h2>
                    <div className="bg-[#FFFFFF] rounded-[16px] border border-[#D1D5DB]/30 overflow-hidden shadow-sm">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-[#F9FAFB] border-b border-[#D1D5DB]/50">
                                    <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Protocol ID</th>
                                    <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Description</th>
                                    <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Amount</th>
                                    <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Date</th>
                                    <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#D1D5DB]/20">
                                {MOCK_PAYMENTS.map((pmt) => (
                                    <tr key={pmt.id} className="hover:bg-[#F9FAFB]/50 transition-colors">
                                        <td className="p-[20px] text-[13px] font-[600] text-[#6B7280]">{pmt.id}</td>
                                        <td className="p-[20px] text-[14px] font-[700] text-[#111827]">{pmt.title}</td>
                                        <td className="p-[20px] text-[14px] font-[700] text-[#111827]">${pmt.amount.toLocaleString()}</td>
                                        <td className="p-[20px] text-[13px] text-[#6B7280]">{pmt.date}</td>
                                        <td className="p-[20px]">
                                            <span className="px-[10px] py-[4px] bg-[#10B981]/10 text-[#10B981] text-[11px] font-[700] uppercase rounded-[4px]">
                                                {pmt.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Breakdown Card */}
                <div className="lg:col-span-4 space-y-[24px]">
                    <h2 className="text-[20px] font-[700] text-[#111827]">Yield Distribution</h2>
                    <Card className="bg-[#111827] border-none p-[40px] text-[#FFFFFF] shadow-xl">
                        <div className="space-y-[32px]">
                            {[
                                { label: "Institutional Assets", val: "78%", color: "bg-[#1D4ED8]" },
                                { label: "Enterprise Portfolios", val: "14%", color: "bg-[#10B981]" },
                                { label: "Modern Nodes", val: "8%", color: "bg-[#6B7280]" }
                            ].map(item => (
                                <div key={item.label} className="space-y-[12px]">
                                    <div className="flex justify-between text-[13px] font-[600]">
                                        <span className="text-[#FFFFFF]/60 uppercase tracking-[0.05em]">{item.label}</span>
                                        <span>{item.val}</span>
                                    </div>
                                    <div className="h-[4px] bg-[#FFFFFF]/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: item.val }}
                                            transition={{ duration: 1, ease: "circOut" }}
                                            className={`h-full ${item.color}`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-[48px] pt-[32px] border-t border-[#FFFFFF]/10">
                            <button className="w-full py-[14px] bg-[#1D4ED8] text-[#FFFFFF] text-[14px] font-[600] rounded-[8px] hover:bg-[#2563EB] transition-all">
                                Export Ledger (CSV)
                            </button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
