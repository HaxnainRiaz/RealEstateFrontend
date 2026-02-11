"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';

const LINE_ITEMS = [
    { label: "Gross Rental Income", amount: 48500, type: "income" },
    { label: "Service Fees", amount: 1200, type: "income" },
    { label: "Late Fees", amount: 250, type: "income" },
    { label: "Operating Expenses", amount: -15400, type: "expense" },
    { label: "Management Fees", amount: -4850, type: "expense" },
    { label: "Property Taxes", amount: -8200, type: "expense" }
];

export default function IncomeStatement() {
    const netIncome = LINE_ITEMS.reduce((acc, curr) => acc + curr.amount, 0);

    return (
        <Card className="bg-[#FFFFFF] p-[32px] rounded-[16px] border border-[#E5E7EB]">
            <h3 className="text-[20px] font-[700] text-[#111827] mb-[24px]">Forensic Income Statement</h3>

            <table className="w-full text-[14px]">
                <thead>
                    <tr className="border-b border-[#F3F4F6] text-left">
                        <th className="pb-[12px] font-[600] text-[#6B7280]">Description</th>
                        <th className="pb-[12px] font-[600] text-[#6B7280] text-right">Credit/Debit</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#F9FAFB]">
                    {LINE_ITEMS.map((item, idx) => (
                        <tr key={idx} className="group">
                            <td className="py-[12px] text-[#374151] font-[500] group-hover:text-[#111827]">{item.label}</td>
                            <td className={`py-[12px] text-right font-[600] ${item.type === 'income' ? 'text-[#10B981]' : 'text-[#EF4444]'}`}>
                                {item.amount > 0 ? '+' : ''}{item.amount.toLocaleString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr className="border-t border-[#111827]/10">
                        <td className="pt-[24px] font-[700] text-[#111827] text-[16px]">Net Operating Income</td>
                        <td className="pt-[24px] text-right font-[800] text-[#111827] text-[20px]">
                            ${netIncome.toLocaleString()}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </Card>
    );
}
