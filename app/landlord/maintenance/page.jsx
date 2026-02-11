
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import { MOCK_ASSETS } from '@/lib/mockData';

const MOCK_ISSUES = [
    { id: 'M-1', assetId: '1', title: 'HVAC Node Latency', priority: 'High', date: '2023-10-24', status: 'Technician Dispatched' },
    { id: 'M-2', assetId: '2', title: 'Acoustic Seal Degradation', priority: 'Medium', date: '2023-10-20', status: 'Awaiting Materials' }
];

export default function LandlordMaintenancePage() {
    return (
        <div className="space-y-[40px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px]">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Asset Integrity</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Maintenance Protocol</h1>
                    <p className="text-[16px] text-[#6B7280]">Real-time monitoring and resolution of structural failures.</p>
                </div>
                <div className="flex gap-[12px]">
                    <button className="px-[24px] py-[12px] bg-[#FFFFFF] border border-[#D1D5DB] text-[14px] font-[600] rounded-[8px] hover:bg-[#F9FAFB] transition-all">
                        Audit Reports
                    </button>
                    <button className="px-[24px] py-[12px] bg-[#111827] text-[#FFFFFF] text-[14px] font-[600] rounded-[8px] hover:bg-[#1D4ED8] transition-all">
                        Initiate Repair Node
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[40px]">
                {/* Live Issues Queue */}
                <div className="lg:col-span-8 space-y-[24px]">
                    <h2 className="text-[20px] font-[700] text-[#111827]">Active Incident Queue</h2>
                    <div className="space-y-[16px]">
                        {MOCK_ISSUES.map((issue) => {
                            const asset = MOCK_ASSETS.find(a => a.id === issue.assetId);
                            return (
                                <Card key={issue.id} className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] hover:border-[#F59E0B] transition-colors relative group">
                                    <div className={`absolute top-0 right-0 w-[4px] h-full ${issue.priority === 'High' ? 'bg-[#EF4444]' : 'bg-[#F59E0B]'}`} />

                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
                                        <div className="flex items-center gap-[24px]">
                                            <div className={`w-[56px] h-[56px] rounded-[12px] flex items-center justify-center border ${issue.priority === 'High' ? 'bg-[#FEF2F2] border-[#EF4444]/20 text-[#EF4444]' : 'bg-[#FFFBEB] border-[#F59E0B]/20 text-[#F59E0B]'}`}>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-[12px] mb-[4px]">
                                                    <h3 className="text-[18px] font-[700] text-[#111827]">{issue.title}</h3>
                                                    <span className={`text-[10px] font-[700] uppercase tracking-[0.05em]`}>ID: {issue.id}</span>
                                                </div>
                                                <p className="text-[14px] text-[#6B7280]">Asset: <span className="font-[600] text-[#111827]">{asset?.title}</span></p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-[32px]">
                                            <div className="text-right">
                                                <p className="text-[10px] text-[#6B7280] uppercase font-[700] mb-[4px]">Status</p>
                                                <p className="text-[14px] font-[700] text-[#111827]">{issue.status}</p>
                                            </div>
                                            <button className="px-[20px] py-[12px] bg-[#111827] text-[#FFFFFF] text-[13px] font-[600] rounded-[6px] hover:bg-[#1D4ED8] transition-all">
                                                Resolve
                                            </button>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                {/* Maintenance Data Visualization */}
                <div className="lg:col-span-4 space-y-[32px]">
                    <h2 className="text-[20px] font-[700] text-[#111827]">Resource Allocation</h2>
                    <Card className="bg-[#111827] border-none p-[40px] text-[#FFFFFF] shadow-xl">
                        <div className="space-y-[32px]">
                            {[
                                { label: "HVAC Systems", val: "42%", color: "bg-[#1D4ED8]" },
                                { label: "Structural Enclosure", val: "28%", color: "bg-[#10B981]" },
                                { label: "Node Infrastructure", val: "18%", color: "bg-[#6B7280]" },
                                { label: "Others", val: "12%", color: "bg-[#F9FAFB]/20" }
                            ].map(stat => (
                                <div key={stat.label} className="space-y-[12px]">
                                    <div className="flex justify-between text-[13px] font-[600] text-[#FFFFFF]/60">
                                        <span>{stat.label}</span>
                                        <span className="text-[#FFFFFF]">{stat.val}</span>
                                    </div>
                                    <div className="h-[4px] bg-[#FFFFFF]/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: stat.val }}
                                            transition={{ duration: 1 }}
                                            className={`h-full ${stat.color}`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px]">
                        <h3 className="text-[18px] font-[700] text-[#111827] mb-[20px]">Network Latency</h3>
                        <div className="space-y-[16px]">
                            {[
                                { label: "Initial Signal", val: "14m" },
                                { label: "Protocol Dispatch", val: "48m" },
                                { label: "Structural Resolution", val: "4.2h" }
                            ].map(item => (
                                <div key={item.label} className="flex justify-between items-center text-[13px]">
                                    <span className="text-[#6B7280] font-[600] uppercase tracking-[0.05em]">{item.label}</span>
                                    <span className="font-[700] text-[#111827]">{item.val}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
