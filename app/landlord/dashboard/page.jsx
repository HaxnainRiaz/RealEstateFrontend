
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/lib/context/AuthContext';
import Card, { CardTitle, CardDescription, CardContent } from '@/components/ui/data/Card';
import { MOCK_ASSETS } from '@/lib/mockData';
import Link from 'next/link';
import PrimaryButton from '@/components/ui/button/PrimaryButton';

export default function LandlordDashboard() {
    const { user } = useAuth();

    const stats = [
        { label: "Portfolio Value", val: "$12.4M", color: "text-[#111827]" },
        { label: "Occupancy Rate", val: "94.2%", color: "text-[#10B981]" },
        { label: "Monthly Revenue", val: "$48,250", color: "text-[#1D4ED8]" },
        { label: "Active Nodes", val: MOCK_ASSETS.length, color: "text-[#111827]" }
    ];

    return (
        <div className="space-y-[40px]">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px]">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Asset Terminal</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Operational Overview</h1>
                    <p className="text-[16px] text-[#6B7280]">Real-time forensics for {user?.email?.split('@')[0] || 'Institutional Landlord'}.</p>

                    {/* Quick Navigation */}
                    <div className="flex gap-[16px] mt-[16px]">
                        {[
                            { label: 'Analytics', href: '/landlord/dashboard/analytics', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg> },
                            { label: 'Market Insights', href: '/landlord/dashboard/market-insights', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /></svg> },
                            { label: 'Performance', href: '/landlord/dashboard/performance', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg> },
                            { label: 'Reports', href: '/landlord/dashboard/reports', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg> }
                        ].map(link => (
                            <Link key={link.label} href={link.href} className="flex items-center gap-[8px] px-[12px] py-[8px] bg-[#F9FAFB] border border-[#D1D5DB]/30 rounded-[8px] hover:bg-[#1D4ED8] hover:text-white hover:border-[#1D4ED8] transition-all group">
                                <span className="text-[#6B7280] group-hover:text-white transition-colors">{link.icon}</span>
                                <span className="text-[13px] font-[600] text-[#111827] group-hover:text-white transition-colors">{link.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
                <Link href="/landlord/listings/create">
                    <PrimaryButton className="h-[48px] px-[24px]">Deploy New Asset</PrimaryButton>
                </Link>
            </div>

            {/* Stats HUD */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px]">
                            <p className="text-[12px] font-[700] text-[#6B7280] uppercase tracking-[0.05em] mb-[12px]">{stat.label}</p>
                            <p className={`text-[28px] font-[700] ${stat.color}`}>{stat.val}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px]">
                {/* Performance Visualization Placeholder */}
                <div className="lg:col-span-8 space-y-[24px]">
                    <h2 className="text-[20px] font-[700] text-[#111827]">Revenue Pipeline</h2>
                    <Card className="aspect-video bg-[#FFFFFF] border-[#D1D5DB]/30 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#1D4ED8]/5 to-transparent" />
                        <span className="text-[14px] font-[600] text-[#6B7280] z-10">Institutional Yield Graph Node</span>
                    </Card>
                </div>

                {/* Priority Alerts */}
                <div className="lg:col-span-4 space-y-[24px]">
                    <h2 className="text-[20px] font-[700] text-[#111827]">Critical Signals</h2>
                    <div className="space-y-[16px]">
                        <Card className="bg-[#FEF2F2] border-[#EF4444]/20 p-[24px]">
                            <div className="flex gap-[16px]">
                                <div className="w-[8px] h-[8px] rounded-full bg-[#EF4444] mt-[6px]" />
                                <div>
                                    <h4 className="text-[15px] font-[700] text-[#111827]">Rent Delinquency</h4>
                                    <p className="text-[13px] text-[#6B7280] mt-[4px]">Unit 4B (Manhattan) is 3 days past settlement protocol.</p>
                                </div>
                            </div>
                        </Card>

                        <Card className="bg-[#F9FAFB] border-[#D1D5DB]/50 p-[24px]">
                            <div className="flex gap-[16px]">
                                <div className="w-[8px] h-[8px] rounded-full bg-[#1D4ED8] mt-[6px]" />
                                <div>
                                    <h4 className="text-[15px] font-[700] text-[#111827]">New Application</h4>
                                    <p className="text-[13px] text-[#6B7280] mt-[4px]">High-yield tenant candidate signaled for Industrial Quarter.</p>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <Card className="bg-[#111827] border-none p-[32px] text-[#FFFFFF]">
                        <h4 className="text-[16px] font-[700] mb-[16px]">System Integrity</h4>
                        <div className="space-y-[16px]">
                            <div className="flex justify-between text-[13px]">
                                <span className="text-[#FFFFFF]/60">Node Uptime</span>
                                <span className="text-[#10B981]">99.98%</span>
                            </div>
                            <div className="flex justify-between text-[13px]">
                                <span className="text-[#FFFFFF]/60">Data Latency</span>
                                <span>14ms</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
