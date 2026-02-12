
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/lib/context/AuthContext';
import Card, { CardTitle, CardDescription, CardContent } from '@/components/ui/data/Card';
import { MOCK_ASSETS, MOCK_ANALYTICS } from '@/lib/mockData';
import Link from 'next/link';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import {
    FiArrowRight,
    FiTrendingUp,
    FiUsers,
    FiDollarSign,
    FiActivity,
    FiPieChart,
    FiBarChart2,
    FiClipboard,
    FiAlertCircle,
    FiCheckCircle,
    FiZap
} from 'react-icons/fi';
import dynamic from 'next/dynamic';

const ResponsiveContainer = dynamic(() => import('recharts').then(mod => mod.ResponsiveContainer), { ssr: false });
const AreaChart = dynamic(() => import('recharts').then(mod => mod.AreaChart), { ssr: false });
const Area = dynamic(() => import('recharts').then(mod => mod.Area), { ssr: false });
const XAxis = dynamic(() => import('recharts').then(mod => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import('recharts').then(mod => mod.YAxis), { ssr: false });
const CartesianGrid = dynamic(() => import('recharts').then(mod => mod.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then(mod => mod.Tooltip), { ssr: false });

export default function LandlordDashboard() {
    const { user } = useAuth();

    const stats = [
        { label: "Portfolio Value", val: "$12.4M", trend: "+12.4%", icon: FiPieChart, color: "text-[#1D4ED8]", bg: "bg-[#1D4ED8]/5" },
        { label: "Occupancy Rate", val: "94.2%", trend: "+0.8%", icon: FiUsers, color: "text-[#10B981]", bg: "bg-[#10B981]/5" },
        { label: "Monthly Revenue", val: "$48,250", trend: "+4.2%", icon: FiDollarSign, color: "text-[#1D4ED8]", bg: "bg-[#1D4ED8]/5" },
        { label: "Active Nodes", val: MOCK_ASSETS.length, trend: "Stable", icon: FiActivity, color: "text-[#0F172A]", bg: "bg-[#F1F5F9]" }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="space-y-[32px] md:space-y-[48px]">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-[24px] md:gap-[32px]">
                <div>
                    <div className="flex flex-wrap items-center gap-[8px] md:gap-[12px] mb-[12px]">
                        <span className="px-[10px] py-[4px] bg-[#1D4ED8] text-[#FFFFFF] text-[10px] font-[800] uppercase tracking-[0.15em] rounded-[6px]">Asset Terminal</span>
                        <div className="w-[4px] h-[4px] rounded-full bg-[#CBD5E1] hidden sm:block" />
                        <span className="text-[11px] md:text-[12px] font-[600] text-[#64748B]">Node: {user?.id || 'APEX-018'}</span>
                    </div>
                    <h1 className="text-[28px] md:text-[36px] font-[800] text-[#0F172A] tracking-tight">Operational Overview</h1>
                    <p className="text-[14px] md:text-[16px] text-[#64748B] mt-[4px]">Real-time forensics for the Tirios Institutional Network.</p>

                    {/* Quick Navigation Nodes */}
                    <div className="flex flex-wrap gap-[8px] md:gap-[12px] mt-[20px] md:mt-[24px]">
                        {[
                            { label: 'Analytics', href: '/landlord/dashboard/analytics', icon: FiBarChart2 },
                            { label: 'Market', href: '/landlord/dashboard/market-insights', icon: FiZap, short: true },
                            { label: 'Performance', href: '/landlord/dashboard/performance', icon: FiTrendingUp },
                            { label: 'Audit Assets', href: '/landlord/dashboard/reports', icon: FiClipboard, short: true }
                        ].map(link => {
                            const Icon = link.icon;
                            return (
                                <Link key={link.label} href={link.href} className="flex items-center gap-[8px] md:gap-[10px] px-[12px] md:px-[14px] py-[8px] md:py-[10px] bg-[#FFFFFF] border border-[#E2E8F0] rounded-[10px] hover:border-[#1D4ED8] hover:shadow-lg transition-all group active:scale-95">
                                    <Icon className="text-[#64748B] group-hover:text-[#1D4ED8] transition-colors w-[14px] md:w-[16px] h-[14px] md:h-[16px]" />
                                    <span className="text-[12px] md:text-[13px] font-[700] text-[#0F172A]">{link.label}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="flex items-center gap-[16px]">
                    <Link href="/landlord/listings/create" className="w-full sm:w-auto">
                        <PrimaryButton className="w-full sm:w-auto h-[52px] px-[28px] flex items-center justify-center gap-[10px] shadow-[0_12px_24px_rgba(29,78,216,0.2)]">
                            <FiZap className="w-[18px] h-[18px]" />
                            Deploy New Asset
                        </PrimaryButton>
                    </Link>
                </div>
            </div>

            {/* Stats HUD */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[24px]"
            >
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div key={stat.label} variants={item}>
                            <Card className="bg-[#FFFFFF] border-[#E2E8F0] p-[24px] md:p-[32px] group hover:border-[#1D4ED8] transition-all relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-[24px] opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all">
                                    <Icon className={`w-[48px] md:w-[64px] h-[48px] md:h-[64px] ${stat.color}`} />
                                </div>
                                <div className="flex items-center gap-[12px] mb-[16px]">
                                    <div className={`p-[10px] rounded-[10px] ${stat.bg}`}>
                                        <Icon className={`w-[18px] md:w-[20px] h-[18px] md:h-[20px] ${stat.color}`} />
                                    </div>
                                    <p className="text-[10px] md:text-[11px] font-[800] text-[#64748B] uppercase tracking-[0.1em]">{stat.label}</p>
                                </div>
                                <div className="flex items-end justify-between">
                                    <p className={`text-[24px] md:text-[32px] font-[800] text-[#0F172A]`}>{stat.val}</p>
                                    <div className="flex items-center gap-[4px] text-[11px] md:text-[12px] font-[700] text-[#10B981]">
                                        <FiTrendingUp />
                                        <span>{stat.trend}</span>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    );
                })}
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] md:gap-[40px]">
                {/* Performance Visualization */}
                <motion.div
                    variants={item}
                    initial="hidden"
                    animate="show"
                    className="lg:col-span-8 space-y-[20px] md:space-y-[28px]"
                >
                    <div className="flex items-center justify-between">
                        <h2 className="text-[20px] md:text-[22px] font-[800] text-[#0F172A] tracking-tight">Revenue Pipeline</h2>
                        <button className="text-[12px] md:text-[13px] font-[700] text-[#1D4ED8] hover:underline flex items-center gap-[6px]">
                            Full Deep-Dive <FiArrowRight />
                        </button>
                    </div>
                    <Card className="h-[300px] md:h-[400px] bg-[#FFFFFF] border-[#E2E8F0] p-[20px] md:p-[32px] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] to-[#FFFFFF]" />
                        <div className="relative z-10 w-full h-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={MOCK_ANALYTICS.revenueChartData}>
                                    <defs>
                                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#1D4ED8" stopOpacity={0.1} />
                                            <stop offset="95%" stopColor="#1D4ED8" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                                    <XAxis
                                        dataKey="month"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#64748B', fontSize: 10, fontWeight: 600 }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#64748B', fontSize: 10, fontWeight: 600 }}
                                        tickFormatter={(value) => `$${value / 1000}k`}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#0F172A',
                                            border: 'none',
                                            borderRadius: '12px',
                                            color: '#FFF',
                                            fontSize: '11px',
                                            fontWeight: '700',
                                            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
                                        }}
                                        itemStyle={{ color: '#60A5FA' }}
                                        cursor={{ stroke: '#1D4ED8', strokeWidth: 2 }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#1D4ED8"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorValue)"
                                        animationDuration={2000}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>
                </motion.div>

                {/* Priority Alerts / Critical Signals */}
                <motion.div
                    variants={item}
                    initial="hidden"
                    animate="show"
                    className="lg:col-span-4 space-y-[20px] md:space-y-[28px]"
                >
                    <h2 className="text-[20px] md:text-[22px] font-[800] text-[#0F172A] tracking-tight">Critical Signals</h2>
                    <div className="space-y-[12px] md:space-y-[16px]">
                        {[
                            {
                                type: 'danger',
                                title: 'Rent Delinquency',
                                desc: 'Unit 4B (Manhattan) is 3 days past settlement.',
                                icon: FiAlertCircle,
                                color: 'text-[#EF4444]',
                                bg: 'bg-[#FEF2F2]',
                                border: 'border-[#EF4444]/20'
                            },
                            {
                                type: 'success',
                                title: 'Credential Approval',
                                desc: 'High-yield tenant candidate verified for Industrial Quarter.',
                                icon: FiCheckCircle,
                                color: 'text-[#10B981]',
                                bg: 'bg-[#F0FDF4]',
                                border: 'border-[#10B981]/20'
                            },
                            {
                                type: 'info',
                                title: 'Maintenance Signal',
                                desc: 'Structural node HVAC reported minor latency in Brooklyn.',
                                icon: FiActivity,
                                color: 'text-[#1D4ED8]',
                                bg: 'bg-[#EFF6FF]',
                                border: 'border-[#1D4ED8]/20'
                            }
                        ].map((signal, idx) => {
                            const Icon = signal.icon;
                            return (
                                <motion.div key={idx} variants={item}>
                                    <Card className={`${signal.bg} ${signal.border} p-[20px] md:p-[24px] hover:shadow-md transition-all cursor-pointer group`}>
                                        <div className="flex gap-[16px] md:gap-[20px]">
                                            <div className={`${signal.color} mt-[2px] shrink-0`}>
                                                <Icon className="w-[18px] md:w-[20px] h-[18px] md:h-[20px]" />
                                            </div>
                                            <div>
                                                <h4 className="text-[14px] md:text-[15px] font-[800] text-[#0F172A]">{signal.title}</h4>
                                                <p className="text-[12px] md:text-[13px] text-[#64748B] mt-[4px] leading-relaxed group-hover:text-[#0F172A] transition-colors">{signal.desc}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[32px] relative overflow-hidden shadow-sm">
                        <div className="absolute top-0 right-0 p-[24px] opacity-5">
                            <FiActivity className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] text-[#111827]" />
                        </div>
                        <h4 className="text-[15px] md:text-[16px] font-[800] mb-[20px] md:mb-[24px] flex items-center gap-[10px] text-[#111827]">
                            <div className="w-[8px] h-[8px] rounded-full bg-[#10B981] animate-pulse" />
                            System Integrity
                        </h4>
                        <div className="space-y-[16px] md:space-y-[20px]">
                            <div className="flex justify-between items-center text-[12px] md:text-[13px]">
                                <span className="text-[#6B7280] font-[500]">Node Uptime</span>
                                <span className="text-[#10B981] font-[800]">99.98%</span>
                            </div>
                            <div className="w-full h-[4px] bg-[#F3F4F6] rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} animate={{ width: '99.98%' }} transition={{ duration: 1.5 }} className="h-full bg-[#10B981]" />
                            </div>
                            <div className="flex justify-between items-center text-[12px] md:text-[13px]">
                                <span className="text-[#6B7280] font-[500]">Network Latency</span>
                                <span className="text-[#111827] font-[800]">14ms</span>
                            </div>
                            <div className="flex justify-between items-center text-[12px] md:text-[13px]">
                                <span className="text-[#6B7280] font-[500]">Structural Sync</span>
                                <span className="text-[#111827] font-[800]">Live</span>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
