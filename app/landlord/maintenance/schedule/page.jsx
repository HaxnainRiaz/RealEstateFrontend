
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import { MOCK_ASSETS } from '@/lib/mockData';

const SCHEDULED_MAINTENANCE = [
    { id: 'SCH-001', assetId: '1', type: 'Quarterly HVAC Inspection', frequency: 'Every 3 Months', nextDate: 'Nov 15, 2023', vendor: 'Precision Climate Nodes' },
    { id: 'SCH-002', assetId: '3', type: 'Annual Structural Audit', frequency: 'Yearly', nextDate: 'Dec 01, 2023', vendor: 'Global Structures Ltd' },
    { id: 'SCH-003', assetId: '4', type: 'Biannual Fire System Test', frequency: 'Every 6 Months', nextDate: 'Jan 10, 2024', vendor: 'Safety Protocol Group' }
];

export default function LandlordMaintenanceSchedulePage() {
    return (
        <div className="space-y-[40px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px]">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Temporal Automation</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Maintenance Schedule</h1>
                    <p className="text-[16px] text-[#6B7280]">Automated preventive protocols for structural longevity optimization.</p>
                </div>
                <button className="px-[24px] py-[12px] bg-[#111827] text-white rounded-[8px] text-[14px] font-[700] hover:bg-[#1D4ED8] transition-all">Configure New Protocol</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
                {[
                    { label: "Active Schedules", val: "18 Protocols" },
                    { label: "Next Execution", val: "4 Days" },
                    { label: "Automation Rate", val: "94%" }
                ].map((stat, i) => (
                    <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] text-center">
                            <p className="text-[10px] uppercase font-[700] text-[#6B7280] tracking-[0.1em] mb-[8px]">{stat.label}</p>
                            <h3 className="text-[24px] font-[700] text-[#111827]">{stat.val}</h3>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="space-y-[24px]">
                <h2 className="text-[20px] font-[700] text-[#111827]">Scheduled Protocol Ledger</h2>
                <div className="space-y-[16px]">
                    {SCHEDULED_MAINTENANCE.map((sched, i) => {
                        const asset = MOCK_ASSETS.find(a => a.id === sched.assetId);
                        return (
                            <motion.div
                                key={sched.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] hover:shadow-lg transition-all group">
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-[32px]">
                                        <div className="flex items-center gap-[24px]">
                                            <div className="w-[56px] h-[56px] bg-[#1D4ED8]/5 rounded-[16px] flex items-center justify-center text-[#1D4ED8] border border-[#1D4ED8]/20">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                            </div>
                                            <div>
                                                <h3 className="text-[18px] font-[700] text-[#111827] mb-[4px]">{sched.type}</h3>
                                                <p className="text-[14px] text-[#6B7280]">Asset: <span className="font-[600] text-[#111827]">{asset?.title}</span></p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-3 gap-[32px]">
                                            <div className="text-left lg:text-right">
                                                <p className="text-[10px] text-[#6B7280] uppercase font-[700] mb-[4px]">Frequency</p>
                                                <p className="text-[14px] font-[700] text-[#111827]">{sched.frequency}</p>
                                            </div>
                                            <div className="text-left lg:text-right">
                                                <p className="text-[10px] text-[#6B7280] uppercase font-[700] mb-[4px]">Next Execution</p>
                                                <p className="text-[14px] font-[700] text-[#1D4ED8]">{sched.nextDate}</p>
                                            </div>
                                            <div className="text-left lg:text-right">
                                                <p className="text-[10px] text-[#6B7280] uppercase font-[700] mb-[4px]">Vendor Node</p>
                                                <p className="text-[14px] font-[700] text-[#111827]">{sched.vendor}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-[24px] pt-[24px] border-t border-[#D1D5DB]/20 flex gap-[12px]">
                                        <button className="px-[20px] py-[10px] bg-[#F9FAFB] border border-[#D1D5DB] text-[#111827] text-[13px] font-[700] rounded-[8px] hover:bg-[#FFFFFF] transition-all">Edit Protocol</button>
                                        <button className="px-[20px] py-[10px] bg-[#111827] text-white text-[13px] font-[700] rounded-[8px] hover:bg-[#1D4ED8] transition-all">Execute Now</button>
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
                <Card className="bg-[#111827] border-none p-[48px] text-white shadow-xl">
                    <h3 className="text-[20px] font-[700] mb-[24px]">Automation Intelligence</h3>
                    <div className="space-y-[24px]">
                        {[
                            { t: "Predictive Scheduling", d: "AI analyzes usage patterns to optimize maintenance timing and reduce asset downtime." },
                            { t: "Vendor Auto-Dispatch", d: "Approved vendors are automatically notified 48h before scheduled execution." },
                            { t: "Cost Forecasting", d: "Machine learning predicts annual maintenance exposure with 94% accuracy." }
                        ].map(item => (
                            <div key={item.t} className="p-[20px] bg-white/5 rounded-[12px] border border-white/10 space-y-[8px]">
                                <h4 className="text-[16px] font-[700] text-[#1D4ED8]">{item.t}</h4>
                                <p className="text-[14px] text-white/50 leading-[1.6]">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px] flex flex-col justify-center text-center space-y-[24px]">
                    <div className="w-[80px] h-[80px] bg-[#10B981]/10 rounded-full flex items-center justify-center mx-auto text-[#10B981]">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <div>
                        <h3 className="text-[22px] font-[700] text-[#111827]">Zero Missed Protocols</h3>
                        <p className="text-[15px] text-[#6B7280] max-w-[400px] mx-auto leading-[1.6]">
                            Your portfolio has maintained 100% scheduled maintenance compliance for the last 18 months.
                        </p>
                    </div>
                    <div className="flex justify-center gap-[16px]">
                        <button className="px-[24px] py-[14px] bg-[#111827] text-white font-[700] rounded-[8px] hover:bg-[#1D4ED8] transition-all text-[14px]">Download Compliance Certificate</button>
                    </div>
                </Card>
            </div>
        </div>
    );
}
