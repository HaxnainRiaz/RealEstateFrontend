
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
        <div className="space-y-[48px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[32px]">
                <div>
                    <div className="flex items-center gap-[12px] mb-[12px]">
                        <span className="px-[10px] py-[4px] bg-[#1D4ED8] text-[#FFFFFF] text-[10px] font-[800] uppercase tracking-[0.15em] rounded-[6px]">Tenant Screenings</span>
                    </div>
                    <h1 className="text-[36px] font-[800] text-[#0F172A] tracking-tight">Rental Requests</h1>
                    <p className="text-[16px] text-[#64748B] mt-[4px]">Manage credentialed applications for your asset portfolio.</p>
                </div>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="space-y-[20px]"
            >
                {MOCK_REQUESTS.map((req) => {
                    const asset = MOCK_ASSETS.find(a => a.id === req.assetId);
                    return (
                        <motion.div key={req.id} variants={item}>
                            <Card className="bg-[#FFFFFF] border-[#E2E8F0] p-[32px] hover:border-[#1D4ED8] hover:shadow-lg transition-all relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-[6px] h-full bg-[#1D4ED8] opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-[40px]">
                                    <div className="flex items-center gap-[28px]">
                                        <div className="w-[64px] h-[64px] bg-[#F1F5F9] rounded-[16px] flex items-center justify-center text-[#1D4ED8] border border-[#E2E8F0] relative overflow-hidden group-hover:scale-105 transition-transform">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#1D4ED8]/10 to-transparent" />
                                            <FiUser className="w-[28px] h-[28px] relative z-10" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-[12px] mb-[6px]">
                                                <h3 className="text-[18px] font-[800] text-[#0F172A]">Candidate Node: T-{req.id.split('-')[1]}</h3>
                                                <div className="flex items-center gap-[6px] px-[10px] py-[4px] bg-[#F0FDF4] text-[#10B981] text-[11px] font-[800] uppercase rounded-[6px]">
                                                    <FiTrendingUp className="w-[12px] h-[12px]" />
                                                    Score 94
                                                </div>
                                            </div>
                                            <p className="text-[14px] text-[#64748B] font-[500]">
                                                Applying for: <span className="text-[#0F172A] font-[700] underline decoration-[#1D4ED8]/20">{asset?.title}</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-[48px] xl:gap-[64px]">
                                        <div className="space-y-[6px]">
                                            <p className="text-[10px] text-[#64748B] uppercase font-[800] tracking-[0.1em]">Current Status</p>
                                            <div className="flex items-center gap-[8px]">
                                                <div className="w-[6px] h-[6px] rounded-full bg-[#1D4ED8] animate-pulse" />
                                                <p className="text-[15px] font-[800] text-[#0F172A]">{req.status}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-[6px]">
                                            <p className="text-[10px] text-[#64748B] uppercase font-[800] tracking-[0.1em]">Signal Date</p>
                                            <div className="flex items-center gap-[8px] text-[#0F172A] font-[800]">
                                                <FiCalendar className="text-[#64748B]" />
                                                <p className="text-[15px]">{req.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-[12px]">
                                            <button className="h-[48px] px-[24px] bg-[#0F172A] text-[#FFFFFF] text-[13px] font-[800] rounded-[10px] hover:bg-[#1D4ED8] shadow-[0_8px_16px_rgba(15,23,42,0.1)] transition-all flex items-center gap-[8px] active:scale-95">
                                                <FiFileText />
                                                Audit Credentials
                                            </button>
                                            <button className="h-[48px] px-[24px] bg-[#FFFFFF] border border-[#E2E8F0] text-[#64748B] text-[13px] font-[800] rounded-[10px] hover:text-[#0F172A] hover:border-[#0F172A] transition-all flex items-center gap-[8px] active:scale-95">
                                                <FiArchive />
                                                Archive
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
