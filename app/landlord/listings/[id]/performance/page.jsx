
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { MOCK_ASSETS } from '@/lib/mockData';
import Card from '@/components/ui/data/Card';
import Link from 'next/link';

export default function LandlordListingPerformancePage() {
    const { id } = useParams();
    const asset = MOCK_ASSETS.find(a => a.id === id) || MOCK_ASSETS[0];

    return (
        <div className="space-y-[40px]">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-[32px]">
                <div className="space-y-[16px]">
                    <Link href={`/landlord/listings/${asset.id}`} className="text-[14px] font-[600] text-[#1D4ED8] flex items-center gap-[8px] hover:underline">
                        ← Back to Asset Detail
                    </Link>
                    <div>
                        <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Performance Ledger</span>
                        <h1 className="text-[32px] font-[700] text-[#111827]">Yield Forensics: {asset.title}</h1>
                        <p className="text-[16px] text-[#6B7280]">Historical efficiency and financial audit for this specific asset node.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
                {[
                    { label: "Lifetime Yield", val: "$124,500" },
                    { label: "Efficiency Score", val: "96.4%" },
                    { label: "Market Match", val: "+2.1%" },
                    { label: "Tenant Retention", val: "18.4mo" }
                ].map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px]">
                            <p className="text-[10px] font-[700] text-[#6B7280] uppercase tracking-[0.05em] mb-[12px]">{stat.label}</p>
                            <h3 className="text-[24px] font-[700] text-[#111827]">{stat.val}</h3>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px]">
                <div className="lg:col-span-8 space-y-[40px]">
                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px]">
                        <h3 className="text-[20px] font-[700] text-[#111827] mb-[40px]">Temporal Revenue Projection</h3>
                        <div className="aspect-[21/9] bg-[#F9FAFB] border border-dashed border-[#D1D5DB] rounded-[16px] flex items-center justify-center">
                            <span className="text-[14px] font-[600] text-[#D1D5DB]">DYNAMIC TIME-SERIES CHART</span>
                        </div>
                    </Card>

                    <div className="bg-[#FFFFFF] rounded-[16px] border border-[#D1D5DB]/30 overflow-hidden shadow-sm">
                        <div className="p-[24px] border-b border-[#D1D5DB]/20 bg-[#F9FAFB]/50">
                            <h3 className="text-[16px] font-[700] text-[#111827]">Incident Recovery Record</h3>
                        </div>
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-[#F9FAFB] border-b border-[#D1D5DB]/50">
                                    <th className="p-[16px] text-[11px] font-[700] uppercase text-[#6B7280]">Incident Node</th>
                                    <th className="p-[16px] text-[11px] font-[700] uppercase text-[#6B7280]">Resolution Time</th>
                                    <th className="p-[16px] text-[11px] font-[700] uppercase text-[#6B7280]">Cost Impact</th>
                                    <th className="p-[16px] text-[11px] font-[700] uppercase text-[#6B7280]">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#D1D5DB]/20 text-[14px]">
                                <tr>
                                    <td className="p-[16px] font-[600] text-[#111827]">HVAC Recalibration</td>
                                    <td className="p-[16px] text-[#6B7280]">4.2h</td>
                                    <td className="p-[16px] text-[#111827]">$124.00</td>
                                    <td className="p-[16px]"><span className="text-[10px] font-[700] uppercase text-[#10B981]">Resolved</span></td>
                                </tr>
                                <tr>
                                    <td className="p-[16px] font-[600] text-[#111827]">Water Node Audit</td>
                                    <td className="p-[16px] text-[#6B7280]">12.0h</td>
                                    <td className="p-[16px] text-[#111827]">$0.00</td>
                                    <td className="p-[16px]"><span className="text-[10px] font-[700] uppercase text-[#10B981]">Resolved</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="lg:col-span-4 space-y-[32px]">
                    <Card className="bg-[#111827] border-none p-[40px] text-white">
                        <h3 className="text-[18px] font-[700] mb-[24px]">Market Equilibrium</h3>
                        <p className="text-[14px] text-white/50 leading-[1.8] mb-[32px]">
                            This asset is currently yielding 4.2% above the neighborhood average for its structural tier.
                        </p>
                        <div className="space-y-[16px]">
                            <div className="h-[4px] bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-[#1D4ED8] w-[84%]" />
                            </div>
                            <p className="text-[12px] font-[700] text-center uppercase tracking-[0.1em]">Target Alignment: Optima</p>
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[40px]">
                        <h3 className="text-[16px] font-[700] text-[#111827] mb-[12px]">Optimization Signal</h3>
                        <p className="text-[13px] text-[#6B7280] leading-[1.6]">
                            Increasing the annual assessment by 2.1% in the next cycle would align this node perfectly with projected market forecasts.
                        </p>
                        <button className="w-full mt-[24px] py-[12px] bg-[#F9FAFB] border border-[#D1D5DB] rounded-[8px] text-[13px] font-[700] hover:bg-[#FFFFFF] transition-all">
                            Queue Recalibration
                        </button>
                    </Card>
                </div>
            </div>
        </div>
    );
}
