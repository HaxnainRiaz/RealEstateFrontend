"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';
import { motion } from 'framer-motion';

export default function ComparisonTool({ items = [] }) {
    if (items.length === 0) {
        return (
            <div className="p-[40px] text-center bg-[#F9FAFB] border border-dashed border-[#D1D5DB] rounded-[16px]">
                <p className="text-[#6B7280] font-[600]">Select properties to initialize side-by-side forensic analysis.</p>
            </div>
        );
    }

    const metrics = [
        { label: "Price", key: "price", format: (v) => `$${v.toLocaleString()}` },
        { label: "Area", key: "sqft", format: (v) => `${v} sqft` },
        { label: "Beds", key: "beds" },
        { label: "Baths", key: "baths" },
        { label: "Type", key: "type" },
        { label: "Yield (Est)", key: "yield", format: (v) => `${v}%` }
    ];

    return (
        <Card className="overflow-hidden bg-[#FFFFFF] rounded-[16px] border border-[#E5E7EB]">
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-[#F9FAFB]">
                            <th className="p-[24px] border-b border-[#F3F4F6] min-w-[150px]">
                                <span className="text-[12px] font-[800] uppercase tracking-[0.1em] text-[#9CA3AF]">Metric Forensic</span>
                            </th>
                            {items.map((item, idx) => (
                                <th key={idx} className="p-[24px] border-b border-[#F3F4F6] min-w-[250px]">
                                    <h4 className="text-[16px] font-[800] text-[#111827]">{item.title}</h4>
                                    <p className="text-[12px] text-[#6B7280] font-[500]">{item.id}</p>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F9FAFB]">
                        {metrics.map((metric, midx) => (
                            <tr key={midx} className="hover:bg-[#F9FAFB] transition-colors">
                                <td className="p-[24px] text-[14px] font-[700] text-[#6B7280] bg-[#F9FAFB]/50">
                                    {metric.label}
                                </td>
                                {items.map((item, idx) => (
                                    <td key={idx} className="p-[24px] text-[15px] font-[600] text-[#111827]">
                                        {metric.format ? metric.format(item[metric.key]) : item[metric.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}
