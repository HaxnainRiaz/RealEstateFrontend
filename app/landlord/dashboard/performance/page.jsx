
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import { MOCK_ASSETS } from '@/lib/mockData';
import Link from 'next/link';
import { FiArrowLeft, FiCheckCircle, FiActivity } from 'react-icons/fi';

export default function LandlordPerformancePage() {
    const assetPerformance = MOCK_ASSETS.map(asset => ({
        ...asset,
        efficiency: Math.floor(Math.random() * 20 + 80),
        roi: (Math.random() * 5 + 4).toFixed(2)
    }));

    return (
        <div className="space-y-[32px] md:space-y-[40px]">
            <div className="flex items-center gap-[12px] md:gap-[16px] mb-[8px]">
                <Link href="/landlord/dashboard" className="p-[8px] md:p-[10px] bg-[#FFFFFF] border border-[#E2E8F0] rounded-[10px] text-[#64748B] hover:text-[#1D4ED8] hover:border-[#1D4ED8] transition-all group">
                    <FiArrowLeft className="w-[16px] md:w-[18px] h-[16px] md:h-[18px] group-hover:-translate-x-[2px] transition-transform" />
                </Link>
                <div>
                    <span className="text-[11px] md:text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] block">Operational Efficiency</span>
                    <h1 className="text-[24px] md:text-[32px] font-[700] text-[#111827]">Performance Audit</h1>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[32px]">
                {[
                    { label: "Aggregate Efficiency", val: "91.4%", sub: "+2.1% improvement" },
                    { label: "Average ROI node", val: "5.21%", sub: "Targeting 5.50%" },
                    { label: "Maintenance Latency", val: "4.2h", sub: "Below platform average" }
                ].map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[40px] text-center group hover:border-[#1D4ED8] transition-all h-full">
                            <p className="text-[10px] md:text-[11px] font-[700] text-[#6B7280] uppercase tracking-[0.1em] mb-[8px] md:mb-[12px]">{stat.label}</p>
                            <h3 className="text-[28px] md:text-[32px] font-[700] text-[#111827] mb-[4px] md:mb-[8px]">{stat.val}</h3>
                            <p className="text-[12px] md:text-[13px] font-[600] text-[#1D4ED8]">{stat.sub}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 overflow-hidden shadow-sm">
                <div className="p-[20px] md:p-[32px] border-b border-[#D1D5DB]/20 bg-[#F9FAFB]/50">
                    <h3 className="text-[16px] md:text-[18px] font-[700] text-[#111827]">Asset Node Efficiency Ledger</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[800px]">
                        <thead>
                            <tr className="bg-[#F9FAFB] border-b border-[#D1D5DB]/50">
                                <th className="p-[16px] md:p-[20px] text-[10px] md:text-[11px] font-[700] uppercase text-[#6B7280]">Asset Node</th>
                                <th className="p-[16px] md:p-[20px] text-[10px] md:text-[11px] font-[700] uppercase text-[#6B7280]">Efficiency Index</th>
                                <th className="p-[16px] md:p-[20px] text-[10px] md:text-[11px] font-[700] uppercase text-[#6B7280]">Reported ROI</th>
                                <th className="p-[16px] md:p-[20px] text-[10px] md:text-[11px] font-[700] uppercase text-[#6B7280]">Status</th>
                                <th className="p-[16px] md:p-[20px] text-[10px] md:text-[11px] font-[700] uppercase text-[#6B7280] text-right">Drilldown</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#D1D5DB]/20">
                            {assetPerformance.map((asset) => (
                                <tr key={asset.id} className="hover:bg-[#F9FAFB]/50 transition-colors group">
                                    <td className="p-[16px] md:p-[20px]">
                                        <div className="flex items-center gap-[12px]">
                                            <div className="w-[36px] md:w-[40px] h-[36px] md:h-[40px] bg-[#F3F4F6] rounded-[8px] shrink-0" />
                                            <div className="min-w-0">
                                                <p className="text-[13px] md:text-[14px] font-[700] text-[#111827] truncate">{asset.title}</p>
                                                <p className="text-[10px] md:text-[11px] text-[#6B7280] truncate">{asset.category}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-[16px] md:p-[20px]">
                                        <div className="flex items-center gap-[12px]">
                                            <div className="flex-grow h-[4px] bg-[#F3F4F6] rounded-full overflow-hidden max-w-[100px]">
                                                <div className="h-full bg-[#1D4ED8]" style={{ width: `${asset.efficiency}%` }} />
                                            </div>
                                            <span className="text-[13px] md:text-[14px] font-[700] text-[#111827]">{asset.efficiency}%</span>
                                        </div>
                                    </td>
                                    <td className="p-[16px] md:p-[20px]">
                                        <span className="text-[14px] md:text-[15px] font-[700] text-[#111827]">{asset.roi}%</span>
                                    </td>
                                    <td className="p-[16px] md:p-[20px]">
                                        <span className={`px-[8px] md:px-[10px] py-[3px] md:py-[4px] rounded-[4px] text-[9px] md:text-[10px] font-[700] uppercase shrink-0 ${asset.status === 'available' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-[#1D4ED8]/10 text-[#1D4ED8]'}`}>
                                            {asset.status}
                                        </span>
                                    </td>
                                    <td className="p-[16px] md:p-[20px] text-right">
                                        <button className="text-[12px] md:text-[13px] font-[700] text-[#1D4ED8] hover:underline">Forensics</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] md:gap-[40px]">
                <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[48px] shadow-sm">
                    <h3 className="text-[18px] md:text-[20px] font-[700] mb-[24px] md:mb-[32px] text-[#111827]">Efficiency Optimizers</h3>
                    <div className="space-y-[16px] md:space-y-[24px]">
                        {[
                            { t: "Predictive HVAC", v: "Scheduled", d: "Deploying automated climate optimization across all nodes." },
                            { t: "Lighting Logic", v: "Active", d: "Enterprise-grade intensity control for unit clusters." },
                            { t: "Maintenance Batching", v: "Pending", d: "Aggregation of minor repair signals for reduced latency." }
                        ].map(opt => (
                            <div key={opt.t} className="p-[20px] md:p-[24px] bg-[#F9FAFB] rounded-[16px] border border-[#E2E8F0] space-y-[8px] md:space-y-[12px]">
                                <div className="flex justify-between items-center gap-[12px]">
                                    <h4 className="text-[15px] md:text-[16px] font-[700] truncate text-[#111827]">{opt.t}</h4>
                                    <span className="text-[9px] md:text-[11px] font-[700] uppercase text-[#1D4ED8] bg-[#EFF6FF] px-[8px] py-[2px] rounded-[4px] shrink-0">{opt.v}</span>
                                </div>
                                <p className="text-[12px] md:text-[13px] text-[#6B7280] leading-[1.6] font-[400]">{opt.d}</p>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[48px] flex flex-col justify-center text-center space-y-[24px] md:space-y-[32px]">
                    <div className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] bg-[#10B981]/10 rounded-full flex items-center justify-center mx-auto text-[#10B981]">
                        <FiCheckCircle className="w-[30px] md:w-[40px] h-[30px] md:h-[40px]" />
                    </div>
                    <div className="space-y-[10px] md:space-y-[12px]">
                        <h3 className="text-[20px] md:text-[22px] font-[700] text-[#111827]">Institutional Benchmark Passed</h3>
                        <p className="text-[14px] md:text-[15px] text-[#6B7280] max-w-[400px] mx-auto leading-[1.6]">
                            Your portfolio currently resides in the top 15% of all platform asset clusters for structural efficiency.
                        </p>
                    </div>
                    <button className="w-full sm:w-auto sm:self-center px-[24px] md:px-[32px] py-[12px] md:py-[16px] bg-[#111827] text-white font-[700] rounded-[8px] hover:bg-[#1D4ED8] transition-all text-[13px] md:text-[14px]">
                        Generate Certification
                    </button>
                </Card>
            </div>
        </div>
    );
}
