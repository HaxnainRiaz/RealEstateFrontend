
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import { MOCK_ASSETS } from '@/lib/mockData';
import Link from 'next/link';
import { FiArrowLeft, FiTrendingUp, FiActivity, FiPieChart } from 'react-icons/fi';
import dynamic from 'next/dynamic';

const ResponsiveContainer = dynamic(() => import('recharts').then(mod => mod.ResponsiveContainer), { ssr: false });
const LineChart = dynamic(() => import('recharts').then(mod => mod.LineChart), { ssr: false });
const Line = dynamic(() => import('recharts').then(mod => mod.Line), { ssr: false });
const XAxis = dynamic(() => import('recharts').then(mod => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import('recharts').then(mod => mod.YAxis), { ssr: false });
const CartesianGrid = dynamic(() => import('recharts').then(mod => mod.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then(mod => mod.Tooltip), { ssr: false });

export default function LandlordAnalyticsPage() {
    const metrics = [
        { label: "Portfolio Yield Index", val: "5.82%", trend: "+0.4%", positive: true },
        { label: "Occupancy Equilibrium", val: "94.2%", trend: "-1.2%", positive: false },
        { label: "Asset Valuation Delta", val: "+$1.2M", trend: "Q3 Forecast", positive: true },
        { label: "Collection Velocity", val: "98.4%", trend: "+2.1%", positive: true }
    ];

    const yieldData = [
        { month: 'Jul', yield: 5.4 },
        { month: 'Aug', yield: 5.6 },
        { month: 'Sep', yield: 5.5 },
        { month: 'Oct', yield: 5.8 },
        { month: 'Nov', yield: 5.7 },
        { month: 'Dec', yield: 5.9 }
    ];

    return (
        <div className="space-y-[32px] md:space-y-[40px]">
            <div className="flex items-center gap-[12px] md:gap-[16px] mb-[8px]">
                <Link href="/landlord/dashboard" className="p-[8px] md:p-[10px] bg-[#FFFFFF] border border-[#E2E8F0] rounded-[10px] text-[#64748B] hover:text-[#1D4ED8] hover:border-[#1D4ED8] transition-all group">
                    <FiArrowLeft className="w-[16px] md:w-[18px] h-[16px] md:h-[18px] group-hover:-translate-x-[2px] transition-transform" />
                </Link>
                <div>
                    <span className="text-[11px] md:text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] block">Forensic Intelligence</span>
                    <h1 className="text-[24px] md:text-[32px] font-[700] text-[#111827]">Portfolio Analytics</h1>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[24px]">
                {metrics.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[32px] h-full flex flex-col justify-between group hover:border-[#1D4ED8] transition-all">
                            <p className="text-[10px] md:text-[12px] font-[700] text-[#6B7280] uppercase tracking-[0.05em] mb-[12px] md:mb-[16px]">{stat.label}</p>
                            <div className="space-y-[2px] md:space-y-[4px]">
                                <h3 className="text-[24px] md:text-[28px] font-[700] text-[#111827] truncate">{stat.val}</h3>
                                <p className={`text-[12px] md:text-[13px] font-[700] ${stat.positive ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                                    {stat.trend}
                                </p>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] md:gap-[40px]">
                <div className="lg:col-span-8 space-y-[32px] md:space-y-[40px]">
                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[48px]">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-[24px] md:mb-[40px] gap-[16px]">
                            <h3 className="text-[18px] md:text-[20px] font-[700] text-[#111827]">Yield Performance Protocol</h3>
                            <select className="bg-[#F9FAFB] border border-[#D1D5DB] rounded-[8px] px-[12px] md:px-[16px] py-[8px] text-[12px] md:text-[13px] font-[600] outline-none w-full sm:w-auto">
                                <option>Last 6 Months</option>
                                <option>Last 12 Months</option>
                                <option>Last 3 Years</option>
                            </select>
                        </div>
                        <div className="h-[240px] md:h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={yieldData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                                    <XAxis
                                        dataKey="month"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#64748B', fontSize: 11, md: 12, fontWeight: 600 }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#64748B', fontSize: 11, md: 12, fontWeight: 600 }}
                                        domain={['dataMin - 0.5', 'dataMax + 0.5']}
                                        tickFormatter={(val) => `${val}%`}
                                        width={40}
                                    />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#0F172A',
                                            border: 'none',
                                            borderRadius: '12px',
                                            color: '#FFF',
                                            fontSize: '11px',
                                            md: '12px',
                                            fontWeight: '700'
                                        }}
                                        cursor={{ stroke: '#1D4ED8', strokeWidth: 2 }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="yield"
                                        stroke="#1D4ED8"
                                        strokeWidth={4}
                                        dot={{ fill: '#1D4ED8', r: 5, md: 6, strokeWidth: 2, stroke: '#FFF' }}
                                        activeDot={{ r: 7, md: 8, strokeWidth: 0 }}
                                        animationDuration={1500}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[32px]">
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[40px]">
                            <h4 className="text-[15px] md:text-[16px] font-[700] text-[#111827] mb-[20px] md:mb-[24px]">Asset Category Distribution</h4>
                            <div className="space-y-[16px] md:space-y-[20px]">
                                {[
                                    { l: "High-Yield Institutional", v: "65%", c: "bg-[#1D4ED8]" },
                                    { l: "Modern Residential", v: "25%", c: "bg-[#10B981]" },
                                    { l: "Enterprise Nodes", v: "10%", c: "bg-[#6B7280]" }
                                ].map(item => (
                                    <div key={item.l} className="space-y-[8px]">
                                        <div className="flex justify-between text-[11px] md:text-[12px] font-[700]">
                                            <span className="text-[#6B7280] uppercase tracking-[0.05em] truncate pr-[8px]">{item.l}</span>
                                            <span className="shrink-0">{item.v}</span>
                                        </div>
                                        <div className="h-[6px] bg-[#F3F4F6] rounded-full overflow-hidden">
                                            <div className={`h-full ${item.c}`} style={{ width: item.v }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[40px]">
                            <h4 className="text-[15px] md:text-[16px] font-[700] mb-[20px] md:mb-[24px] text-[#111827]">Operational Health</h4>
                            <div className="space-y-[20px] md:space-y-[24px]">
                                {[
                                    { l: "Audit Integrity", v: "High" },
                                    { l: "Signal Latency", v: "12ms" },
                                    { l: "Compliance Score", v: "99.8" }
                                ].map(item => (
                                    <div key={item.l} className="flex justify-between items-center border-b border-[#E2E8F0] pb-[10px] md:pb-[12px]">
                                        <span className="text-[11px] md:text-[12px] text-[#6B7280] font-[600] uppercase tracking-[0.05em] truncate pr-[8px]">{item.l}</span>
                                        <span className="text-[13px] md:text-[14px] font-[700] shrink-0 text-[#111827]">{item.v}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>

                <div className="lg:col-span-4 space-y-[32px]">
                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[32px]">
                        <h3 className="text-[17px] md:text-[18px] font-[700] text-[#111827] mb-[20px] md:mb-[24px]">Critical Delta Node</h3>
                        <div className="space-y-[16px] md:space-y-[20px]">
                            {MOCK_ASSETS.slice(0, 3).map((asset) => (
                                <div key={asset.id} className="p-[16px] md:p-[20px] rounded-[12px] border border-[#D1D5DB]/20 hover:border-[#1D4ED8] transition-colors cursor-pointer group">
                                    <div className="flex justify-between items-start mb-[8px] gap-[8px]">
                                        <p className="text-[13px] md:text-[14px] font-[700] text-[#111827] group-hover:text-[#1D4ED8] transition-colors truncate">{asset.title}</p>
                                        <span className="text-[10px] md:text-[11px] font-[700] text-[#10B981] shrink-0">+1.2%</span>
                                    </div>
                                    <p className="text-[11px] md:text-[12px] text-[#6B7280]">Yield Optimization Potential Detected</p>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-[24px] md:mt-[32px] py-[12px] bg-[#F9FAFB] text-[#111827] text-[12px] md:text-[13px] font-[700] rounded-[8px] border border-[#D1D5DB] hover:bg-white transition-all">
                            Run Global Optimization
                        </button>
                    </Card>

                    <Card className="bg-gradient-to-br from-[#1D4ED8] to-[#1E40AF] border-none p-[24px] md:p-[32px] text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-[-20px] right-[-20px] w-[100px] md:w-[120px] h-[100px] md:h-[120px] bg-white/10 rounded-full blur-3xl" />
                        <h4 className="text-[15px] md:text-[16px] font-[700] mb-[8px] md:mb-[12px]">Machine Prediction</h4>
                        <p className="text-[12px] md:text-[13px] text-white/70 leading-[1.6] mb-[20px] md:mb-[24px]">
                            Based on neighborhood sentiment forensics, your Manhattan cluster is expected to see a 4.2% yield uplift in Q4.
                        </p>
                        <button className="text-[12px] md:text-[13px] font-[700] flex items-center gap-[8px] group">
                            Analyze Market Signals <span className="transition-transform group-hover:translate-x-[4px]">→</span>
                        </button>
                    </Card>
                </div>
            </div>
        </div>
    );
}

