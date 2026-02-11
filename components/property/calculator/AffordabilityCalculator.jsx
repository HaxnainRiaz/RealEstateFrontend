"use client";

import React, { useState } from 'react';
import Card from '@/components/ui/data/Card';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import { motion } from 'framer-motion';

export default function AffordabilityCalculator() {
    const [income, setIncome] = useState(120000);
    const [debts, setDebts] = useState(500);
    const [downPayment, setDownPayment] = useState(50000);
    const [interestRate, setInterestRate] = useState(6.5);

    // Rule of thumb: 28% of gross income for housing
    const monthlyIncome = income / 12;
    const maxHousingPayment = monthlyIncome * 0.28;
    const maxTotalDebtPayment = monthlyIncome * 0.36;

    // Estimated max loan amount (simplified)
    const monthlyRate = (interestRate / 100) / 12;
    const numPayments = 30 * 12;
    const maxLoan = (maxHousingPayment - debts) * (1 - Math.pow(1 + monthlyRate, -numPayments)) / monthlyRate;
    const affordablePrice = maxLoan + downPayment;

    return (
        <Card className="p-[32px] bg-[#FFFFFF] rounded-[16px] border border-[#E5E7EB]">
            <h3 className="text-[20px] font-[800] text-[#111827] mb-[24px]">Affordability Forensic</h3>

            <div className="space-y-[24px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                    <div>
                        <label className="block text-[12px] font-[700] uppercase tracking-[0.1em] text-[#6B7280] mb-[8px]">Annual Gross Income</label>
                        <div className="relative">
                            <span className="absolute left-[16px] top-[14px] font-[700] text-[#9CA3AF]">$</span>
                            <input
                                type="number"
                                value={income}
                                onChange={(e) => setIncome(Number(e.target.value))}
                                className="w-full pl-[32px] pr-[16px] py-[12px] border border-[#D1D5DB] rounded-[10px] font-[600]"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-[12px] font-[700] uppercase tracking-[0.1em] text-[#6B7280] mb-[8px]">Monthly Debts</label>
                        <div className="relative">
                            <span className="absolute left-[16px] top-[14px] font-[700] text-[#9CA3AF]">$</span>
                            <input
                                type="number"
                                value={debts}
                                onChange={(e) => setDebts(Number(e.target.value))}
                                className="w-full pl-[32px] pr-[16px] py-[12px] border border-[#D1D5DB] rounded-[10px] font-[600]"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-[12px] font-[700] uppercase tracking-[0.1em] text-[#6B7280] mb-[8px]">Down Payment</label>
                        <div className="relative">
                            <span className="absolute left-[16px] top-[14px] font-[700] text-[#9CA3AF]">$</span>
                            <input
                                type="number"
                                value={downPayment}
                                onChange={(e) => setDownPayment(Number(e.target.value))}
                                className="w-full pl-[32px] pr-[16px] py-[12px] border border-[#D1D5DB] rounded-[10px] font-[600]"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-[12px] font-[700] uppercase tracking-[0.1em] text-[#6B7280] mb-[8px]">Interest Rate (%)</label>
                        <input
                            type="number"
                            step="0.1"
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                            className="w-full px-[16px] py-[12px] border border-[#D1D5DB] rounded-[10px] font-[600]"
                        />
                    </div>
                </div>

                <div className="bg-[#1D4ED8] p-[32px] rounded-[16px] text-[#FFFFFF] shadow-xl shadow-[#1D4ED8]/20">
                    <p className="text-[12px] font-[800] uppercase tracking-[0.2em] opacity-80 mb-[8px]">Projected Buying Power</p>
                    <div className="text-[48px] font-[900] tracking-[-0.03em] leading-none mb-[8px]">
                        ${Math.round(affordablePrice).toLocaleString()}
                    </div>
                    <p className="text-[14px] font-[600] opacity-90">
                        Based on institutional 28/36 debt-to-income logic.
                    </p>
                </div>

                <div className="bg-[#F9FAFB] p-[24px] rounded-[12px] border border-[#F3F4F6] grid grid-cols-2 gap-[24px]">
                    <div>
                        <p className="text-[12px] text-[#6B7280] font-[600] uppercase">Monthly Housing</p>
                        <p className="text-[18px] font-[800] text-[#111827]">${Math.round(maxHousingPayment).toLocaleString()}</p>
                    </div>
                    <div>
                        <p className="text-[12px] text-[#6B7280] font-[600] uppercase">Max Total Debt</p>
                        <p className="text-[18px] font-[800] text-[#111827]">${Math.round(maxTotalDebtPayment).toLocaleString()}</p>
                    </div>
                </div>
            </div>
        </Card>
    );
}
