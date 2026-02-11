
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import { MOCK_ASSETS } from '@/lib/mockData';

export default function LandlordPerformancePage() {
    const assetPerformance = MOCK_ASSETS.map(asset => ({
        ...asset,
        efficiency: Math.floor(Math.random() * 20 + 80),
        roi: (Math.random() * 5 + 4).toFixed(2)
    }));

    return (
        <div className="space-y-[40px]">
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Operational Efficiency</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Performance Audit</h1>
                <p className="text-[16px] text-[#6B7280]">Real-time efficiency indices and ROI forensics for each asset node.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
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
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[40px] text-center">
                            <p className="text-[11px] font-[700] text-[#6B7280] uppercase tracking-[0.1em] mb-[12px]">{stat.label}</p>
                            <h3 className="text-[32px] font-[700] text-[#111827] mb-[8px]">{stat.val}</h3>
                            <p className="text-[13px] font-[600] text-[#1D4ED8]">{stat.sub}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 overflow-hidden shadow-sm">
                <div className="p-[32px] border-b border-[#D1D5DB]/20 bg-[#F9FAFB]/50">
                    <h3 className="text-[18px] font-[700] text-[#111827]">Asset Node Efficiency Ledger</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-[#F9FAFB] border-b border-[#D1D5DB]/50">
                                <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Asset Node</th>
                                <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Efficiency Index</th>
                                <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Reported ROI</th>
                                <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Status</th>
                                <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280] text-right">Drilldown</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#D1D5DB]/20">
                            {assetPerformance.map((asset) => (
                                <tr key={asset.id} className="hover:bg-[#F9FAFB]/50 transition-colors group">
                                    <td className="p-[20px]">
                                        <div className="flex items-center gap-[12px]">
                                            <div className="w-[40px] h-[40px] bg-[#F3F4F6] rounded-[8px] shrink-0" />
                                            <div>
                                                <p className="text-[14px] font-[700] text-[#111827]">{asset.title}</p>
                                                <p className="text-[11px] text-[#6B7280]">{asset.category}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-[20px]">
                                        <div className="flex items-center gap-[12px]">
                                            <div className="flex-grow h-[4px] bg-[#F3F4F6] rounded-full overflow-hidden max-w-[100px]">
                                                <div className="h-full bg-[#1D4ED8]" style={{ width: `${asset.efficiency}%` }} />
                                            </div>
                                            <span className="text-[14px] font-[700] text-[#111827]">{asset.efficiency}%</span>
                                        </div>
                                    </td>
                                    <td className="p-[20px]">
                                        <span className="text-[15px] font-[700] text-[#111827]">{asset.roi}%</span>
                                    </td>
                                    <td className="p-[20px]">
                                        <span className={`px-[10px] py-[4px] rounded-[4px] text-[10px] font-[700] uppercase ${asset.status === 'available' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-[#1D4ED8]/10 text-[#1D4ED8]'}`}>
                                            {asset.status}
                                        </span>
                                    </td>
                                    <td className="p-[20px] text-right">
                                        <button className="text-[13px] font-[700] text-[#1D4ED8] hover:underline">Forensics</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
                <Card className="bg-[#111827] border-none p-[48px] text-white">
                    <h3 className="text-[20px] font-[700] mb-[32px]">Efficiency Optimizers</h3>
                    <div className="space-y-[24px]">
                        {[
                            { t: "Predictive HVAC", v: "Scheduled", d: "Deploying automated climate optimization across all nodes." },
                            { t: "Lighting Logic", v: "Active", d: "Enterprise-grade intensity control for unit clusters." },
                            { t: "Maintenance Batching", v: "Pending", d: "Aggregation of minor repair signals for reduced latency." }
                        ].map(opt => (
                            <div key={opt.t} className="p-[24px] bg-white/5 rounded-[16px] border border-white/10 space-y-[12px]">
                                <div className="flex justify-between items-center">
                                    <h4 className="text-[16px] font-[700]">{opt.t}</h4>
                                    <span className="text-[11px] font-[700] uppercase text-[#1D4ED8] bg-white px-[8px] py-[2px] rounded-[4px]">{opt.v}</span>
                                </div>
                                <p className="text-[13px] text-white/50 leading-[1.6]">{opt.d}</p>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px] flex flex-col justify-center text-center space-y-[32px]">
                    <div className="w-[80px] h-[80px] bg-[#10B981]/10 rounded-full flex items-center justify-center mx-auto text-[#10B981]">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                    </div>
                    <div className="space-y-[12px]">
                        <h3 className="text-[22px] font-[700] text-[#111827]">Institutional Benchmark Passed</h3>
                        <p className="text-[15px] text-[#6B7280] max-w-[400px] mx-auto leading-[1.6]">
                            Your portfolio currently resides in the top 15% of all platform asset clusters for structural efficiency.
                        </p>
                    </div>
                    <button className="px-[32px] py-[16px] bg-[#111827] text-white font-[700] rounded-[8px] hover:bg-[#1D4ED8] transition-all">
                        Generate Certification
                    </button>
                </Card>
            </div>
        </div>
    );
}
