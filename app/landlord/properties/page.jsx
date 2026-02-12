
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
        <div className="space-y-[32px] md:space-y-[48px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[20px] md:gap-[32px]">
                <div>
                    <div className="flex items-center gap-[12px] mb-[12px]">
                        <span className="px-[10px] py-[4px] bg-[#1D4ED8] text-[#FFFFFF] text-[10px] font-[800] uppercase tracking-[0.15em] rounded-[6px]">Strategic Management</span>
                    </div>
                    <h1 className="text-[28px] md:text-[36px] font-[800] text-[#0F172A] tracking-tight">Portfolio Forensics</h1>
                    <p className="text-[14px] md:text-[16px] text-[#64748B] mt-[4px]">Comprehensive structural audit of your global tier-1 asset classes.</p>
                </div>
                <div className="flex gap-[12px]">
                    <button className="flex-1 md:flex-none h-[48px] md:h-[52px] px-[20px] md:px-[28px] bg-[#0F172A] text-[#FFFFFF] text-[12px] md:text-[14px] font-[800] rounded-[12px] hover:bg-[#1D4ED8] shadow-[0_8px_16px_rgba(15,23,42,0.1)] transition-all flex items-center justify-center gap-[8px] md:gap-[10px] active:scale-95">
                        <FiMaximize2 className="shrink-0" />
                        <span className="truncate">Generate Q3 Audit</span>
                    </button>
                    <button className="h-[48px] w-[48px] md:h-[52px] md:w-[52px] flex items-center justify-center bg-[#FFFFFF] border border-[#E2E8F0] text-[#64748B] rounded-[12px] hover:text-[#0F172A] hover:border-[#0F172A] transition-all active:scale-95 shadow-sm shrink-0">
                        <FiPieChart className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
                    </button>
                </div>
            </div>

            {/* Portfolio HUD */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[24px]"
            >
                {portfolioStats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div key={stat.label} variants={item}>
                            <Card className="bg-[#FFFFFF] border-[#E2E8F0] p-[24px] md:p-[32px] hover:border-[#1D4ED8] hover:shadow-lg transition-all relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-[20px] md:p-[24px] opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all">
                                    <Icon className={`w-[48px] md:w-[64px] h-[48px] md:h-[64px] ${stat.color}`} />
                                </div>
                                <div className="flex items-center gap-[12px] mb-[16px] md:mb-[20px]">
                                    <div className={`p-[10px] rounded-[10px] bg-[#F1F5F9] ${stat.color}`}>
                                        <Icon className="w-[18px] md:w-[20px] h-[18px] md:h-[20px]" />
                                    </div>
                                    <p className="text-[10px] md:text-[11px] font-[800] text-[#64748B] uppercase tracking-[0.1em] truncate">{stat.label}</p>
                                </div>
                                <h3 className="text-[24px] md:text-[32px] font-[800] text-[#0F172A] mb-[6px] truncate">{stat.val}</h3>
                                <p className="text-[12px] md:text-[13px] font-[700] text-[#1D4ED8] flex items-center gap-[6px]">
                                    <FiTrendingUp className="shrink-0" />
                                    <span className="truncate">{stat.change}</span>
                                </p>
                            </Card>
                        </motion.div>
                    );
                })}
            </motion.div>

            <div className="space-y-[24px] md:space-y-[32px]">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-[16px]">
                    <h2 className="text-[20px] md:text-[24px] font-[800] text-[#0F172A] tracking-tight">Asset Nodes Distribution</h2>
                    <div className="flex items-center gap-[16px]">
                        <div className="flex items-center bg-[#FFFFFF] border border-[#E2E8F0] rounded-[10px] px-[12px] md:px-[14px] py-[8px] gap-[10px] focus-within:ring-2 focus-within:ring-[#1D4ED8]/20 transition-all w-full md:w-auto">
                            <FiSearch className="text-[#64748B] w-[18px] h-[18px] shrink-0" />
                            <input
                                type="text"
                                placeholder="Filter nodes..."
                                className="bg-transparent border-none outline-none text-[13px] font-[500] w-full md:w-[200px]"
                            />
                        </div>
                    </div>
                </div>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[32px]"
                >
                    {MOCK_ASSETS.map((asset) => (
                        <motion.div key={asset.id} variants={item}>
                            <Link href={`/landlord/listings/${asset.id}`} className="block group h-full">
                                <Card className="p-0 overflow-hidden bg-[#FFFFFF] border-[#E2E8F0] group-hover:border-[#1D4ED8] group-hover:shadow-xl transition-all h-full flex flex-col relative">
                                    <div className="aspect-[16/9] bg-[#F1F5F9] relative overflow-hidden">
                                        {/* Placeholder for asset mapping visualization */}
                                        <div className="absolute inset-0 bg-[#0F172A]/5 opacity-20 group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: 'radial-gradient(#0F172A 2px, transparent 2px)', backgroundSize: '15px 15px' }} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 to-transparent" />
                                        <div className="absolute top-[16px] md:top-[20px] left-[16px] md:left-[20px] z-10 flex flex-wrap gap-[8px]">
                                            <span className="px-[10px] py-[4px] md:px-[12px] md:py-[6px] bg-[#1D4ED8] text-[#FFFFFF] text-[9px] md:text-[10px] font-[800] uppercase tracking-wider rounded-[6px] shadow-lg">
                                                {asset.category}
                                            </span>
                                            <span className="px-[10px] py-[4px] md:px-[12px] md:py-[6px] bg-[#FFFFFF] text-[#0F172A] text-[9px] md:text-[10px] font-[800] uppercase tracking-wider rounded-[6px] shadow-lg border border-[#E2E8F0]">
                                                Node: {asset.id}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-[20px] right-[20px] z-10 hidden md:block">
                                            <div className="w-[40px] h-[40px] bg-[#FFFFFF]/90 backdrop-blur-md rounded-[10px] flex items-center justify-center text-[#1D4ED8] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                                <FiMaximize2 className="w-[20px] h-[20px]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-[20px] md:p-[32px] space-y-[16px] md:space-y-[24px] flex-grow">
                                        <div className="min-h-[60px]">
                                            <h4 className="text-[17px] md:text-[20px] font-[800] text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors line-clamp-2">{asset.title}</h4>
                                            <p className="text-[13px] md:text-[14px] text-[#64748B] font-[500] mt-[4px] line-clamp-1">{asset.address}</p>
                                        </div>

                                        <div className="grid grid-cols-3 gap-[12px] md:gap-[16px] pt-[16px] md:pt-[24px] border-t border-[#F1F5F9]">
                                            <div className="space-y-[4px]">
                                                <p className="text-[9px] md:text-[10px] text-[#64748B] uppercase font-[800] tracking-[0.1em]">Yield</p>
                                                <p className="text-[13px] md:text-[15px] font-[800] text-[#1D4ED8] truncate">{asset.yield}</p>
                                            </div>
                                            <div className="space-y-[4px]">
                                                <p className="text-[9px] md:text-[10px] text-[#64748B] uppercase font-[800] tracking-[0.1em]">Revenue</p>
                                                <p className="text-[13px] md:text-[15px] font-[800] text-[#0F172A] truncate">${(asset.price / 1000).toFixed(1)}k</p>
                                            </div>
                                            <div className="space-y-[4px]">
                                                <p className="text-[9px] md:text-[10px] text-[#64748B] uppercase font-[800] tracking-[0.1em]">Audit</p>
                                                <div className="flex items-center gap-[4px] text-[13px] md:text-[15px] font-[800] text-[#10B981]">
                                                    <FiShield className="w-[12px] md:w-[14px] h-[12px] md:h-[14px] shrink-0" />
                                                    <span>Live</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-[20px] md:px-[32px] pb-[20px] md:pb-[32px]">
                                        <button className="w-full h-[44px] md:h-[48px] border border-[#E2E8F0] rounded-[10px] text-[12px] md:text-[13px] font-[800] text-[#0F172A] group-hover:bg-[#0F172A] group-hover:text-[#FFFFFF] group-hover:border-[#0F172A] transition-all flex items-center justify-center gap-[8px]">
                                            <span className="truncate">Inspect Node Forensics</span>
                                            <FiActivity className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                        </button>
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                    <motion.div variants={item}>
                        <button className="w-full h-full min-h-[350px] md:min-h-[400px] border-2 border-dashed border-[#E2E8F0] rounded-[20px] flex flex-col items-center justify-center gap-[16px] hover:border-[#1D4ED8] hover:bg-[#F8FAFC] transition-all group p-[24px]">
                            <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] bg-[#F1F5F9] rounded-full flex items-center justify-center text-[#64748B] group-hover:text-[#1D4ED8] group-hover:scale-110 transition-all">
                                <FiPlus className="w-[24px] md:w-[28px] h-[24px] md:h-[28px]" />
                            </div>
                            <div className="text-center">
                                <p className="text-[15px] md:text-[16px] font-[800] text-[#0F172A]">Acquire New Node</p>
                                <p className="text-[12px] md:text-[13px] text-[#64748B] font-[500] mt-[4px]">Expand global portfolio network</p>
                            </div>
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
