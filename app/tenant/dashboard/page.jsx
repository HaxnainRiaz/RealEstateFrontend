
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/lib/context/AuthContext';
import Card, { CardTitle, CardDescription, CardContent } from '@/components/ui/data/Card';
import { MOCK_ASSETS, MOCK_REQUESTS } from '@/lib/mockData';
import Link from 'next/link';

export default function TenantDashboard() {
    const { user } = useAuth();

    const stats = [
        { label: "Active Signals", val: MOCK_REQUESTS.length, color: "text-[#1D4ED8]", href: "/tenant/applications" },
        { label: "Identity Score", val: "98/100", color: "text-[#10B981]", href: "/tenant/profile" },
        { label: "Market Analytics", val: "High", color: "text-[#6B7280]", href: "/tenant/dashboard/analytics" }
    ];

    return (
        <div className="space-y-[24px] md:space-y-[40px]">
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px]">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Tenant Terminal</span>
                    <h1 className="text-[28px] md:text-[32px] font-[700] text-[#111827]">Welcome back, {user?.email?.split('@')[0] || 'Resident'}</h1>
                    <p className="text-[14px] md:text-[16px] text-[#6B7280]">Your institutional profile is active and verified.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-[12px] md:gap-[16px]">
                    <Link href="/tenant/dashboard/quick-actions" className="w-full sm:w-auto">
                        <button className="w-full px-[24px] py-[12px] bg-[#FFFFFF] border border-[#D1D5DB] text-[#111827] text-[14px] font-[600] rounded-[8px] hover:bg-[#F9FAFB] transition-all">
                            Quick Actions
                        </button>
                    </Link>
                    <Link href="/tenant/listings" className="w-full sm:w-auto">
                        <button className="w-full px-[24px] py-[12px] bg-[#111827] text-[#FFFFFF] text-[14px] font-[600] rounded-[8px] hover:bg-[#1D4ED8] transition-all">
                            Browse Catalog
                        </button>
                    </Link>
                </div>
            </div>

            {/* Stats HUD */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[16px] md:gap-[24px]">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="cursor-pointer"
                    >
                        <Link href={stat.href}>
                            <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[32px] hover:border-[#1D4ED8] transition-all group">
                                <p className="text-[10px] md:text-[12px] font-[700] text-[#6B7280] uppercase tracking-[0.05em] mb-[8px] md:mb-[12px] group-hover:text-[#1D4ED8] transition-colors">{stat.label}</p>
                                <div className="flex justify-between items-end">
                                    <p className={`text-[24px] md:text-[32px] font-[700] ${stat.color}`}>{stat.val}</p>
                                    <span className="text-[#D1D5DB] group-hover:text-[#1D4ED8] transition-colors">→</span>
                                </div>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] md:gap-[40px]">
                {/* Active Nodes */}
                <div className="lg:col-span-8 space-y-[20px] md:space-y-[24px]">
                    <div className="flex justify-between items-center mb-[8px]">
                        <h2 className="text-[18px] md:text-[20px] font-[700] text-[#111827]">Current Active Signals</h2>
                        <Link href="/tenant/applications" className="text-[14px] font-[600] text-[#1D4ED8] hover:underline">View Ledger</Link>
                    </div>

                    <div className="space-y-[12px] md:space-y-[16px]">
                        {MOCK_REQUESTS.map((req) => {
                            const asset = MOCK_ASSETS.find(a => a.id === req.assetId);
                            return (
                                <Link key={req.id} href={`/tenant/applications/${req.id}`}>
                                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[16px] md:p-[24px] hover:border-[#1D4ED8] transition-colors cursor-pointer group">
                                        <div className="flex items-center justify-between gap-[12px]">
                                            <div className="flex items-center gap-[12px] md:gap-[20px]">
                                                <div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] bg-[#F9FAFB] rounded-[8px] flex items-center justify-center text-[#1D4ED8] group-hover:bg-[#1D4ED8] group-hover:text-[#FFFFFF] transition-all shrink-0">
                                                    <svg className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
                                                </div>
                                                <div className="min-w-0">
                                                    <h4 className="text-[14px] md:text-[16px] font-[700] text-[#111827] truncate">{asset?.title}</h4>
                                                    <p className="text-[10px] md:text-[12px] text-[#6B7280] uppercase font-[600] tracking-[0.05em] truncate">{req.type} • ID: {req.id}</p>
                                                </div>
                                            </div>
                                            <div className="text-right shrink-0">
                                                <div className="px-[8px] md:px-[12px] py-[2px] md:py-[4px] bg-[#1D4ED8]/5 text-[#1D4ED8] text-[10px] md:text-[12px] font-[700] rounded-[4px] mb-[2px] md:mb-[4px]">
                                                    {req.status}
                                                </div>
                                                <p className="text-[10px] md:text-[12px] text-[#6B7280]">{req.date}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Tactical Alerts */}
                <div className="lg:col-span-4 space-y-[24px] md:space-y-[32px]">
                    <div className="flex justify-between items-center mb-[8px]">
                        <h2 className="text-[18px] md:text-[20px] font-[700] text-[#111827]">System Alerts</h2>
                        <Link href="/tenant/dashboard/alerts" className="text-[14px] font-[600] text-[#1D4ED8] hover:underline">History</Link>
                    </div>
                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[32px] shadow-sm">
                        <div className="space-y-[20px] md:space-y-[24px]">
                            <div>
                                <h4 className="text-[15px] md:text-[16px] font-[700] mb-[8px] text-[#1D4ED8]">Credential Audit</h4>
                                <p className="text-[13px] md:text-[14px] text-[#6B7280] leading-[1.6]">Your institutional trust score has been successfully recalibrated based on primary income forensics.</p>
                            </div>
                            <div className="pt-[20px] md:pt-[24px] border-t border-[#E2E8F0]">
                                <h4 className="text-[15px] md:text-[16px] font-[700] mb-[8px] text-[#111827]">Upcoming Assessment</h4>
                                <p className="text-[13px] md:text-[14px] text-[#6B7280]">Settlement protocol initialized for Nov 01, 2023 cycle.</p>
                            </div>
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[32px] shadow-sm">
                        <h4 className="text-[15px] md:text-[16px] font-[700] text-[#111827] mb-[20px] md:mb-[24px]">Portal Navigation</h4>
                        <div className="space-y-[8px] md:space-y-[12px]">
                            {[
                                { l: 'Support Hub', h: '/tenant/support' },
                                { l: 'Document Repository', h: '/tenant/documents' },
                                { l: 'Identity Security', h: '/tenant/profile/security' },
                                { l: 'Search Recommendations', h: '/tenant/dashboard/recommendations' }
                            ].map(item => (
                                <Link key={item.l} href={item.h}>
                                    <button className="w-full text-left text-[14px] font-[600] text-[#6B7280] hover:text-[#1D4ED8] transition-colors flex justify-between items-center group py-[8px]">
                                        <span className="truncate">{item.l}</span>
                                        <span className="opacity-0 lg:group-hover:opacity-100 transition-all translate-x-[-10px] lg:group-hover:translate-x-0">→</span>
                                    </button>
                                </Link>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
