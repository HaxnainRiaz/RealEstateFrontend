
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '@/components/shared/layout/Section';
import Card, { CardTitle, CardDescription } from '@/components/ui/data/Card';
import PrimaryButton from '@/components/ui/button/PrimaryButton';

export default function YieldCalculator() {
    const [units, setUnits] = useState(10);
    const [avgRent, setAvgRent] = useState(2500);

    const estimatedUplift = (units * avgRent * 12 * 0.08).toLocaleString(); // Assumes 8% optimization

    return (
        <div className="bg-[#FFFFFF] min-h-screen pt-[160px]">
            <Section>
                <SectionHeader
                    subtitle="Revenue Forensics"
                    title="Institutional Yield Modeling"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px]">
                    <div className="space-y-[48px]">
                        <div className="space-y-[24px]">
                            <div>
                                <label className="text-[14px] font-[600] text-[#111827] uppercase tracking-[0.05em] mb-[12px] block">
                                    Portfolio Size (Units)
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="500"
                                    value={units}
                                    onChange={(e) => setUnits(parseInt(e.target.value))}
                                    className="w-full h-[6px] bg-[#E5E7EB] rounded-full appearance-none cursor-pointer accent-[#1D4ED8]"
                                />
                                <div className="flex justify-between mt-[12px] text-[18px] font-[700] text-[#111827]">
                                    <span>{units} Units</span>
                                </div>
                            </div>

                            <div>
                                <label className="text-[14px] font-[600] text-[#111827] uppercase tracking-[0.05em] mb-[12px] block">
                                    Average Monthly Rent ($)
                                </label>
                                <div className="relative">
                                    <span className="absolute left-[20px] top-1/2 -translate-y-1/2 text-[#6B7280] font-[600]">$</span>
                                    <input
                                        type="number"
                                        value={avgRent}
                                        onChange={(e) => setAvgRent(parseInt(e.target.value))}
                                        className="w-full pl-[40px] pr-[20px] py-[16px] bg-[#F9FAFB] border border-[#D1D5DB] rounded-[8px] font-[600] text-[#111827] focus:outline-none focus:border-[#1D4ED8] transition-colors"
                                    />
                                </div>
                            </div>
                        </div>

                        <Card className="bg-[#1D4ED8]/5 border-[#1D4ED8]/20 p-[32px]">
                            <h4 className="text-[18px] font-[700] text-[#1D4ED8] mb-[16px]">Efficiency Breakdown</h4>
                            <ul className="space-y-[16px]">
                                {[
                                    { label: "Occupancy Boost", val: "+2.4%" },
                                    { label: "Maintenance Savings", val: "14%" },
                                    { label: "Settlement Acceleration", val: "3.2 Days" }
                                ].map(item => (
                                    <li key={item.label} className="flex justify-between text-[14px]">
                                        <span className="text-[#6B7280]">{item.label}</span>
                                        <span className="font-[700] text-[#111827]">{item.val}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>

                    <motion.div
                        key={`${units}-${avgRent}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-[#111827] rounded-[32px] p-[64px] text-center flex flex-col justify-center shadow-2xl"
                    >
                        <span className="text-[#FFFFFF]/60 text-[14px] font-[600] uppercase tracking-[0.1em] mb-[24px]">Estimated Annual Uplift</span>
                        <div className="text-[72px] font-[700] text-[#FFFFFF] tracking-[-0.02em] mb-[16px]">
                            ${estimatedUplift}
                        </div>
                        <p className="text-[#FFFFFF]/40 text-[14px] leading-[1.6] max-w-[300px] mx-auto">
                            Based on mid-market benchmarks for institutional automation integration.
                        </p>
                        <PrimaryButton className="mt-[48px] w-full">Deploy Portfolio</PrimaryButton>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
}
