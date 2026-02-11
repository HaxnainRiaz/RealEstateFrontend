
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import { MOCK_ASSETS } from '@/lib/mockData';

const MAINTENANCE_REQUESTS = [
    { id: 'MAINT-001', assetId: '1', type: 'HVAC Recalibration', priority: 'High', date: 'Oct 24, 2023', status: 'Pending Review' },
    { id: 'MAINT-002', assetId: '3', type: 'Structural Integrity Audit', priority: 'Medium', date: 'Oct 22, 2023', status: 'Technician Assigned' },
    { id: 'MAINT-003', assetId: '4', type: 'Lighting Logic Optimization', priority: 'Low', date: 'Oct 18, 2023', status: 'Awaiting Parts' }
];

export default function LandlordMaintenanceRequestsPage() {
    return (
        <div className="space-y-[40px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px]">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Incident Signals</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Active Repair Nodes</h1>
                    <p className="text-[16px] text-[#6B7280]">Inbound maintenance signals requiring institutional resource allocation.</p>
                </div>
                <button className="px-[24px] py-[12px] bg-[#111827] text-white rounded-[8px] text-[14px] font-[700] hover:bg-[#1D4ED8] transition-all">Initialize Manual Signal</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
                {[
                    { label: "Active Nodes", val: "14 Signals" },
                    { label: "Critical Latency", val: "4.2h" },
                    { label: "Vendor Response", val: "92%" },
                    { label: "YTD Exposure", val: "$12,400" }
                ].map((stat, i) => (
                    <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] text-center">
                            <p className="text-[10px] uppercase font-[700] text-[#6B7280] tracking-[0.1em] mb-[8px]">{stat.label}</p>
                            <h3 className="text-[24px] font-[700] text-[#111827]">{stat.val}</h3>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="space-y-[16px]">
                {MAINTENANCE_REQUESTS.map((req, i) => {
                    const asset = MOCK_ASSETS.find(a => a.id === req.assetId);
                    return (
                        <motion.div
                            key={req.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className={`bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] hover:border-[#1D4ED8] transition-all group cursor-pointer ${req.priority === 'High' ? 'border-r-[6px] border-r-[#EF4444]' : ''}`}>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-[32px]">
                                    <div className="flex items-center gap-[24px]">
                                        <div className={`w-[56px] h-[56px] rounded-[16px] flex items-center justify-center border ${req.priority === 'High' ? 'bg-[#EF4444]/5 border-[#EF4444]/20 text-[#EF4444]' : 'bg-[#D1D5DB]/5 border-[#D1D5DB]/20 text-[#6B7280]'}`}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-[12px] mb-[4px]">
                                                <h3 className="text-[18px] font-[700] text-[#111827]">{req.type}</h3>
                                                <span className={`px-[8px] py-[2px] rounded-[4px] text-[9px] font-[800] uppercase ${req.priority === 'High' ? 'bg-[#EF4444]/10 text-[#EF4444]' : 'bg-[#F3F4F6] text-[#6B7280]'}`}>{req.priority}</span>
                                            </div>
                                            <p className="text-[14px] text-[#6B7280]">Targeting Node: <span className="font-[600] text-[#111827]">{asset?.title}</span></p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-[40px]">
                                        <div className="text-right">
                                            <p className="text-[10px] text-[#6B7280] uppercase font-[700] mb-[4px]">Assignment Status</p>
                                            <p className="text-[14px] font-[700] text-[#111827]">{req.status}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] text-[#6B7280] uppercase font-[700] mb-[4px]">Signal Age</p>
                                            <p className="text-[14px] font-[700] text-[#111827]">{req.date}</p>
                                        </div>
                                        <button className="px-[20px] py-[12px] bg-[#111827] text-white text-[13px] font-[700] rounded-[8px] hover:bg-[#1D4ED8] transition-all">Deploy Resource</button>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>

            <Card className="bg-[#111827] border-none p-[48px] text-white shadow-xl flex flex-col items-center text-center space-y-[24px]">
                <div className="w-[80px] h-[80px] bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-[#1D4ED8]">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <div className="space-y-[12px]">
                    <h3 className="text-[22px] font-[700]">Preventive Maintenance Engine</h3>
                    <p className="text-white/50 text-[15px] max-w-[500px] leading-[1.6]">
                        Based on structural age forensics, we recommend a preemptive audit of the Manhattan cluster water nodes in the next 12 cycles.
                    </p>
                </div>
                <button className="px-[32px] py-[16px] bg-[#1D4ED8] text-white font-[700] rounded-[12px] hover:bg-[#2563EB] transition-all">Approve AI Recommendation</button>
            </Card>
        </div>
    );
}
