
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';

export default function LandlordMarketInsightsPage() {
    const segments = [
        { area: "Manhattan Core", sentiment: "Bullish", delta: "+3.4%", nodeCount: 124 },
        { area: "Industrial Quarter", sentiment: "Neutral", delta: "+0.2%", nodeCount: 86 },
        { area: "Waterfront Tech Hub", sentiment: "Aggressive", delta: "+5.1%", nodeCount: 52 }
    ];

    return (
        <div className="space-y-[40px]">
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Spatial Intelligence</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Market Insights</h1>
                <p className="text-[16px] text-[#6B7280]">Macro-level neighborhood sentiment and price forensics.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px]">
                <div className="lg:col-span-8 space-y-[40px]">
                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-0 overflow-hidden">
                        <div className="p-[40px] border-b border-[#D1D5DB]/20">
                            <h3 className="text-[20px] font-[700] text-[#111827]">Geospatial Sentiment Heatmap</h3>
                        </div>
                        <div className="aspect-video bg-[#F9FAFB] flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-neutral-100/50" />
                            <div className="z-10 text-center space-y-[16px]">
                                <div className="w-[80px] h-[80px] bg-[#1D4ED8]/10 rounded-full flex items-center justify-center mx-auto text-[#1D4ED8]">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                                </div>
                                <h4 className="text-[18px] font-[700] text-[#111827]">Spatial Data Projection</h4>
                                <p className="text-[14px] text-[#6B7280] max-w-[400px]">Interactive mapping of neighborhood price indices and demand nodes.</p>
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
                                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] hover:border-[#1D4ED8] transition-all group">
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
                    <Card className="bg-[#111827] border-none p-[40px] text-white">
                        <h3 className="text-[18px] font-[700] mb-[24px]">Market Pulse</h3>
                        <div className="space-y-[32px]">
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
                        <div className="flex items-center gap-[16px] p-[16px] bg-[#F9FAFB] rounded-[12px]">
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
