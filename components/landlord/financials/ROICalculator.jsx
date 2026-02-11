"use client";

import React, { useState } from 'react';
import Card from '@/components/ui/data/Card';
import PrimaryButton from '@/components/ui/button/PrimaryButton';

export default function ROICalculator() {
    const [purchasePrice, setPurchasePrice] = useState(1200000);
    const [monthlyRent, setMonthlyRent] = useState(8500);
    const [renovations, setRenovations] = useState(50000);

    const annualRent = monthlyRent * 12;
    const totalInvestment = purchasePrice + renovations;
    const roi = (annualRent / totalInvestment) * 100;

    return (
        <Card className="p-[32px] bg-[#FFFFFF] rounded-[16px] border border-[#E5E7EB] shadow-sm">
            <h3 className="text-[20px] font-[700] text-[#111827] mb-[24px]">Yield Projection Simulator</h3>

            <div className="space-y-[24px]">
                <div>
                    <label className="block text-[14px] font-[600] text-[#374151] mb-[8px]">Asset Acquisition Price</label>
                    <div className="relative">
                        <span className="absolute left-[16px] top-[12px] text-[#9CA3AF]">$</span>
                        <input
                            type="number"
                            value={purchasePrice}
                            onChange={(e) => setPurchasePrice(Number(e.target.value))}
                            className="w-full pl-[32px] pr-[16px] py-[10px] border border-[#D1D5DB] rounded-[8px] focus:ring-1 focus:ring-[#1D4ED8]"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-[16px]">
                    <div>
                        <label className="block text-[14px] font-[600] text-[#374151] mb-[8px]">Monthly Pipeline</label>
                        <div className="relative">
                            <span className="absolute left-[16px] top-[12px] text-[#9CA3AF]">$</span>
                            <input
                                type="number"
                                value={monthlyRent}
                                onChange={(e) => setMonthlyRent(Number(e.target.value))}
                                className="w-full pl-[32px] pr-[16px] py-[10px] border border-[#D1D5DB] rounded-[8px]"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-[14px] font-[600] text-[#374151] mb-[8px]">Capital Deployment</label>
                        <div className="relative">
                            <span className="absolute left-[16px] top-[12px] text-[#9CA3AF]">$</span>
                            <input
                                type="number"
                                value={renovations}
                                onChange={(e) => setRenovations(Number(e.target.value))}
                                className="w-full pl-[32px] pr-[16px] py-[10px] border border-[#D1D5DB] rounded-[8px]"
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-[#F9FAFB] p-[24px] rounded-[12px] border border-[#F3F4F6] text-center">
                    <p className="text-[12px] text-[#6B7280] uppercase tracking-[0.1em] font-[700] mb-[8px]">Projected Capital Yield (ROI)</p>
                    <div className="text-[40px] font-[800] text-[#1D4ED8] leading-none mb-[4px]">
                        {roi.toFixed(2)}%
                    </div>
                    <p className="text-[14px] text-[#10B981] font-[600]">Institutional Standard Alpha</p>
                </div>

                <PrimaryButton className="w-full py-[16px]">Generate Forensic Report</PrimaryButton>
            </div>
        </Card>
    );
}
