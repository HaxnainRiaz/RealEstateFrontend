
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MOCK_PAYMENTS } from '@/lib/mockData';
import Card from '@/components/ui/data/Card';
import {
    FiDollarSign,
    FiTrendingUp,
    FiCalendar,
    FiDownload,
    FiPieChart,
    FiArrowUpRight,
    FiLock,
    FiActivity
} from 'react-icons/fi';

export default function LandlordFinancialsPage() {
    const financialStats = [
        { label: "Net Settlement (24h)", val: "$14,250.00", trend: "+8.2%", icon: FiDollarSign, color: "text-[#10B981]", bg: "bg-[#F0FDF4]" },
        { label: "Pending Escrow", val: "$4,800.00", trend: "Lock Status: Stable", icon: FiLock, color: "text-[#1D4ED8]", bg: "bg-[#EFF6FF]" },
        { label: "Aggregate Yield", val: "5.82%", trend: "Above Target", icon: FiActivity, color: "text-[#0F172A]", bg: "bg-[#F1F5F9]" }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -10 },
        show: { opacity: 1, x: 0 }
    };

    return (
        <div className="space-y-[48px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[32px]">
                <div>
                    <div className="flex items-center gap-[12px] mb-[12px]">
                        <span className="px-[10px] py-[4px] bg-[#1D4ED8] text-[#FFFFFF] text-[10px] font-[800] uppercase tracking-[0.15em] rounded-[6px]">Financial Intelligence</span>
                    </div>
                    <h1 className="text-[36px] font-[800] text-[#0F172A] tracking-tight">Revenue Analytics</h1>
                    <p className="text-[16px] text-[#64748B] mt-[4px]">Real-time settlement tracking and yield distribution metrics.</p>
                </div>
                <div className="flex gap-[12px]">
                    <button className="h-[52px] px-[24px] bg-[#FFFFFF] border border-[#E2E8F0] text-[#0F172A] text-[14px] font-[700] rounded-[12px] hover:border-[#1D4ED8] transition-all flex items-center gap-[8px] active:scale-95 shadow-sm">
                        <FiDownload />
                        Export Ledger
                    </button>
                </div>
            </div>

            {/* Financial HUD */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                {financialStats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <Card key={stat.label} className="bg-[#FFFFFF] border-[#E2E8F0] p-[32px] hover:shadow-lg transition-all relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-[24px] opacity-10 group-hover:scale-110 transition-transform">
                                <Icon className={`w-[48px] h-[48px] ${stat.color}`} />
                            </div>
                            <div className="flex items-center gap-[12px] mb-[20px]">
                                <div className={`p-[10px] rounded-[10px] ${stat.bg} ${stat.color}`}>
                                    <Icon className="w-[20px] h-[20px]" />
                                </div>
                                <p className="text-[11px] font-[800] text-[#64748B] uppercase tracking-[0.1em]">{stat.label}</p>
                            </div>
                            <div className="flex items-end justify-between">
                                <h3 className="text-[32px] font-[800] text-[#0F172A] leading-none">{stat.val}</h3>
                                <p className={`text-[13px] font-[700] ${stat.color} flex items-center gap-[4px]`}>
                                    <FiTrendingUp className="w-[14px] h-[14px]" />
                                    {stat.trend}
                                </p>
                            </div>
                        </Card>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px]">
                {/* Settlement History */}
                <div className="lg:col-span-8 space-y-[32px]">
                    <div className="flex items-center justify-between">
                        <h2 className="text-[20px] font-[800] text-[#0F172A] flex items-center gap-[12px]">
                            <FiActivity className="text-[#1D4ED8]" />
                            Settlement Ledger
                        </h2>
                    </div>

                    <div className="bg-[#FFFFFF] rounded-[20px] border border-[#E2E8F0] overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-[#F8FAFC] border-b border-[#F1F5F9]">
                                        <th className="p-[20px] text-[11px] font-[800] uppercase tracking-[0.1em] text-[#64748B]">Protocol ID</th>
                                        <th className="p-[20px] text-[11px] font-[800] uppercase tracking-[0.1em] text-[#64748B]">Transmission Type</th>
                                        <th className="p-[20px] text-[11px] font-[800] uppercase tracking-[0.1em] text-[#64748B]">Amount</th>
                                        <th className="p-[20px] text-[11px] font-[800] uppercase tracking-[0.1em] text-[#64748B]">Timestamp</th>
                                        <th className="p-[20px] text-[11px] font-[800] uppercase tracking-[0.1em] text-[#64748B] text-right">Status</th>
                                    </tr>
                                </thead>
                                <motion.tbody
                                    variants={container}
                                    initial="hidden"
                                    animate="show"
                                    className="divide-y divide-[#F1F5F9]"
                                >
                                    {MOCK_PAYMENTS.map((pmt) => (
                                        <motion.tr key={pmt.id} variants={item} className="hover:bg-[#F8FAFC]/80 transition-colors">
                                            <td className="p-[20px] text-[13px] font-[800] text-[#64748B] uppercase">TX-{pmt.id.split('-')[1]}</td>
                                            <td className="p-[20px]">
                                                <div className="flex items-center gap-[10px]">
                                                    <div className="w-[32px] h-[32px] bg-[#F1F5F9] rounded-[8px] flex items-center justify-center text-[#1D4ED8]">
                                                        <FiArrowUpRight className="w-[16px] h-[16px]" />
                                                    </div>
                                                    <span className="text-[14px] font-[800] text-[#0F172A]">{pmt.title}</span>
                                                </div>
                                            </td>
                                            <td className="p-[20px]">
                                                <span className="text-[15px] font-[800] text-[#0F172A]">${pmt.amount.toLocaleString()}</span>
                                            </td>
                                            <td className="p-[20px]">
                                                <div className="flex items-center gap-[8px] text-[13px] text-[#64748B] font-[600]">
                                                    <FiCalendar className="w-[14px] h-[14px]" />
                                                    {pmt.date}
                                                </div>
                                            </td>
                                            <td className="p-[20px] text-right">
                                                <span className={`px-[10px] py-[4px] rounded-[6px] text-[10px] font-[800] uppercase tracking-wider ${pmt.status === 'Completed' ? 'bg-[#F0FDF4] text-[#10B981]' : 'bg-[#FFFBEB] text-[#F59E0B]'}`}>
                                                    {pmt.status}
                                                </span>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </motion.tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Yield Distribution */}
                <div className="lg:col-span-4 space-y-[40px]">
                    <div>
                        <h2 className="text-[20px] font-[800] text-[#0F172A] flex items-center gap-[12px] mb-[24px]">
                            <FiPieChart className="text-[#1D4ED8]" />
                            Yield Distribution
                        </h2>
                        <Card className="bg-[#0F172A] border-none p-[40px] text-[#FFFFFF] shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-[24px] opacity-5">
                                <FiActivity className="w-[120px] h-[120px]" />
                            </div>
                            <div className="space-y-[32px] relative z-10">
                                {[
                                    { label: "Institutional Assets", val: "78%", color: "bg-[#1D4ED8]" },
                                    { label: "Enterprise Portfolios", val: "14%", color: "bg-[#10B981]" },
                                    { label: "Modern Nodes", val: "8%", color: "bg-[#64748B]" }
                                ].map(item => (
                                    <div key={item.label} className="space-y-[12px]">
                                        <div className="flex justify-between text-[13px] font-[700] text-[#94A3B8]">
                                            <span className="uppercase tracking-wider">{item.label}</span>
                                            <span className="text-[#FFFFFF]">{item.val}</span>
                                        </div>
                                        <div className="h-[6px] bg-[#FFFFFF]/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: item.val }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                className={`h-full ${item.color} rounded-full`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-[48px] pt-[32px] border-t border-[#FFFFFF]/10 relative z-10">
                                <button className="w-full h-[52px] bg-[#1D4ED8] text-[#FFFFFF] text-[14px] font-[800] rounded-[12px] hover:bg-[#2563EB] transition-all shadow-lg active:scale-95 flex items-center justify-center gap-[8px]">
                                    <FiDownload />
                                    Export Analysis
                                </button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
