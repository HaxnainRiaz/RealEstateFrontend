
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MOCK_REQUESTS, MOCK_ASSETS } from '@/lib/mockData';
import Card from '@/components/ui/data/Card';
import {
    FiUser,
    FiCalendar,
    FiCheckCircle,
    FiXCircle,
    FiArchive,
    FiInfo,
    FiFileText,
    FiTrendingUp
} from 'react-icons/fi';

export default function LandlordRequestsPage() {
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
                        <span className="px-[10px] py-[4px] bg-[#1D4ED8] text-[#FFFFFF] text-[10px] font-[800] uppercase tracking-[0.15em] rounded-[6px]">Tenant Screenings</span>
                    </div>
                    <h1 className="text-[28px] md:text-[36px] font-[800] text-[#0F172A] tracking-tight">Rental Requests</h1>
                    <p className="text-[14px] md:text-[16px] text-[#64748B] mt-[4px]">Manage credentialed applications for your asset portfolio.</p>
                </div>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="space-y-[16px] md:space-y-[20px]"
            >
                {MOCK_REQUESTS.map((req) => {
                    const asset = MOCK_ASSETS.find(a => a.id === req.assetId);
                    return (
                        <motion.div key={req.id} variants={item}>
                            <Card className="bg-[#FFFFFF] border-[#E2E8F0] p-[20px] md:p-[32px] hover:border-[#1D4ED8] hover:shadow-lg transition-all relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-[6px] h-full bg-[#1D4ED8] opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-[24px] md:gap-[32px] xl:gap-[40px] min-w-0">
                                    <div className="flex items-center gap-[16px] md:gap-[28px] min-w-0 flex-1">
                                        <div className="w-[48px] h-[48px] md:w-[64px] md:h-[64px] bg-[#F1F5F9] rounded-[16px] flex items-center justify-center text-[#1D4ED8] border border-[#E2E8F0] relative overflow-hidden group-hover:scale-105 transition-transform shrink-0">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#1D4ED8]/10 to-transparent" />
                                            <FiUser className="w-[20px] md:w-[28px] h-[20px] md:h-[28px] relative z-10" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center flex-wrap gap-[8px] md:gap-[12px] mb-[4px] md:mb-[6px]">
                                                <h3 className="text-[16px] md:text-[18px] font-[800] text-[#0F172A] truncate">Candidate Node: T-{req.id.split('-')[1]}</h3>
                                                <div className="flex items-center gap-[4px] md:gap-[6px] px-[8px] md:px-[10px] py-[2px] md:py-[4px] bg-[#F0FDF4] text-[#10B981] text-[9px] md:text-[11px] font-[800] uppercase rounded-[6px] shrink-0">
                                                    <FiTrendingUp className="w-[10px] md:w-[12px] h-[10px] md:h-[12px]" />
                                                    Score 94
                                                </div>
                                            </div>
                                            <p className="text-[13px] md:text-[14px] text-[#64748B] font-[500] truncate">
                                                Applying for: <span className="text-[#0F172A] font-[700] underline decoration-[#1D4ED8]/20">{asset?.title}</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row md:items-center gap-[20px] md:gap-[24px] xl:gap-[32px] border-t xl:border-t-0 pt-[20px] xl:pt-0 xl:shrink-0">
                                        <div className="grid grid-cols-2 md:flex md:items-center gap-[16px] md:gap-[24px] xl:gap-[32px] w-full md:w-auto">
                                            <div className="space-y-[4px] md:space-y-[6px] min-w-0">
                                                <p className="text-[9px] md:text-[10px] text-[#64748B] uppercase font-[800] tracking-[0.1em]">Current Status</p>
                                                <div className="flex items-center gap-[6px] md:gap-[8px]">
                                                    <div className="w-[5px] h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-[#1D4ED8] animate-pulse shrink-0" />
                                                    <p className="text-[13px] md:text-[15px] font-[800] text-[#0F172A] truncate">{req.status}</p>
                                                </div>
                                            </div>
                                            <div className="space-y-[4px] md:space-y-[6px] min-w-0">
                                                <p className="text-[9px] md:text-[10px] text-[#64748B] uppercase font-[800] tracking-[0.1em]">Signal Date</p>
                                                <div className="flex items-center gap-[6px] md:gap-[8px] text-[#0F172A] font-[800]">
                                                    <FiCalendar className="text-[#64748B] w-[12px] md:w-auto shrink-0" />
                                                    <p className="text-[13px] md:text-[15px] truncate">{req.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-[10px] md:gap-[12px] w-full md:w-auto xl:shrink-0">
                                            <button className="flex-1 md:flex-none h-[44px] md:h-[48px] px-[16px] md:px-[20px] bg-[#0F172A] text-[#FFFFFF] text-[12px] md:text-[13px] font-[800] rounded-[10px] hover:bg-[#1D4ED8] shadow-[0_8px_16px_rgba(15,23,42,0.1)] transition-all flex items-center justify-center gap-[6px] md:gap-[8px] active:scale-95 whitespace-nowrap">
                                                <FiFileText className="shrink-0" />
                                                <span className="hidden sm:inline">Audit Credentials</span>
                                                <span className="sm:hidden">Audit</span>
                                            </button>
                                            <button className="flex-1 md:flex-none h-[44px] md:h-[48px] px-[16px] md:px-[20px] bg-[#FFFFFF] border border-[#E2E8F0] text-[#64748B] text-[12px] md:text-[13px] font-[800] rounded-[10px] hover:text-[#0F172A] hover:border-[#0F172A] transition-all flex items-center justify-center gap-[6px] md:gap-[8px] active:scale-95 whitespace-nowrap">
                                                <FiArchive className="shrink-0" />
                                                <span>Archive</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}
