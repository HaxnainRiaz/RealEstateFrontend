
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';

const REPORTS = [
    { title: "Q3 Cumulative Yield Audit", date: "Oct 24, 2023", size: "4.2 MB", type: "PDF FORENSIC", status: "Verified" },
    { title: "Neighborhood Price Recalibration", date: "Oct 18, 2023", size: "1.8 MB", type: "MARKEt pulse", status: "Analysis" },
    { title: "Asset Integrity Multi-Node Report", date: "Oct 12, 2023", size: "8.4 MB", type: "STRUCTURE AUDIT", status: "Verified" },
    { title: "Tax Compliance Ledger 2023", date: "Sep 30, 2023", size: "12.1 MB", type: "FINANCIAL NODE", status: "Archived" }
];

export default function LandlordReportsPage() {
    return (
        <div className="space-y-[40px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px]">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Document Archive</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Institutional Reports</h1>
                    <p className="text-[16px] text-[#6B7280]">Generated structural audits and financial forensics for your portfolio.</p>
                </div>
                <button className="px-[24px] py-[12px] bg-[#111827] text-white text-[14px] font-[600] rounded-[8px] hover:bg-[#1D4ED8] transition-all">
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
                            <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] hover:border-[#1D4ED8] transition-all group group cursor-pointer">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
                                    <div className="flex items-center gap-[24px]">
                                        <div className="w-[56px] h-[56px] bg-[#F9FAFB] rounded-[12px] flex items-center justify-center text-[#6B7280] group-hover:text-[#1D4ED8] transition-colors border border-[#D1D5DB]/20">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-[12px] mb-[4px]">
                                                <h3 className="text-[17px] font-[700] text-[#111827]">{report.title}</h3>
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
                                    <button className="px-[20px] py-[12px] bg-[#111827] text-white text-[13px] font-[700] rounded-[8px] hover:bg-[#1D4ED8] transition-all opacity-0 group-hover:opacity-100">
                                        Download
                                    </button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Automation Card */}
                <div className="lg:col-span-4 space-y-[32px]">
                    <Card className="bg-[#111827] border-none p-[40px] text-white">
                        <h3 className="text-[18px] font-[700] mb-[24px]">Automated Schedulers</h3>
                        <div className="space-y-[24px]">
                            {[
                                { t: "Monthly Yield Forecast", f: "1st of Month", active: true },
                                { t: "Tax Compliance Snapshot", f: "Quarterly", active: true },
                                { t: "Competitor Price Index", f: "Weekly", active: false }
                            ].map(sched => (
                                <div key={sched.t} className="flex justify-between items-center gap-[16px]">
                                    <div className="space-y-[4px]">
                                        <p className="text-[15px] font-[700]">{sched.t}</p>
                                        <p className="text-[12px] text-white/50">{sched.f}</p>
                                    </div>
                                    <div className={`w-[40px] h-[20px] rounded-full relative transition-colors ${sched.active ? 'bg-[#1D4ED8]' : 'bg-white/10'}`}>
                                        <div className={`absolute top-[4px] w-[12px] h-[12px] bg-white rounded-full transition-all ${sched.active ? 'left-[24px]' : 'left-[4px]'}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-[40px] py-[14px] bg-white/10 border border-white/20 rounded-[8px] text-[13px] font-[700] hover:bg-white/20 transition-all">
                            Configure Schedulers
                        </button>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[40px]">
                        <div className="space-y-[16px] text-center">
                            <h4 className="text-[16px] font-[700] text-[#111827]">Request Physical Audit</h4>
                            <p className="text-[13px] text-[#6B7280] leading-[1.6]">
                                Deploy a physical forensic team to any asset node for in-person structural validation.
                            </p>
                            <button className="text-[14px] font-[700] text-[#1D4ED8] hover:underline">
                                Initialize Request →
                            </button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
