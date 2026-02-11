
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import { MOCK_ASSETS } from '@/lib/mockData';

const MAINTENANCE_HISTORY = [
    { id: 'HIST-M-01', assetId: '2', type: 'Exterior Node Refurbishment', cost: '$8,400', date: 'Sept 2023', vendor: 'Global Structures Ltd' },
    { id: 'HIST-M-02', assetId: '1', type: 'HVAC Cluster Replacement', cost: '$3,200', date: 'Aug 2023', vendor: 'Precision Climate Nodes' },
    { id: 'HIST-M-03', assetId: '4', type: 'Digital Access Migration', cost: '$1,850', date: 'July 2023', vendor: 'Security Protocol Group' }
];

export default function LandlordMaintenanceHistoryPage() {
    return (
        <div className="space-y-[40px]">
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Temporal Audit</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Maintenance Archive</h1>
                <p className="text-[16px] text-[#6B7280]">Historical ledger of structural optimizations and resource deployments.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
                {[
                    { label: "Lifetime CapEx", val: "$242,900" },
                    { label: "Asset Value Uplift", val: "+14.2%" },
                    { label: "Structural Longevity", val: "Tier 1" }
                ].map((stat, i) => (
                    <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}>
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[40px] text-center hover:shadow-lg transition-all">
                            <p className="text-[10px] uppercase font-[700] text-[#6B7280] tracking-[0.1em] mb-[12px]">{stat.label}</p>
                            <h3 className="text-[28px] font-[700] text-[#111827]">{stat.val}</h3>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="bg-[#FFFFFF] rounded-[16px] border border-[#D1D5DB]/30 overflow-hidden shadow-sm">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-[#F9FAFB] border-b border-[#D1D5DB]/50">
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Historical Node</th>
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Asset Cluster</th>
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Financial Outlay</th>
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Date Deployment</th>
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Entity Vendor</th>
                            <th className="p-[20px] text-right text-[11px] font-[700] uppercase text-[#6B7280]">Forensics</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D1D5DB]/20">
                        {MAINTENANCE_HISTORY.map((hist) => {
                            const asset = MOCK_ASSETS.find(a => a.id === hist.assetId);
                            return (
                                <tr key={hist.id} className="hover:bg-[#F9FAFB]/50 transition-colors group">
                                    <td className="p-[20px]">
                                        <p className="text-[14px] font-[700] text-[#111827]">{hist.type}</p>
                                        <p className="text-[11px] text-[#6B7280]">Signal ID: {hist.id}</p>
                                    </td>
                                    <td className="p-[20px]">
                                        <p className="text-[14px] font-[600] text-[#111827]">{asset?.title}</p>
                                    </td>
                                    <td className="p-[20px] text-[15px] font-[700] text-[#111827]">{hist.cost}</td>
                                    <td className="p-[20px] text-[14px] text-[#6B7280]">{hist.date}</td>
                                    <td className="p-[20px] text-[14px] text-[#1D4ED8] font-[600]">{hist.vendor}</td>
                                    <td className="p-[20px] text-right">
                                        <button className="text-[13px] font-[700] text-[#1D4ED8] hover:underline">View Forensic Ledger</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <Card className="bg-[#111827] border-none p-[48px] text-white flex flex-col md:flex-row items-center justify-between shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#1D4ED8]/5 rounded-full blur-[80px]" />
                <div className="space-y-[12px] relative z-10">
                    <h3 className="text-[20px] font-[700]">Structural Health Certification</h3>
                    <p className="text-white/50 text-[14px] max-w-[500px] leading-[1.6]">
                        Based on historical maintenance velocity, your portfolio currently maintains a 98.4% structural health index.
                    </p>
                </div>
                <button className="px-[32px] py-[16px] bg-[#FFFFFF] text-[#111827] font-[700] rounded-[8px] hover:bg-[#1D4ED8] hover:text-[#FFFFFF] transition-all text-[14px] relative z-10">
                    Download Q3 Status Report
                </button>
            </Card>
        </div>
    );
}
