
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';

const VENDORS = [
    { id: 'VND-001', name: 'Precision Climate Nodes', category: 'HVAC Systems', rating: 4.9, jobs: 42, response: '2.4h', verified: true },
    { id: 'VND-002', name: 'Global Structures Ltd', category: 'Structural Engineering', rating: 4.8, jobs: 28, response: '4.1h', verified: true },
    { id: 'VND-003', name: 'Safety Protocol Group', category: 'Security & Fire', rating: 5.0, jobs: 18, response: '1.8h', verified: true },
    { id: 'VND-004', name: 'Urban Plumbing Collective', category: 'Water Systems', rating: 4.7, jobs: 35, response: '3.2h', verified: false }
];

export default function LandlordMaintenanceVendorsPage() {
    return (
        <div className="space-y-[40px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px]">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Resource Network</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Vendor Registry</h1>
                    <p className="text-[16px] text-[#6B7280]">Institutional-grade service providers for structural maintenance protocols.</p>
                </div>
                <button className="px-[24px] py-[12px] bg-[#111827] text-white rounded-[8px] text-[14px] font-[700] hover:bg-[#1D4ED8] transition-all">Onboard New Vendor</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
                {[
                    { label: "Active Vendors", val: "24 Entities" },
                    { label: "Avg Response Time", val: "2.8h" },
                    { label: "Platform Rating", val: "4.85/5" },
                    { label: "YTD Deployments", val: "142" }
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
                <div className="flex justify-between items-center">
                    <h2 className="text-[20px] font-[700] text-[#111827]">Verified Vendor Nodes</h2>
                    <div className="flex gap-[12px]">
                        <button className="px-[16px] py-[8px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[6px] text-[12px] font-[700] text-[#6B7280]">Filter by Category</button>
                        <button className="px-[16px] py-[8px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[6px] text-[12px] font-[700] text-[#6B7280]">Sort by Rating</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
                    {VENDORS.map((vendor, i) => (
                        <motion.div
                            key={vendor.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] hover:border-[#1D4ED8] transition-all group relative">
                                {vendor.verified && (
                                    <div className="absolute top-[20px] right-[20px]">
                                        <span className="px-[10px] py-[4px] bg-[#10B981]/10 text-[#10B981] text-[9px] font-[800] uppercase rounded-[4px] flex items-center gap-[6px]">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            Verified
                                        </span>
                                    </div>
                                )}
                                <div className="space-y-[24px]">
                                    <div className="flex items-center gap-[16px]">
                                        <div className="w-[56px] h-[56px] bg-[#F9FAFB] rounded-[12px] flex items-center justify-center text-[#1D4ED8] border border-[#D1D5DB]/20 font-[700]">
                                            {vendor.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="text-[18px] font-[700] text-[#111827]">{vendor.name}</h3>
                                            <p className="text-[13px] text-[#6B7280] font-[600]">{vendor.category}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-[16px] pt-[16px] border-t border-[#D1D5DB]/20">
                                        <div className="space-y-[4px]">
                                            <p className="text-[10px] text-[#6B7280] uppercase font-[700]">Platform Score</p>
                                            <div className="flex items-center gap-[6px]">
                                                <span className="text-[16px] font-[700] text-[#111827]">{vendor.rating}</span>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="#F59E0B" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                            </div>
                                        </div>
                                        <div className="space-y-[4px]">
                                            <p className="text-[10px] text-[#6B7280] uppercase font-[700]">Total Jobs</p>
                                            <p className="text-[16px] font-[700] text-[#111827]">{vendor.jobs}</p>
                                        </div>
                                        <div className="space-y-[4px]">
                                            <p className="text-[10px] text-[#6B7280] uppercase font-[700]">Avg Response</p>
                                            <p className="text-[16px] font-[700] text-[#10B981]">{vendor.response}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-[12px]">
                                        <button className="flex-grow py-[12px] bg-[#111827] text-white text-[13px] font-[700] rounded-[8px] hover:bg-[#1D4ED8] transition-all">Deploy Resource</button>
                                        <button className="px-[20px] py-[12px] bg-[#F9FAFB] border border-[#D1D5DB] text-[#111827] text-[13px] font-[700] rounded-[8px] hover:bg-[#FFFFFF] transition-all">View Profile</button>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            <Card className="bg-[#111827] border-none p-[64px] text-center text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-[#1D4ED8]/20 rounded-full blur-[100px]" />
                <div className="relative z-10 space-y-[24px]">
                    <h3 className="text-[24px] font-[700]">Vendor Performance Analytics</h3>
                    <p className="text-[16px] text-white/50 max-w-[600px] mx-auto leading-[1.8]">
                        Our AI continuously monitors vendor response times, quality scores, and cost efficiency to ensure your portfolio receives institutional-grade service.
                    </p>
                    <div className="flex justify-center gap-[16px]">
                        <button className="px-[32px] py-[16px] bg-[#1D4ED8] text-white font-[700] rounded-[12px] shadow-2xl hover:bg-[#2563EB] transition-all">View Analytics Dashboard</button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
