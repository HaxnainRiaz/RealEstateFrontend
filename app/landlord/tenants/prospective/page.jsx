
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import { MOCK_REQUESTS, MOCK_ASSETS } from '@/lib/mockData';

export default function LandlordProspectiveTenantsPage() {
    return (
        <div className="space-y-[40px]">
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Pipeline Management</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Prospective Residents</h1>
                <p className="text-[16px] text-[#6B7280]">Aggregate view of high-yield candidates entering the structural selection protocol.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
                {[
                    { label: "Pipeline Depth", val: "142 Nodes", sub: "Global Catalog" },
                    { label: "Interest Velocity", val: "+14.2%", sub: "Last 7 Cycles" },
                    { label: "Matching Accuracy", val: "92.4%", sub: "Institutional Sync" }
                ].map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] hover:border-[#1D4ED8] transition-all">
                            <p className="text-[11px] font-[700] text-[#6B7280] uppercase tracking-[0.1em] mb-[12px]">{stat.label}</p>
                            <h3 className="text-[28px] font-[700] text-[#111827] mb-[4px]">{stat.val}</h3>
                            <p className="text-[13px] font-[600] text-[#1D4ED8]">{stat.sub}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="space-y-[24px]">
                <h2 className="text-[20px] font-[700] text-[#111827]">Candidate Node Stream</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
                    {MOCK_REQUESTS.map((req, i) => {
                        const asset = MOCK_ASSETS.find(a => a.id === req.assetId);
                        const match = Math.floor(Math.random() * 10 + 90);
                        return (
                            <motion.div
                                key={req.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] hover:shadow-xl transition-all group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-[20px]">
                                        <span className="px-[10px] py-[4px] bg-[#10B981]/10 text-[#10B981] text-[10px] font-[800] uppercase rounded-[4px]">
                                            {match}% Platform Match
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-[24px] mb-[32px]">
                                        <div className="w-[64px] h-[64px] bg-[#F9FAFB] rounded-[16px] flex items-center justify-center text-[#1D4ED8] border border-[#D1D5DB]/20">
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="text-[18px] font-[700] text-[#111827]">Candidate Cluster T-{req.id.split('-')[1]}</h4>
                                            <p className="text-[14px] text-[#6B7280]">Targeting: <span className="font-[600] text-[#111827]">{asset?.title}</span></p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-[16px] pt-[24px] border-t border-[#D1D5DB]/10">
                                        <div className="space-y-[4px]">
                                            <p className="text-[10px] text-[#6B7280] uppercase font-[700]">Yield Class</p>
                                            <p className="text-[14px] font-[700] text-[#111827]">${asset?.price.toLocaleString()}</p>
                                        </div>
                                        <div className="space-y-[4px]">
                                            <p className="text-[10px] text-[#6B7280] uppercase font-[700]">Signal Date</p>
                                            <p className="text-[14px] font-[700] text-[#111827]">{req.date}</p>
                                        </div>
                                        <div className="space-y-[4px]">
                                            <p className="text-[10px] text-[#6B7280] uppercase font-[700]">Score Audit</p>
                                            <p className="text-[14px] font-[700] text-[#10B981]">92 Verified</p>
                                        </div>
                                    </div>
                                    <div className="mt-[32px] flex gap-[12px]">
                                        <button className="flex-grow py-[12px] bg-[#111827] text-white text-[13px] font-[700] rounded-[8px] hover:bg-[#1D4ED8] transition-all">Analyze Signal</button>
                                        <button className="px-[20px] py-[12px] bg-[#FFFFFF] border border-[#D1D5DB] text-[#111827] text-[13px] font-[700] rounded-[8px] hover:bg-[#F9FAFB] transition-all">Archive</button>
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <Card className="bg-[#111827] border-none p-[64px] text-center text-white relative overflow-hidden">
                <div className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] bg-[#1D4ED8]/20 rounded-full blur-[100px]" />
                <h3 className="text-[24px] font-[700] mb-[16px]">Scale Your Pipeline</h3>
                <p className="text-[16px] text-white/50 max-w-[600px] mx-auto leading-[1.8] mb-[32px]">
                    Leverage neural marketing indices to attract higher-tier institutional candidates for your active asset clusters.
                </p>
                <div className="flex justify-center gap-[16px]">
                    <button className="px-[32px] py-[16px] bg-[#1D4ED8] text-white font-[700] rounded-[12px] shadow-2xl hover:bg-[#2563EB] transition-all">Boost Asset Signals</button>
                </div>
            </Card>
        </div>
    );
}
