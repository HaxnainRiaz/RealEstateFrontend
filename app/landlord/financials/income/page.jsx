
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';

const INCOME_STREAMS = [
    { id: '1', source: 'Rental Yield - Residential', monthly: 42800, ytd: 513600, growth: '+4.2%', category: 'Primary' },
    { id: '2', source: 'Parking Revenue', monthly: 2400, ytd: 28800, growth: '+1.8%', category: 'Ancillary' },
    { id: '3', source: 'Late Fee Collections', monthly: 850, ytd: 10200, growth: '-12%', category: 'Penalty' },
    { id: '4', source: 'Amenity Access Fees', monthly: 1200, ytd: 14400, growth: '+8.4%', category: 'Ancillary' }
];

export default function LandlordIncomePage() {
    const totalMonthly = INCOME_STREAMS.reduce((sum, stream) => sum + stream.monthly, 0);
    const totalYTD = INCOME_STREAMS.reduce((sum, stream) => sum + stream.ytd, 0);

    return (
        <div className="space-y-[32px] md:space-y-[40px]">
            <div>
                <span className="text-[11px] md:text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Revenue Analysis</span>
                <h1 className="text-[28px] md:text-[32px] font-[700] text-[#111827]">Income Streams</h1>
                <p className="text-[14px] md:text-[16px] text-[#6B7280]">Comprehensive breakdown of all portfolio revenue channels.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[24px]">
                {[
                    { label: "Monthly Gross Income", val: `$${totalMonthly.toLocaleString()}`, trend: "+3.8%" },
                    { label: "YTD Revenue", val: `$${totalYTD.toLocaleString()}`, trend: "+14.2%" },
                    { label: "Avg Yield per Asset", val: "$4,275", trend: "+2.1%" },
                    { label: "Revenue Diversity", val: "4 Streams", trend: "Stable" }
                ].map((stat, i) => (
                    <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[32px]">
                            <p className="text-[9px] md:text-[10px] uppercase font-[700] text-[#6B7280] tracking-[0.1em] mb-[8px]">{stat.label}</p>
                            <div className="flex items-end gap-[10px] md:gap-[12px]">
                                <h3 className="text-[20px] md:text-[24px] font-[700] text-[#111827] truncate">{stat.val}</h3>
                                <span className={`text-[12px] md:text-[13px] font-[700] mb-[4px] shrink-0 ${stat.trend.startsWith('+') ? 'text-[#10B981]' : stat.trend.startsWith('-') ? 'text-[#EF4444]' : 'text-[#6B7280]'}`}>
                                    {stat.trend}
                                </span>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] md:gap-[40px]">
                <div className="lg:col-span-8 space-y-[28px] md:space-y-[32px]">
                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[48px]">
                        <h3 className="text-[18px] md:text-[20px] font-[700] text-[#111827] mb-[24px] md:mb-[32px]">Revenue Stream Breakdown</h3>
                        <div className="space-y-[16px] md:space-y-[24px]">
                            {INCOME_STREAMS.map((stream, i) => (
                                <motion.div
                                    key={stream.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-[20px] md:p-[24px] bg-[#F9FAFB] rounded-[16px] border border-[#D1D5DB]/20 hover:border-[#1D4ED8] transition-all group"
                                >
                                    <div className="flex justify-between items-start mb-[16px]">
                                        <div className="min-w-0 pr-[12px]">
                                            <div className="flex flex-wrap items-center gap-[8px] md:gap-[12px] mb-[4px]">
                                                <h4 className="text-[16px] md:text-[17px] font-[700] text-[#111827] truncate">{stream.source}</h4>
                                                <span className="px-[8px] py-[2px] bg-[#F3F4F6] text-[#6B7280] text-[8px] md:text-[9px] font-[800] uppercase rounded-[4px] shrink-0">
                                                    {stream.category}
                                                </span>
                                            </div>
                                        </div>
                                        <span className={`text-[13px] md:text-[14px] font-[700] shrink-0 ${stream.growth.startsWith('+') ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                                            {stream.growth}
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-[16px] md:gap-[24px]">
                                        <div>
                                            <p className="text-[10px] md:text-[11px] text-[#6B7280] uppercase font-[700] mb-[4px]">Monthly</p>
                                            <p className="text-[18px] md:text-[20px] font-[700] text-[#111827]">${stream.monthly.toLocaleString()}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] md:text-[11px] text-[#6B7280] uppercase font-[700] mb-[4px]">Year to Date</p>
                                            <p className="text-[18px] md:text-[20px] font-[700] text-[#1D4ED8]">${stream.ytd.toLocaleString()}</p>
                                        </div>
                                    </div>
                                    <div className="mt-[16px] h-[4px] bg-[#F3F4F6] rounded-full overflow-hidden">
                                        <div className="h-full bg-[#1D4ED8]" style={{ width: `${(stream.monthly / totalMonthly) * 100}%` }} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[48px]">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-[24px] md:mb-[32px] gap-[16px]">
                            <h3 className="text-[18px] md:text-[20px] font-[700] text-[#111827]">12-Month Revenue Trend</h3>
                            <select className="bg-[#F9FAFB] border border-[#D1D5DB] rounded-[8px] px-[12px] md:px-[16px] py-[8px] text-[12px] md:text-[13px] font-[600] outline-none w-full sm:w-auto">
                                <option>All Streams</option>
                                <option>Primary Only</option>
                                <option>Ancillary Only</option>
                            </select>
                        </div>
                        <div className="aspect-[16/9] md:aspect-[21/9] bg-[#F9FAFB] border border-dashed border-[#D1D5DB] rounded-[16px] flex items-center justify-center">
                            <span className="text-[12px] md:text-[14px] font-[600] text-[#D1D5DB]">DYNAMIC REVENUE CHART</span>
                        </div>
                    </Card>
                </div>

                <div className="lg:col-span-4 space-y-[32px]">
                    <Card className="bg-[#111827] border-none p-[24px] md:p-[40px] text-white shadow-xl">
                        <h3 className="text-[16px] md:text-[18px] font-[700] mb-[20px] md:mb-[24px]">Income Optimization</h3>
                        <div className="space-y-[16px] md:space-y-[24px]">
                            {[
                                { t: "Yield Increase Potential", v: "+$2,400/mo", d: "Based on market analysis" },
                                { t: "Occupancy Optimization", v: "+$1,800/mo", d: "Fill 2 vacant nodes" },
                                { t: "Amenity Monetization", v: "+$900/mo", d: "Untapped revenue streams" }
                            ].map(item => (
                                <div key={item.t} className="p-[16px] md:p-[20px] bg-white/5 rounded-[12px] border border-white/10 space-y-[8px]">
                                    <div className="flex justify-between items-center gap-[8px]">
                                        <h4 className="text-[13px] md:text-[14px] font-[700] truncate">{item.t}</h4>
                                        <span className="text-[14px] md:text-[16px] font-[800] text-[#10B981] shrink-0">{item.v}</span>
                                    </div>
                                    <p className="text-[11px] md:text-[12px] text-white/50">{item.d}</p>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-[24px] md:mt-[32px] py-[14px] bg-[#1D4ED8] text-white font-[700] rounded-[8px] hover:bg-[#2563EB] transition-all text-[12px] md:text-[13px]">
                            View Full Analysis
                        </button>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[40px]">
                        <h4 className="text-[15px] md:text-[16px] font-[700] text-[#111827] mb-[16px] md:mb-[20px]">Revenue Distribution</h4>
                        <div className="space-y-[16px] md:space-y-[20px]">
                            {[
                                { l: "Primary Income", v: "91%", c: "bg-[#1D4ED8]" },
                                { l: "Ancillary Revenue", v: "7%", c: "bg-[#10B981]" },
                                { l: "Penalty Collections", v: "2%", c: "bg-[#6B7280]" }
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
                </div>
            </div>
        </div>
    );
}
