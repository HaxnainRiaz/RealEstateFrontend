"use client";

import React, { useState } from 'react';
import Card from '@/components/ui/data/Card';
import PrimaryButton from '@/components/ui/button/PrimaryButton';

export default function PaymentForm() {
    const [amount, setAmount] = useState(2450);

    return (
        <Card className="p-[32px] bg-[#FFFFFF] rounded-[16px] border border-[#E5E7EB]">
            <h3 className="text-[20px] font-[800] text-[#111827] mb-[24px]">Initialize Ledger Transaction</h3>

            <div className="space-y-[24px]">
                <div className="p-[20px] bg-[#F9FAFB] rounded-[12px] border border-[#F3F4F6]">
                    <p className="text-[12px] font-[700] text-[#6B7280] uppercase mb-[8px]">Pending Balance</p>
                    <p className="text-[32px] font-[800] text-[#111827]">$2,450.00</p>
                </div>

                <div>
                    <label className="block text-[14px] font-[700] text-[#374151] mb-[8px]">Transaction Amount</label>
                    <div className="relative">
                        <span className="absolute left-[16px] top-[14px] text-[#9CA3AF] font-[700]">$</span>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            className="w-full pl-[32px] pr-[16px] py-[14px] border border-[#D1D5DB] rounded-[10px] font-[800] text-[#111827]"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-[14px] font-[700] text-[#374151] mb-[8px]">Deployment Source (Method)</label>
                    <div className="grid grid-cols-2 gap-[12px]">
                        <button className="flex items-center gap-[12px] p-[16px] border-2 border-[#1D4ED8] bg-[#1D4ED8]/5 rounded-[12px] text-left transition-all">
                            <div className="w-[12px] h-[12px] rounded-full bg-[#1D4ED8]" />
                            <div>
                                <p className="text-[14px] font-[700] text-[#111827]">ACH Transfer</p>
                                <p className="text-[11px] text-[#6B7280]">Ending in 4242</p>
                            </div>
                        </button>
                        <button className="flex items-center gap-[12px] p-[16px] border-2 border-[#F3F4F6] hover:border-[#D1D5DB] rounded-[12px] text-left transition-all">
                            <div className="w-[12px] h-[12px] rounded-full border-2 border-[#D1D5DB]" />
                            <div>
                                <p className="text-[14px] font-[700] text-[#374151]">Credit Node</p>
                                <p className="text-[11px] text-[#6B7280]">Ending in 9812</p>
                            </div>
                        </button>
                    </div>
                </div>

                <PrimaryButton className="w-full py-[18px] text-[16px]">
                    Authorize Deployment
                </PrimaryButton>

                <p className="text-center text-[12px] text-[#9CA3AF]">
                    Secure biometric-grade encryption active. Transaction ID will be logged to chain.
                </p>
            </div>
        </Card>
    );
}
