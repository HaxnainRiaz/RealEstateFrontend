"use client";

import React, { useState, useEffect } from 'react';
import Card from '@/components/ui/data/Card';
import PrimaryButton from '@/components/ui/button/PrimaryButton';

export default function MortgageCalculator({ price = 1000000 }) {
    const [loanAmount, setLoanAmount] = useState(price * 0.8);
    const [downPayment, setDownPayment] = useState(price * 0.2);
    const [interestRate, setInterestRate] = useState(6.5);
    const [years, setYears] = useState(30);
    const [monthlyPayment, setMonthlyPayment] = useState(0);

    useEffect(() => {
        const principal = loanAmount;
        const monthlyRate = interestRate / 100 / 12;
        const payments = years * 12;

        const x = Math.pow(1 + monthlyRate, payments);
        const monthly = (principal * x * monthlyRate) / (x - 1);

        setMonthlyPayment(monthly);
    }, [loanAmount, interestRate, years]);

    const handlePriceChange = (e) => {
        const newPrice = parseFloat(e.target.value);
        setLoanAmount(newPrice - downPayment);
    };

    const handleDownPaymentChange = (e) => {
        const newDown = parseFloat(e.target.value);
        setDownPayment(newDown);
        setLoanAmount(price - newDown); // Assuming price is fixed props for now or derived
    };

    // Simplified for demo: slider updates loan amount directly relative to a fixed price if price is prop, 
    // but better to have internal price state if it's a general calculator.
    // Let's make it a general calculator where you input price.

    const [homePrice, setHomePrice] = useState(price);

    useEffect(() => {
        setLoanAmount(homePrice - downPayment);
    }, [homePrice, downPayment]);

    return (
        <Card className="p-[32px] bg-[#FFFFFF] border border-[#D1D5DB] shadow-sm">
            <h3 className="text-[20px] font-[700] text-[#111827] mb-[24px]">Mortgage Estimator</h3>

            <div className="space-y-[24px]">
                <div>
                    <label className="block text-[14px] font-[600] text-[#374151] mb-[8px]">Home Price</label>
                    <div className="relative">
                        <span className="absolute left-[16px] top-[12px] text-[#6B7280]">$</span>
                        <input
                            type="number"
                            value={homePrice}
                            onChange={(e) => setHomePrice(Number(e.target.value))}
                            className="w-full pl-[32px] pr-[16px] py-[10px] border border-[#D1D5DB] rounded-[8px] text-[#111827] focus:ring-1 focus:ring-[#1D4ED8] focus:border-[#1D4ED8]"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-[16px]">
                    <div>
                        <label className="block text-[14px] font-[600] text-[#374151] mb-[8px]">Down Payment</label>
                        <div className="relative">
                            <span className="absolute left-[16px] top-[12px] text-[#6B7280]">$</span>
                            <input
                                type="number"
                                value={downPayment}
                                onChange={(e) => setDownPayment(Number(e.target.value))}
                                className="w-full pl-[32px] pr-[16px] py-[10px] border border-[#D1D5DB] rounded-[8px] text-[#111827]"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-[14px] font-[600] text-[#374151] mb-[8px]">Interest Rate (%)</label>
                        <input
                            type="number"
                            step="0.1"
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                            className="w-full px-[16px] py-[10px] border border-[#D1D5DB] rounded-[8px] text-[#111827]"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-[14px] font-[600] text-[#374151] mb-[8px]">Loan Term</label>
                    <div className="flex bg-[#F3F4F6] p-[4px] rounded-[8px]">
                        {[15, 30].map(term => (
                            <button
                                key={term}
                                onClick={() => setYears(term)}
                                className={`flex-1 py-[8px] text-[14px] font-[600] rounded-[6px] transition-all ${years === term ? 'bg-[#FFFFFF] text-[#1D4ED8] shadow-sm' : 'text-[#6B7280] hover:text-[#374151]'}`}
                            >
                                {term} Years
                            </button>
                        ))}
                    </div>
                </div>

                <div className="pt-[24px] border-t border-[#E5E7EB]">
                    <div className="flex justify-between items-end mb-[8px]">
                        <span className="text-[14px] font-[600] text-[#6B7280]">Estimated Payment</span>
                        <span className="text-[32px] font-[800] text-[#111827]">
                            ${monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                            <span className="text-[14px] font-[500] text-[#6B7280] ml-[4px]">/mo</span>
                        </span>
                    </div>
                    <PrimaryButton className="w-full mt-[16px] bg-[#111827] hover:bg-[#374151]">
                        Get Pre-Approved
                    </PrimaryButton>
                </div>
            </div>
        </Card>
    );
}
