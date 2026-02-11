
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import Link from 'next/link';
import { FiArrowLeft, FiFileText, FiDownload, FiSettings, FiActivity } from 'react-icons/fi';

const REPORTS = [
    { title: "Q3 Cumulative Yield Audit", date: "Oct 24, 2023", size: "4.2 MB", type: "PDF FORENSIC", status: "Verified" },
    { title: "Neighborhood Price Recalibration", date: "Oct 18, 2023", size: "1.8 MB", type: "MARKEt pulse", status: "Analysis" },
    { title: "Asset Integrity Multi-Node Report", date: "Oct 12, 2023", size: "8.4 MB", type: "STRUCTURE AUDIT", status: "Verified" },
    { title: "Tax Compliance Ledger 2023", date: "Sep 30, 2023", size: "12.1 MB", type: "FINANCIAL NODE", status: "Archived" }
];

export default function LandlordReportsPage() {
    return (
        <div className="space-y-[40px]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
                <div className="flex items-center gap-[16px]">
                    <Link href="/landlord/dashboard" className="p-[10px] bg-[#FFFFFF] border border-[#E2E8F0] rounded-[10px] text-[#64748B] hover:text-[#1D4ED8] hover:border-[#1D4ED8] transition-all group">
                        <FiArrowLeft className="w-[18px] h-[18px] group-hover:-translate-x-[2px] transition-transform" />
                    </Link>
                    <div>
                        <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] block">Document Archive</span>
                        <h1 className="text-[32px] font-[700] text-[#111827]">Institutional Reports</h1>
                    </div>
                </div>
                <button className="px-[24px] py-[12px] bg-[#111827] text-white text-[14px] font-[600] rounded-[8px] hover:bg-[#1D4ED8] transition-all shadow-lg shadow-black/5">
                    Initiate Custom Audit
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px]">
                {/* Reports List */}
                <div className="lg:col-span-8 space-y-[16px]">
                    {REPORTS.map((report, i) => (
                        <motion.div
                            key={report.title}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] hover:border-[#1D4ED8] transition-all group cursor-pointer shadow-sm">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
                                    <div className="flex items-center gap-[24px]">
                                        <div className="w-[56px] h-[56px] bg-[#F9FAFB] rounded-[12px] flex items-center justify-center text-[#64748B] group-hover:bg-[#1D4ED8]/5 group-hover:text-[#1D4ED8] transition-colors border border-[#D1D5DB]/20">
                                            <FiFileText className="w-[24px] h-[24px]" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-[12px] mb-[4px]">
                                                <h3 className="text-[17px] font-[700] text-[#111827] group-hover:text-[#1D4ED8] transition-colors">{report.title}</h3>
                                                <span className="px-[8px] py-[2px] bg-[#F3F4F6] text-[#6B7280] text-[9px] font-[800] uppercase rounded-[4px] border border-[#D1D5DB]/20">
                                                    {report.status}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-[16px] text-[12px] text-[#6B7280] font-[600]">
                                                <span className="uppercase tracking-[0.05em] text-[#1D4ED8]">{report.type}</span>
                                                <span className="text-[#D1D5DB]">/</span>
                                                <span>{report.date}</span>
                                                <span className="text-[#D1D5DB]">/</span>
                                                <span>{report.size}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="px-[20px] py-[12px] bg-[#F9FAFB] border border-[#E2E8F0] text-[#111827] text-[13px] font-[700] rounded-[8px] hover:bg-[#1D4ED8] hover:text-white hover:border-[#1D4ED8] transition-all opacity-0 group-hover:opacity-100 flex items-center gap-[8px]">
                                        <FiDownload /> Download
                                    </button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Automation Card */}
                <div className="lg:col-span-4 space-y-[32px]">
                    <Card className="bg-[#111827] border-none p-[40px] text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-[24px] opacity-10">
                            <FiSettings className="w-[64px] h-[64px]" />
                        </div>
                        <h3 className="text-[18px] font-[700] mb-[24px] relative z-10">Automated Schedulers</h3>
                        <div className="space-y-[24px] relative z-10">
                            {[
                                { t: "Monthly Yield Forecast", f: "1st of Month", active: true },
                                { t: "Tax Compliance Snapshot", f: "Quarterly", active: true },
                                { t: "Competitor Price Index", f: "Weekly", active: false }
                            ].map(sched => (
                                <div key={sched.t} className="flex justify-between items-center gap-[16px]">
                                    <div className="space-y-[4px]">
                                        <p className="text-[15px] text-black/70 font-[700]">{sched.t}</p>
                                        <p className="text-[12px] text-black/50">{sched.f}</p>
                                    </div>
                                    <div className={`w-[40px] h-[20px] rounded-full relative transition-colors ${sched.active ? 'bg-[#1D4ED8]' : 'bg-white/10'}`}>
                                        <div className={`absolute top-[4px] w-[12px] h-[12px] bg-white rounded-full transition-all ${sched.active ? 'left-[24px]' : 'left-[4px]'}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-[40px] py-[14px] bg-white/10 border border-white/20 rounded-[8px] text-[13px] font-[700] hover:bg-white/20 transition-all relative z-10">
                            Configure Schedulers
                        </button>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[40px] text-center shadow-sm">
                        <div className="space-y-[16px]">
                            <div className="w-[56px] h-[56px] bg-[#EFF6FF] text-[#1D4ED8] rounded-full flex items-center justify-center mx-auto">
                                <FiActivity className="w-[24px] h-[24px]" />
                            </div>
                            <h4 className="text-[16px] font-[700] text-[#111827]">Request Physical Audit</h4>
                            <p className="text-[13px] text-[#6B7280] leading-[1.6]">
                                Deploy a physical forensic team to any asset node for in-person structural validation.
                            </p>
                            <button className="text-[14px] font-[700] text-[#1D4ED8] hover:underline block w-full">
                                Initialize Request →
                            </button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

