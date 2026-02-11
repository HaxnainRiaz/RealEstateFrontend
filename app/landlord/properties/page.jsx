
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import { MOCK_ASSETS } from '@/lib/mockData';
import Link from 'next/link';
import {
    FiShield,
    FiActivity,
    FiGlobe,
    FiTrendingUp,
    FiSearch,
    FiMaximize2,
    FiPlus,
    FiPieChart
} from 'react-icons/fi';

export default function LandlordPortfolioPage() {
    const portfolioStats = [
        { label: "Aggregate Market Value", val: "$12,482,000", change: "+12.4% YTD", icon: FiGlobe, color: "text-[#1D4ED8]" },
        { label: "Structural Optimization", val: "94%", change: "Audit Status: Secure", icon: FiShield, color: "text-[#10B981]" },
        { label: "Portfolio Yield (Avg)", val: "5.4%", change: "Target: 5.8%", icon: FiTrendingUp, color: "text-[#1D4ED8]" }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="space-y-[48px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[32px]">
                <div>
                    <div className="flex items-center gap-[12px] mb-[12px]">
                        <span className="px-[10px] py-[4px] bg-[#1D4ED8] text-[#FFFFFF] text-[10px] font-[800] uppercase tracking-[0.15em] rounded-[6px]">Strategic Management</span>
                    </div>
                    <h1 className="text-[36px] font-[800] text-[#0F172A] tracking-tight">Portfolio Forensics</h1>
                    <p className="text-[16px] text-[#64748B] mt-[4px]">Comprehensive structural audit of your global tier-1 asset classes.</p>
                </div>
                <div className="flex gap-[12px]">
                    <button className="h-[52px] px-[28px] bg-[#0F172A] text-[#FFFFFF] text-[14px] font-[800] rounded-[12px] hover:bg-[#1D4ED8] shadow-[0_8px_16px_rgba(15,23,42,0.1)] transition-all flex items-center gap-[10px] active:scale-95">
                        <FiMaximize2 />
                        Generate Q3 Audit
                    </button>
                    <button className="h-[52px] w-[52px] flex items-center justify-center bg-[#FFFFFF] border border-[#E2E8F0] text-[#64748B] rounded-[12px] hover:text-[#0F172A] hover:border-[#0F172A] transition-all active:scale-95 shadow-sm">
                        <FiPieChart className="w-20px h-20px" />
                    </button>
                </div>
            </div>

            {/* Portfolio HUD */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-3 gap-[24px]"
            >
                {portfolioStats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div key={stat.label} variants={item}>
                            <Card className="bg-[#FFFFFF] border-[#E2E8F0] p-[32px] hover:border-[#1D4ED8] hover:shadow-lg transition-all relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-[24px] opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all">
                                    <Icon className={`w-[64px] h-[64px] ${stat.color}`} />
                                </div>
                                <div className="flex items-center gap-[12px] mb-[20px]">
                                    <div className={`p-[10px] rounded-[10px] bg-[#F1F5F9] ${stat.color}`}>
                                        <Icon className="w-[20px] h-[20px]" />
                                    </div>
                                    <p className="text-[11px] font-[800] text-[#64748B] uppercase tracking-[0.1em]">{stat.label}</p>
                                </div>
                                <h3 className="text-[32px] font-[800] text-[#0F172A] mb-[6px]">{stat.val}</h3>
                                <p className="text-[13px] font-[700] text-[#1D4ED8] flex items-center gap-[6px]">
                                    <FiTrendingUp />
                                    {stat.change}
                                </p>
                            </Card>
                        </motion.div>
                    );
                })}
            </motion.div>

            <div className="space-y-[32px]">
                <div className="flex items-center justify-between">
                    <h2 className="text-[24px] font-[800] text-[#0F172A] tracking-tight">Asset Nodes Distribution</h2>
                    <div className="flex items-center gap-[16px]">
                        <div className="flex items-center bg-[#FFFFFF] border border-[#E2E8F0] rounded-[10px] px-[14px] py-[8px] gap-[10px] focus-within:ring-2 focus-within:ring-[#1D4ED8]/20 transition-all">
                            <FiSearch className="text-[#64748B] w-[18px] h-[18px]" />
                            <input
                                type="text"
                                placeholder="Filter nodes..."
                                className="bg-transparent border-none outline-none text-[13px] font-[500] w-[200px]"
                            />
                        </div>
                    </div>
                </div>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]"
                >
                    {MOCK_ASSETS.map((asset) => (
                        <motion.div key={asset.id} variants={item}>
                            <Link href={`/landlord/listings/${asset.id}`} className="block group">
                                <Card className="p-0 overflow-hidden bg-[#FFFFFF] border-[#E2E8F0] group-hover:border-[#1D4ED8] group-hover:shadow-xl transition-all h-full flex flex-col relative">
                                    <div className="aspect-[16/9] bg-[#F1F5F9] relative overflow-hidden">
                                        {/* Placeholder for asset mapping visualization */}
                                        <div className="absolute inset-0 bg-[#0F172A]/5 opacity-20 group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: 'radial-gradient(#0F172A 2px, transparent 2px)', backgroundSize: '20px 20px' }} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 to-transparent" />
                                        <div className="absolute top-[20px] left-[20px] z-10 flex gap-[8px]">
                                            <span className="px-[12px] py-[6px] bg-[#1D4ED8] text-[#FFFFFF] text-[10px] font-[800] uppercase tracking-wider rounded-[6px] shadow-lg">
                                                {asset.category}
                                            </span>
                                            <span className="px-[12px] py-[6px] bg-[#FFFFFF] text-[#0F172A] text-[10px] font-[800] uppercase tracking-wider rounded-[6px] shadow-lg border border-[#E2E8F0]">
                                                Node: {asset.id}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-[20px] right-[20px] z-10">
                                            <div className="w-[40px] h-[40px] bg-[#FFFFFF]/90 backdrop-blur-md rounded-[10px] flex items-center justify-center text-[#1D4ED8] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                                <FiMaximize2 className="w-[20px] h-[20px]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-[32px] space-y-[24px] flex-grow">
                                        <div>
                                            <h4 className="text-[20px] font-[800] text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors">{asset.title}</h4>
                                            <p className="text-[14px] text-[#64748B] font-[500] mt-[4px]">{asset.address}</p>
                                        </div>

                                        <div className="grid grid-cols-3 gap-[16px] pt-[24px] border-t border-[#F1F5F9]">
                                            <div className="space-y-[4px]">
                                                <p className="text-[10px] text-[#64748B] uppercase font-[800] tracking-[0.1em]">Yield</p>
                                                <p className="text-[15px] font-[800] text-[#1D4ED8]">{asset.yield}</p>
                                            </div>
                                            <div className="space-y-[4px]">
                                                <p className="text-[10px] text-[#64748B] uppercase font-[800] tracking-[0.1em]">Revenue</p>
                                                <p className="text-[15px] font-[800] text-[#0F172A]">${asset.price.toLocaleString()}</p>
                                            </div>
                                            <div className="space-y-[4px]">
                                                <p className="text-[10px] text-[#64748B] uppercase font-[800] tracking-[0.1em]">Audit</p>
                                                <div className="flex items-center gap-[4px] text-[15px] font-[800] text-[#10B981]">
                                                    <FiShield className="w-[14px] h-[14px]" />
                                                    <span>Live</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-[32px] pb-[32px]">
                                        <button className="w-full h-[48px] border border-[#E2E8F0] rounded-[10px] text-[13px] font-[800] text-[#0F172A] group-hover:bg-[#0F172A] group-hover:text-[#FFFFFF] group-hover:border-[#0F172A] transition-all flex items-center justify-center gap-[8px]">
                                            Inspect Node Forensics
                                            <FiActivity className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </button>
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                    <motion.div variants={item}>
                        <button className="w-full h-full min-h-[400px] border-2 border-dashed border-[#E2E8F0] rounded-[20px] flex flex-col items-center justify-center gap-[16px] hover:border-[#1D4ED8] hover:bg-[#F8FAFC] transition-all group">
                            <div className="w-[64px] h-[64px] bg-[#F1F5F9] rounded-full flex items-center justify-center text-[#64748B] group-hover:text-[#1D4ED8] group-hover:scale-110 transition-all">
                                <FiPlus className="w-[28px] h-[28px]" />
                            </div>
                            <div className="text-center">
                                <p className="text-[16px] font-[800] text-[#0F172A]">Acquire New Node</p>
                                <p className="text-[13px] text-[#64748B] font-[500] mt-[4px]">Expand global portfolio network</p>
                            </div>
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
