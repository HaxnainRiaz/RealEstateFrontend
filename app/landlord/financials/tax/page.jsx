
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';

export default function LandlordTaxPage() {
    return (
        <div className="space-y-[40px]">
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Compliance Protocol</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Tax Management</h1>
                <p className="text-[16px] text-[#6B7280]">Automated tax documentation and regulatory compliance tracking.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
                {[
                    { label: "YTD Tax Liability", val: "$142,800", sub: "Estimated" },
                    { label: "Deductible Expenses", val: "$98,400", sub: "Verified" },
                    { label: "Net Tax Position", val: "$44,400", sub: "After deductions" },
                    { label: "Compliance Status", val: "100%", sub: "All filings current" }
                ].map((stat, i) => (
                    <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px]">
                            <p className="text-[10px] uppercase font-[700] text-[#6B7280] tracking-[0.1em] mb-[8px]">{stat.label}</p>
                            <h3 className="text-[24px] font-[700] text-[#111827]">{stat.val}</h3>
                            <p className="text-[12px] text-[#6B7280] mt-[4px]">{stat.sub}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px]">
                <div className="lg:col-span-8 space-y-[32px]">
                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px]">
                        <h3 className="text-[20px] font-[700] text-[#111827] mb-[32px]">Tax Documents & Filings</h3>
                        <div className="space-y-[16px]">
                            {[
                                { doc: '2023 Annual Tax Return (Form 1040)', status: 'Filed', date: 'Apr 15, 2023', size: '2.4 MB' },
                                { doc: 'Q3 2023 Estimated Tax Payment', status: 'Paid', date: 'Sep 15, 2023', size: '124 KB' },
                                { doc: 'Property Tax Assessment - Manhattan', status: 'Current', date: 'Jan 01, 2023', size: '890 KB' },
                                { doc: '1099-MISC Forms (Contractors)', status: 'Generated', date: 'Jan 31, 2023', size: '456 KB' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                    className="flex items-center justify-between p-[24px] bg-[#F9FAFB] rounded-[16px] border border-[#D1D5DB]/20 hover:border-[#1D4ED8] transition-all group"
                                >
                                    <div className="flex items-center gap-[20px]">
                                        <div className="w-[48px] h-[48px] bg-[#1D4ED8]/10 rounded-[12px] flex items-center justify-center text-[#1D4ED8]">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="text-[16px] font-[700] text-[#111827] mb-[4px]">{item.doc}</h4>
                                            <p className="text-[13px] text-[#6B7280]">{item.date} • {item.size}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-[16px]">
                                        <span className="px-[10px] py-[4px] bg-[#10B981]/10 text-[#10B981] text-[10px] font-[800] uppercase rounded-[4px]">
                                            {item.status}
                                        </span>
                                        <button className="text-[13px] font-[700] text-[#1D4ED8] hover:underline">Download</button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px]">
                        <h3 className="text-[20px] font-[700] text-[#111827] mb-[32px]">Deductible Expense Breakdown</h3>
                        <div className="space-y-[20px]">
                            {[
                                { category: 'Mortgage Interest', amount: 38400, percentage: 39 },
                                { category: 'Depreciation', amount: 24600, percentage: 25 },
                                { category: 'Repairs & Maintenance', amount: 18200, percentage: 18 },
                                { category: 'Property Management Fees', amount: 10800, percentage: 11 },
                                { category: 'Insurance Premiums', amount: 6400, percentage: 7 }
                            ].map((item, i) => (
                                <div key={i} className="space-y-[8px]">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[14px] font-[600] text-[#111827]">{item.category}</span>
                                        <div className="text-right">
                                            <span className="text-[16px] font-[700] text-[#111827]">${item.amount.toLocaleString()}</span>
                                            <span className="text-[13px] text-[#6B7280] ml-[8px]">({item.percentage}%)</span>
                                        </div>
                                    </div>
                                    <div className="h-[6px] bg-[#F3F4F6] rounded-full overflow-hidden">
                                        <div className="h-full bg-[#1D4ED8]" style={{ width: `${item.percentage}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                <div className="lg:col-span-4 space-y-[32px]">
                    <Card className="bg-[#111827] border-none p-[40px] text-white shadow-xl">
                        <h3 className="text-[18px] font-[700] mb-[24px]">Upcoming Deadlines</h3>
                        <div className="space-y-[20px]">
                            {[
                                { event: 'Q4 Estimated Tax', date: 'Jan 15, 2024', days: 42 },
                                { event: 'Property Tax - Brooklyn', date: 'Feb 01, 2024', days: 59 },
                                { event: 'Annual Filing Deadline', date: 'Apr 15, 2024', days: 133 }
                            ].map((item, i) => (
                                <div key={i} className="p-[20px] bg-white/5 rounded-[12px] border border-white/10 space-y-[8px]">
                                    <div className="flex justify-between items-start">
                                        <h4 className="text-[14px] font-[700]">{item.event}</h4>
                                        <span className="px-[8px] py-[2px] bg-[#1D4ED8] text-white text-[10px] font-[800] uppercase rounded-[4px]">
                                            {item.days}d
                                        </span>
                                    </div>
                                    <p className="text-[12px] text-white/50">{item.date}</p>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-[32px] py-[14px] bg-white/10 border border-white/20 rounded-[8px] text-[13px] font-[700] hover:bg-white/20 transition-all">
                            Set Reminders
                        </button>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[40px] text-center space-y-[24px]">
                        <div className="w-[64px] h-[64px] bg-[#10B981]/10 rounded-full flex items-center justify-center mx-auto text-[#10B981]">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        </div>
                        <div>
                            <h4 className="text-[18px] font-[700] text-[#111827] mb-[8px]">CPA Integration</h4>
                            <p className="text-[14px] text-[#6B7280] leading-[1.6]">
                                Your tax professional has secure access to all financial records and automated reports.
                            </p>
                        </div>
                        <button className="w-full py-[12px] bg-[#111827] text-white font-[700] rounded-[8px] hover:bg-[#1D4ED8] transition-all text-[13px]">
                            Manage Access
                        </button>
                    </Card>
                </div>
            </div>
        </div>
    );
}
