"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import Link from 'next/link';
import { FiArrowLeft, FiMapPin, FiTrendingUp } from 'react-icons/fi';
import dynamic from 'next/dynamic';

const ResponsiveContainer = dynamic(() => import('recharts').then(mod => mod.ResponsiveContainer), { ssr: false });
const ComposedChart = dynamic(() => import('recharts').then(mod => mod.ComposedChart), { ssr: false });
const Bar = dynamic(() => import('recharts').then(mod => mod.Bar), { ssr: false });
const XAxis = dynamic(() => import('recharts').then(mod => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import('recharts').then(mod => mod.YAxis), { ssr: false });
const CartesianGrid = dynamic(() => import('recharts').then(mod => mod.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then(mod => mod.Tooltip), { ssr: false });

export default function LandlordMarketInsightsPage() {
    const segments = [
        { area: "Manhattan Core", sentiment: "Bullish", delta: "+3.4%", nodeCount: 124 },
        { area: "Industrial Quarter", sentiment: "Neutral", delta: "+0.2%", nodeCount: 86 },
        { area: "Waterfront Tech Hub", sentiment: "Aggressive", delta: "+5.1%", nodeCount: 52 }
    ];

    const chartData = [
        { name: 'Node A', value: 400, trend: 240 },
        { name: 'Node B', value: 300, trend: 139 },
        { name: 'Node C', value: 200, trend: 980 },
        { name: 'Node D', value: 278, trend: 390 },
        { name: 'Node E', value: 189, trend: 480 }
    ];

    return (
        <div className="space-y-[40px]">
            <div className="flex items-center gap-[16px] mb-[8px]">
                <Link href="/landlord/dashboard" className="p-[10px] bg-[#FFFFFF] border border-[#E2E8F0] rounded-[10px] text-[#64748B] hover:text-[#1D4ED8] hover:border-[#1D4ED8] transition-all group">
                    <FiArrowLeft className="w-[18px] h-[18px] group-hover:-translate-x-[2px] transition-transform" />
                </Link>
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] block">Spatial Intelligence</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Market Insights</h1>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px]">
                <div className="lg:col-span-8 space-y-[40px]">
                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-0 overflow-hidden shadow-sm">
                        <div className="p-[40px] border-b border-[#D1D5DB]/20 bg-[#F9FAFB]/50 flex justify-between items-center">
                            <h3 className="text-[20px] font-[700] text-[#111827]">Geospatial Sentiment Heatmap</h3>
                            <div className="flex gap-[8px]">
                                <span className="w-[12px] h-[12px] rounded-full bg-[#1D4ED8]" />
                                <span className="text-[11px] font-[700] uppercase text-[#64748B]">Demand Focus</span>
                            </div>
                        </div>
                        <div className="aspect-video bg-[#F9FAFB] relative overflow-hidden">
                            {/* Abstract Map UI */}
                            <div className="absolute inset-0 opacity-[0.4]" style={{
                                backgroundImage: `radial-gradient(circle at 20% 30%, #1D4ED8 0%, transparent 40%),
                                                 radial-gradient(circle at 70% 60%, #10B981 0%, transparent 40%),
                                                 radial-gradient(circle at 40% 80%, #6366F1 0%, transparent 40%)`
                            }} />
                            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                            {/* Animated Markers */}
                            {[
                                { t: 20, l: 30, color: 'bg-[#1D4ED8]' },
                                { t: 60, l: 70, color: 'bg-[#10B981]' },
                                { t: 40, l: 50, color: 'bg-[#6366F1]' }
                            ].map((pos, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                                    className={`absolute w-[40px] h-[40px] ${pos.color} rounded-full opacity-20`}
                                    style={{ top: `${pos.t}%`, left: `${pos.l}%` }}
                                />
                            ))}

                            <div className="absolute inset-0 flex items-center justify-center">
                                <Card className="bg-white/90 backdrop-blur-md border border-white/20 p-[24px] shadow-2xl text-center max-w-[320px]">
                                    <FiMapPin className="w-[24px] h-[24px] text-[#1D4ED8] mx-auto mb-[16px]" />
                                    <h4 className="text-[16px] font-[800] text-[#0F172A] mb-[4px]">Spatial Data Projection</h4>
                                    <p className="text-[13px] text-[#64748B] leading-relaxed">Aggregating neighborhood price indices across 12,000 unique node points.</p>
                                    <div className="mt-[20px] h-[60px] w-full opacity-20">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <ComposedChart data={chartData}>
                                                <Bar dataKey="value" fill="#1D4ED8" radius={[4, 4, 0, 0]} />
                                            </ComposedChart>
                                        </ResponsiveContainer>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </Card>

                    <div className="space-y-[24px]">
                        <h3 className="text-[20px] font-[700] text-[#111827]">Regional Index Forensics</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                            {segments.map((seg, i) => (
                                <motion.div
                                    key={seg.area}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] hover:border-[#1D4ED8] hover:shadow-lg transition-all group">
                                        <div className="flex justify-between items-start mb-[16px]">
                                            <h4 className="text-[17px] font-[700] text-[#111827] group-hover:text-[#1D4ED8] transition-colors">{seg.area}</h4>
                                            <span className={`px-[8px] py-[3px] rounded-[4px] text-[10px] font-[800] uppercase ${seg.sentiment === 'Bullish' || seg.sentiment === 'Aggressive' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-[#6B7280]/10 text-[#6B7280]'}`}>
                                                {seg.sentiment}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-end">
                                            <div className="space-y-[4px]">
                                                <p className="text-[24px] font-[700] text-[#111827]">{seg.delta}</p>
                                                <p className="text-[12px] text-[#6B7280]">Price Forecast Delta</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[15px] font-[700] text-[#111827]">{seg.nodeCount}</p>
                                                <p className="text-[12px] text-[#6B7280]">Active Competitor Nodes</p>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4 space-y-[32px]">
                    <Card className="bg-[#111827] border-none p-[40px] text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-[24px] opacity-10">
                            <FiTrendingUp className="w-[64px] h-[64px]" />
                        </div>
                        <h3 className="text-[18px] font-[700] mb-[24px] relative z-10">Market Pulse</h3>
                        <div className="space-y-[32px] relative z-10">
                            {[
                                { l: "Supply Saturation", v: "Low", d: "High demand cluster detected" },
                                { l: "Yield Stability", v: "Grade A", d: "Consistent across all epochs" },
                                { l: "Search Intensity", v: "+12.4%", d: "Temporal increase in verified signals" }
                            ].map(item => (
                                <div key={item.l} className="space-y-[8px]">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[11px] font-[700] text-white/50 uppercase tracking-[0.1em]">{item.l}</span>
                                        <span className="text-[14px] font-[800] text-[#1D4ED8] bg-white px-[8px] py-[2px] rounded-[4px]">{item.v}</span>
                                    </div>
                                    <p className="text-[13px] text-white/60 leading-[1.6]">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px]">
                        <h4 className="text-[16px] font-[700] text-[#111827] mb-[20px]">Intelligence Source</h4>
                        <div className="flex items-center gap-[16px] p-[16px] bg-[#F9FAFB] rounded-[12px] border border-[#E2E8F0]">
                            <div className="w-[10px] h-[10px] rounded-full bg-[#10B981] animate-pulse" />
                            <span className="text-[13px] font-[600] text-[#111827]">Live Neighborhood Feed Active</span>
                        </div>
                        <p className="text-[13px] text-[#6B7280] leading-[1.6] mt-[16px]">
                            Data is aggregated from 2,400+ institutional sources and verified property registries.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
}
