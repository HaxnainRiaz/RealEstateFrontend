
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';

export default function LandlordProjectionsPage() {
    const projectionYears = [2024, 2025, 2026];

    return (
        <div className="space-y-[32px] md:space-y-[40px]">
            <div>
                <span className="text-[11px] md:text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Predictive Analytics</span>
                <h1 className="text-[28px] md:text-[32px] font-[700] text-[#111827]">Financial Projections</h1>
                <p className="text-[14px] md:text-[16px] text-[#6B7280]">AI-powered revenue forecasting and portfolio growth modeling.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px] md:gap-[32px]">
                {projectionYears.map((year, i) => (
                    <motion.div key={year} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}>
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[40px] hover:shadow-xl transition-all h-full">
                            <div className="flex justify-between items-start mb-[20px] md:mb-[24px] gap-[12px]">
                                <span className="text-[12px] md:text-[14px] font-[700] text-[#6B7280] uppercase tracking-[0.1em] truncate shrink-0">{year} Forecast</span>
                                <span className="px-[8px] md:px-[10px] py-[3px] md:py-[4px] bg-[#10B981]/10 text-[#10B981] text-[8px] md:text-[10px] font-[800] uppercase rounded-[4px] shrink-0">
                                    +{8 + i * 2}% Growth
                                </span>
                            </div>
                            <h3 className="text-[28px] md:text-[32px] font-[700] text-[#111827] mb-[8px] truncate">
                                ${(650000 + (i * 85000)).toLocaleString()}
                            </h3>
                            <p className="text-[12px] md:text-[13px] text-[#6B7280]">Projected Annual Revenue</p>
                            <div className="mt-[20px] md:mt-[24px] pt-[20px] md:pt-[24px] border-t border-[#D1D5DB]/20 space-y-[12px]">
                                <div className="flex justify-between text-[12px] md:text-[13px] gap-[8px]">
                                    <span className="text-[#6B7280] truncate">Occupancy Rate</span>
                                    <span className="font-[700] text-[#111827] shrink-0">{94 + i}%</span>
                                </div>
                                <div className="flex justify-between text-[12px] md:text-[13px] gap-[8px]">
                                    <span className="text-[#6B7280] truncate">Avg Yield/Asset</span>
                                    <span className="font-[700] text-[#111827] shrink-0">${(4200 + (i * 150)).toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-[12px] md:text-[13px] gap-[8px]">
                                    <span className="text-[#6B7280] truncate">Net Operating Income</span>
                                    <span className="font-[700] text-[#10B981] shrink-0">${(420000 + (i * 55000)).toLocaleString()}</span>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] md:gap-[40px]">
                <div className="lg:col-span-8 space-y-[28px] md:space-y-[32px]">
                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[48px]">
                        <div className="flex flex-col xl:flex-row justify-between xl:items-center mb-[24px] md:mb-[32px] gap-[16px]">
                            <h3 className="text-[18px] md:text-[20px] font-[700] text-[#111827]">5-Year Revenue Projection</h3>
                            <div className="flex flex-wrap gap-[8px] md:gap-[12px]">
                                <button className="flex-grow sm:flex-grow-0 px-[12px] md:px-[16px] py-[8px] bg-[#1D4ED8] text-white rounded-[6px] text-[11px] md:text-[12px] font-[700]">Conservative</button>
                                <button className="flex-grow sm:flex-grow-0 px-[12px] md:px-[16px] py-[8px] bg-[#F9FAFB] border border-[#D1D5DB] rounded-[6px] text-[11px] md:text-[12px] font-[700] text-[#6B7280]">Moderate</button>
                                <button className="flex-grow sm:flex-grow-0 px-[12px] md:px-[16px] py-[8px] bg-[#F9FAFB] border border-[#D1D5DB] rounded-[6px] text-[11px] md:text-[12px] font-[700] text-[#6B7280]">Aggressive</button>
                            </div>
                        </div>
                        <div className="aspect-[16/9] md:aspect-[21/9] bg-[#F9FAFB] border border-dashed border-[#D1D5DB] rounded-[16px] flex items-center justify-center">
                            <span className="text-[12px] md:text-[14px] font-[600] text-[#D1D5DB]">DYNAMIC PROJECTION CHART</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[16px] md:gap-[24px] mt-[24px] md:mt-[32px]">
                            {[
                                { label: 'Best Case', value: '$1.2M', color: 'text-[#10B981]' },
                                { label: 'Expected', value: '$820K', color: 'text-[#1D4ED8]' },
                                { label: 'Worst Case', value: '$580K', color: 'text-[#EF4444]' }
                            ].map(scenario => (
                                <div key={scenario.label} className="text-center p-[16px] md:p-[20px] bg-[#F9FAFB] rounded-[12px]">
                                    <p className="text-[9px] md:text-[11px] text-[#6B7280] uppercase font-[700] mb-[6px] md:mb-[8px]">{scenario.label}</p>
                                    <p className={`text-[20px] md:text-[24px] font-[700] ${scenario.color}`}>{scenario.value}</p>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[48px]">
                        <h3 className="text-[18px] md:text-[20px] font-[700] text-[#111827] mb-[24px] md:mb-[32px]">Growth Assumptions</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] md:gap-[24px]">
                            {[
                                { factor: 'Market Rent Growth', value: '3.5% annually', confidence: 'High' },
                                { factor: 'Occupancy Improvement', value: '+1.2% per year', confidence: 'Medium' },
                                { factor: 'Operating Expense Increase', value: '2.8% annually', confidence: 'High' },
                                { factor: 'Portfolio Expansion', value: '+2 assets by 2026', confidence: 'Medium' },
                                { factor: 'Tenant Retention Rate', value: '85% average', confidence: 'High' },
                                { factor: 'Capital Expenditure', value: '$45K annually', confidence: 'High' }
                            ].map((item, i) => (
                                <div key={i} className="p-[16px] md:p-[20px] bg-[#F9FAFB] rounded-[12px] border border-[#D1D5DB]/20">
                                    <div className="flex justify-between items-start mb-[8px] gap-[8px]">
                                        <h4 className="text-[13px] md:text-[14px] font-[700] text-[#111827] truncate">{item.factor}</h4>
                                        <span className={`px-[8px] py-[2px] rounded-[4px] text-[8px] md:text-[9px] font-[800] uppercase shrink-0 ${item.confidence === 'High' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-[#F59E0B]/10 text-[#F59E0B]'
                                            }`}>
                                            {item.confidence}
                                        </span>
                                    </div>
                                    <p className="text-[14px] md:text-[15px] font-[600] text-[#1D4ED8]">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                <div className="lg:col-span-4 space-y-[32px]">
                    <Card className="bg-[#111827] border-none p-[24px] md:p-[40px] text-white shadow-xl">
                        <h3 className="text-[16px] md:text-[18px] font-[700] mb-[20px] md:mb-[24px]">AI Insights</h3>
                        <div className="space-y-[20px] md:space-y-[24px]">
                            {[
                                { icon: '📈', title: 'Market Opportunity', desc: 'Manhattan rental market projected to grow 12% over next 3 years.' },
                                { icon: '🎯', title: 'Optimization Target', desc: 'Increasing occupancy to 97% could add $28K annual revenue.' },
                                { icon: '⚠️', title: 'Risk Factor', desc: 'Interest rate volatility may impact refinancing costs in 2025.' }
                            ].map((insight, i) => (
                                <div key={i} className="p-[16px] md:p-[20px] bg-white/5 rounded-[12px] border border-white/10 space-y-[8px]">
                                    <div className="flex items-center gap-[12px]">
                                        <span className="text-[20px] md:text-[24px]">{insight.icon}</span>
                                        <h4 className="text-[13px] md:text-[14px] font-[700]">{insight.title}</h4>
                                    </div>
                                    <p className="text-[12px] md:text-[13px] text-white/60 leading-[1.6]">{insight.desc}</p>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[40px]">
                        <h4 className="text-[15px] md:text-[16px] font-[700] text-[#111827] mb-[16px] md:mb-[20px]">Scenario Builder</h4>
                        <p className="text-[12px] md:text-[13px] text-[#6B7280] leading-[1.6] mb-[20px] md:mb-[24px]">
                            Create custom financial projections by adjusting key variables and assumptions.
                        </p>
                        <button className="w-full py-[12px] md:py-[14px] bg-[#111827] text-white font-[700] rounded-[8px] hover:bg-[#1D4ED8] transition-all text-[12px] md:text-[13px]">
                            Launch Scenario Builder
                        </button>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[40px]">
                        <h4 className="text-[15px] md:text-[16px] font-[700] text-[#111827] mb-[16px]">Model Accuracy</h4>
                        <div className="space-y-[16px]">
                            <div className="flex justify-between items-center gap-[8px]">
                                <span className="text-[12px] md:text-[13px] text-[#6B7280] truncate">Historical Accuracy</span>
                                <span className="text-[14px] md:text-[16px] font-[700] text-[#10B981] shrink-0">94.2%</span>
                            </div>
                            <div className="h-[6px] bg-[#F3F4F6] rounded-full overflow-hidden">
                                <div className="h-full bg-[#10B981] w-[94%]" />
                            </div>
                            <p className="text-[10px] md:text-[11px] text-[#6B7280] leading-[1.5]">
                                Based on 36 months of actual vs. projected performance data.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
