
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Section, { SectionHeader } from '@/components/shared/layout/Section';
import Card, { CardTitle } from '@/components/ui/data/Card';

const MOCK_PROPERTIES = [
    { id: '1', title: 'The Skyview Loft', price: '$4,200', yield: '5.2%', score: '94' },
    { id: '2', title: 'Industrial Quarter', price: '$3,850', yield: '6.1%', score: '88' },
    { id: '3', title: 'Central Park Suite', price: '$5,900', yield: '4.8%', score: '92' },
];

export default function ForensicComparisonPage() {
    const { ids } = useParams();
    // In a real app, we'd filter based on the comma-separated IDs

    return (
        <div className="bg-[#FFFFFF] pt-[160px]">
            <Section>
                <Link href="/compare" className="text-[14px] font-[600] text-[#1D4ED8] uppercase tracking-[0.05em] mb-[24px] block hover:text-[#2563EB]">
                    ← Back to Analysis Hub
                </Link>
                <SectionHeader
                    subtitle="Structural Audit"
                    title="Asset Forensics Comparison"
                />

                <div className="mt-[64px] overflow-x-auto">
                    <table className="w-full text-left border-collapse border-separate border-spacing-0">
                        <thead>
                            <tr>
                                <th className="p-[32px] bg-[#F9FAFB] border-b border-[#D1D5DB]/50 text-[12px] font-[700] uppercase tracking-[0.1em] text-[#6B7280]">Metric</th>
                                {MOCK_PROPERTIES.map(p => (
                                    <th key={p.id} className="p-[32px] bg-[#FFFFFF] border-b border-[#D1D5DB]/50 min-w-[300px]">
                                        <h4 className="text-[20px] font-[700] text-[#111827]">{p.title}</h4>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { label: "Monthly Commitment", key: "price" },
                                { label: "Institutional Yield", key: "yield" },
                                { label: "Trust Score (AI)", key: "score" }
                            ].map((row, i) => (
                                <tr key={row.label} className="group">
                                    <td className="p-[32px] border-b border-[#D1D5DB]/20 text-[14px] font-[600] text-[#111827] bg-[#F9FAFB]/50">
                                        {row.label}
                                    </td>
                                    {MOCK_PROPERTIES.map(p => (
                                        <td key={p.id} className="p-[32px] border-b border-[#D1D5DB]/20 text-[18px] font-[700] text-[#1D4ED8]">
                                            {p[row.key]}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            <tr>
                                <td className="p-[32px] bg-[#F9FAFB]/50">Action Node</td>
                                {MOCK_PROPERTIES.map(p => (
                                    <td key={p.id} className="p-[32px]">
                                        <Link href={`/tenant/listings/${p.id}`}>
                                            <button className="w-full py-[12px] bg-[#111827] text-[#FFFFFF] font-[600] rounded-[8px] hover:bg-[#1D4ED8] transition-all">
                                                Initiate Application
                                            </button>
                                        </Link>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-[80px] p-[64px] bg-[#1D4ED8]/5 rounded-[32px] border border-dashed border-[#1D4ED8]/30">
                    <h3 className="text-[20px] font-[700] text-[#1D4ED8] mb-[16px]">Neural Selection Guidance</h3>
                    <p className="text-[16px] text-[#6B7280] leading-[1.6]">
                        Our matching engine identifies **{MOCK_PROPERTIES[0].title}** as the optimal asset for your current credential profile,
                        balancing yield stability with commute offsets.
                    </p>
                </div>
            </Section>
        </div>
    );
}
