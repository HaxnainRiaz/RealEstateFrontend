"use client";

import React, { useState } from 'react';
import Card from '@/components/ui/data/Card';

export default function PricingCalculator() {
    const [price, setPrice] = useState(2500);
    const [maintenance, setMaintenance] = useState(200);
    const [taxes, setTaxes] = useState(300);

    const netIncome = price - maintenance - taxes;

    return (
        <Card className="p-[32px] bg-[#FFFFFF] rounded-[16px] border border-[#E5E7EB] mt-[32px]">
            <h3 className="text-[20px] font-[700] text-[#111827] mb-[24px]">Yield Forensics</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                <div>
                    <label className="text-[12px] font-[600] text-[#6B7280] uppercase tracking-[0.05em] mb-[8px] block">Monthly Rent</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        className="w-full px-[16px] py-[12px] border border-[#D1D5DB] rounded-[8px] font-[600] text-[#111827]"
                    />
                </div>
                <div>
                    <label className="text-[12px] font-[600] text-[#6B7280] uppercase tracking-[0.05em] mb-[8px] block">Est. Maintenance</label>
                    <input
                        type="number"
                        value={maintenance}
                        onChange={(e) => setMaintenance(Number(e.target.value))}
                        className="w-full px-[16px] py-[12px] border border-[#D1D5DB] rounded-[8px] font-[600] text-[#111827]"
                    />
                </div>
                <div>
                    <label className="text-[12px] font-[600] text-[#6B7280] uppercase tracking-[0.05em] mb-[8px] block">Taxes & Fees</label>
                    <input
                        type="number"
                        value={taxes}
                        onChange={(e) => setTaxes(Number(e.target.value))}
                        className="w-full px-[16px] py-[12px] border border-[#D1D5DB] rounded-[8px] font-[600] text-[#111827]"
                    />
                </div>
            </div>

            <div className="mt-[32px] p-[24px] bg-[#F9FAFB] rounded-[12px] border border-[#F3F4F6] flex justify-between items-center">
                <div>
                    <p className="text-[14px] font-[600] text-[#6B7280]">Projected Net Monthly</p>
                    <p className="text-[12px] text-[#9CA3AF]">Before debt service</p>
                </div>
                <div className="text-[32px] font-[800] text-[#10B981]">
                    ${netIncome.toLocaleString()}
                </div>
            </div>
        </Card>
    );
}
