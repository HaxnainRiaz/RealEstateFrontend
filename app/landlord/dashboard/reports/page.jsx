
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
        <div className="space-y-[32px] md:space-y-[40px]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-[20px] md:gap-[24px]">
                <div className="flex items-center gap-[12px] md:gap-[16px]">
                    <Link href="/landlord/dashboard" className="p-[8px] md:p-[10px] bg-[#FFFFFF] border border-[#E2E8F0] rounded-[10px] text-[#64748B] hover:text-[#1D4ED8] hover:border-[#1D4ED8] transition-all group shrink-0">
                        <FiArrowLeft className="w-[16px] md:w-[18px] h-[16px] md:h-[18px] group-hover:-translate-x-[2px] transition-transform" />
                    </Link>
                    <div>
                        <span className="text-[11px] md:text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] block">Document Archive</span>
                        <h1 className="text-[24px] md:text-[32px] font-[700] text-[#111827]">Institutional Reports</h1>
                    </div>
                </div>
                <button className="w-full md:w-auto px-[24px] py-[12px] bg-[#111827] text-white text-[13px] md:text-[14px] font-[600] rounded-[8px] hover:bg-[#1D4ED8] transition-all shadow-lg shadow-black/5">
                    Initiate Custom Audit
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] md:gap-[40px]">
                {/* Reports List */}
                <div className="lg:col-span-8 space-y-[12px] md:space-y-[16px]">
                    {REPORTS.map((report, i) => (
                        <motion.div
                            key={report.title}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[20px] md:p-[32px] hover:border-[#1D4ED8] transition-all group cursor-pointer shadow-sm">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-[20px] md:gap-[24px]">
                                    <div className="flex items-center gap-[16px] md:gap-[24px]">
                                        <div className="w-[44px] md:w-[56px] h-[44px] md:h-[56px] bg-[#F9FAFB] rounded-[10px] md:rounded-[12px] flex items-center justify-center text-[#64748B] group-hover:bg-[#1D4ED8]/5 group-hover:text-[#1D4ED8] transition-colors border border-[#D1D5DB]/20 shrink-0">
                                            <FiFileText className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]" />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="flex flex-wrap items-center gap-[8px] md:gap-[12px] mb-[4px]">
                                                <h3 className="text-[15px] md:text-[17px] font-[700] text-[#111827] group-hover:text-[#1D4ED8] transition-colors truncate">{report.title}</h3>
                                                <span className="px-[6px] md:px-[8px] py-[1px] md:py-[2px] bg-[#F3F4F6] text-[#6B7280] text-[8px] md:text-[9px] font-[800] uppercase rounded-[4px] border border-[#D1D5DB]/20 shrink-0">
                                                    {report.status}
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-x-[12px] md:gap-x-[16px] gap-y-[4px] text-[11px] md:text-[12px] text-[#6B7280] font-[600]">
                                                <span className="uppercase tracking-[0.05em] text-[#1D4ED8] shrink-0">{report.type}</span>
                                                <span className="text-[#D1D5DB] hidden xs:inline">/</span>
                                                <span className="shrink-0">{report.date}</span>
                                                <span className="text-[#D1D5DB] hidden xs:inline">/</span>
                                                <span className="shrink-0">{report.size}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="w-full md:w-auto px-[16px] md:px-[20px] py-[10px] md:py-[12px] bg-[#F9FAFB] border border-[#E2E8F0] text-[#111827] text-[12px] md:text-[13px] font-[700] rounded-[8px] hover:bg-[#1D4ED8] hover:text-white hover:border-[#1D4ED8] transition-all md:opacity-0 group-hover:opacity-100 flex items-center justify-center gap-[8px]">
                                        <FiDownload className="shrink-0" /> Download
                                    </button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Automation Card */}
                <div className="lg:col-span-4 space-y-[24px] md:space-y-[32px]">
                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[40px] relative overflow-hidden shadow-sm">
                        <div className="absolute top-0 right-0 p-[20px] md:p-[24px] opacity-5">
                            <FiSettings className="w-[48px] md:w-[64px] h-[48px] md:h-[64px] text-[#111827]" />
                        </div>
                        <h3 className="text-[16px] md:text-[18px] font-[700] mb-[20px] md:mb-[24px] relative z-10 text-[#111827]">Automated Schedulers</h3>
                        <div className="space-y-[20px] md:space-y-[24px] relative z-10">
                            {[
                                { t: "Monthly Yield Forecast", f: "1st of Month", active: true },
                                { t: "Tax Compliance Snapshot", f: "Quarterly", active: true },
                                { t: "Competitor Price Index", f: "Weekly", active: false }
                            ].map(sched => (
                                <div key={sched.t} className="flex justify-between items-center gap-[16px]">
                                    <div className="space-y-[2px] md:space-y-[4px] min-w-0">
                                        <p className="text-[14px] md:text-[15px] text-[#111827] font-[700] truncate">{sched.t}</p>
                                        <p className="text-[11px] md:text-[12px] text-[#6B7280]">{sched.f}</p>
                                    </div>
                                    <div className={`w-[36px] md:w-[40px] h-[18px] md:h-[20px] rounded-full relative transition-colors shrink-0 ${sched.active ? 'bg-[#1D4ED8]' : 'bg-[#E5E7EB]'}`}>
                                        <div className={`absolute top-[3px] md:top-[4px] w-[12px] h-[12px] bg-white rounded-full transition-all ${sched.active ? 'left-[21px] md:left-[24px]' : 'left-[3px] md:left-[4px]'}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-[32px] md:mt-[40px] py-[12px] md:py-[14px] bg-[#F9FAFB] border border-[#D1D5DB] rounded-[8px] text-[12px] md:text-[13px] font-[700] text-[#111827] hover:bg-[#F3F4F6] transition-all relative z-10">
                            Configure Schedulers
                        </button>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[40px] text-center shadow-sm">
                        <div className="space-y-[12px] md:space-y-[16px]">
                            <div className="w-[48px] md:w-[56px] h-[48px] md:h-[56px] bg-[#EFF6FF] text-[#1D4ED8] rounded-full flex items-center justify-center mx-auto">
                                <FiActivity className="w-[20px] md:w-[24px] h-[20px] md:h-[24px]" />
                            </div>
                            <h4 className="text-[15px] md:text-[16px] font-[700] text-[#111827]">Request Physical Audit</h4>
                            <p className="text-[12px] md:text-[13px] text-[#6B7280] leading-[1.6]">
                                Deploy a physical forensic team to any asset node for in-person structural validation.
                            </p>
                            <button className="text-[13px] md:text-[14px] font-[700] text-[#1D4ED8] hover:underline block w-full">
                                Initialize Request →
                            </button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

