
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import { MOCK_ASSETS } from '@/lib/mockData';
import Link from 'next/link';

export default function LandlordPortfolioPage() {
    const portfolioStats = [
        { label: "Aggregate Market Value", val: "$12,482,000", change: "+12.4% YTD" },
        { label: "Structural Optimization", val: "94%", change: "Audit Status: Secure" },
        { label: "Portfolio Yield (Avg)", val: "5.4%", change: "Target: 5.8%" }
    ];

    return (
        <div className="space-y-[40px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px]">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Strategic Management</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Portfolio Forensics</h1>
                    <p className="text-[16px] text-[#6B7280]">Comprehensive structural audit of your global tier-1 asset classes.</p>
                </div>
                <button className="px-[24px] py-[12px] bg-[#111827] text-[#FFFFFF] text-[14px] font-[600] rounded-[8px] hover:bg-[#1D4ED8] transition-all">
                    Generate Q3 Audit
                </button>
            </div>

            {/* Portfolio HUD */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                {portfolioStats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] hover:border-[#1D4ED8] transition-all">
                            <p className="text-[12px] font-[700] text-[#6B7280] uppercase tracking-[0.05em] mb-[12px]">{stat.label}</p>
                            <h3 className="text-[28px] font-[700] text-[#111827] mb-[8px]">{stat.val}</h3>
                            <p className="text-[13px] font-[600] text-[#1D4ED8]">{stat.change}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="space-y-[24px]">
                <h2 className="text-[22px] font-[700] text-[#111827]">Asset Nodes Distribution</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
                    {MOCK_ASSETS.map((asset, i) => (
                        <motion.div
                            key={asset.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link href={`/landlord/listings/${asset.id}`} className="block group">
                                <Card className="p-0 overflow-hidden bg-[#FFFFFF] border-[#D1D5DB]/30 group-hover:border-[#1D4ED8] transition-all h-full flex flex-col">
                                    <div className="aspect-[16/9] bg-[#F9FAFB] relative overflow-hidden">
                                        <div className="absolute inset-0 bg-neutral-100 group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute top-[20px] left-[20px] z-10">
                                            <span className="px-[12px] py-[6px] bg-[#1D4ED8] text-[#FFFFFF] text-[10px] font-[700] uppercase rounded-[4px]">
                                                {asset.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-[32px] space-y-[20px] flex-grow">
                                        <div>
                                            <h4 className="text-[18px] font-[700] text-[#111827]">{asset.title}</h4>
                                            <p className="text-[13px] text-[#6B7280]">{asset.address}</p>
                                        </div>

                                        <div className="grid grid-cols-3 gap-[16px] pt-[20px] border-t border-[#D1D5DB]/20">
                                            <div>
                                                <p className="text-[10px] text-[#6B7280] uppercase font-[700] tracking-[0.05em]">Yield</p>
                                                <p className="text-[14px] font-[700] text-[#1D4ED8]">{asset.yield}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-[#6B7280] uppercase font-[700] tracking-[0.05em]">Revenue</p>
                                                <p className="text-[14px] font-[700] text-[#111827]">${asset.price}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-[#6B7280] uppercase font-[700] tracking-[0.05em]">Audit</p>
                                                <p className="text-[14px] font-[700] text-[#10B981]">Passed</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-[32px] pt-0">
                                        <button className="w-full py-[12px] border border-[#D1D5DB] rounded-[8px] text-[13px] font-[600] group-hover:bg-[#111827] group-hover:text-[#FFFFFF] transition-all">
                                            Inspect Node Forensics
                                        </button>
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
