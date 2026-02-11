
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MOCK_ASSETS } from '@/lib/mockData';
import Card, { CardTitle, CardDescription } from '@/components/ui/data/Card';
import Link from 'next/link';
import PrimaryButton from '@/components/ui/button/PrimaryButton';

export default function LandlordListingsPage() {
    return (
        <div className="space-y-[40px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px]">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Inventory Control</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Managed Assets</h1>
                    <p className="text-[16px] text-[#6B7280]">Structural analysis and status of your property portfolio.</p>
                </div>
                <Link href="/landlord/listings/create">
                    <PrimaryButton className="h-[48px] px-[24px]">Add New Asset</PrimaryButton>
                </Link>
            </div>

            <div className="bg-[#FFFFFF] rounded-[16px] border border-[#D1D5DB]/30 overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#F9FAFB] border-b border-[#D1D5DB]/50">
                            <th className="p-[20px] text-[12px] font-[700] uppercase tracking-[0.1em] text-[#6B7280]">Asset Node</th>
                            <th className="p-[20px] text-[12px] font-[700] uppercase tracking-[0.1em] text-[#6B7280]">Status</th>
                            <th className="p-[20px] text-[12px] font-[700] uppercase tracking-[0.1em] text-[#6B7280]">Yield</th>
                            <th className="p-[20px] text-[12px] font-[700] uppercase tracking-[0.1em] text-[#6B7280]">Settlement</th>
                            <th className="p-[20px] text-[12px] font-[700] uppercase tracking-[0.1em] text-[#6B7280] text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D1D5DB]/20">
                        {MOCK_ASSETS.map((asset) => (
                            <tr key={asset.id} className="hover:bg-[#F9FAFB]/50 transition-colors group">
                                <td className="p-[20px]">
                                    <div className="flex items-center gap-[16px]">
                                        <div className="w-[48px] h-[48px] bg-[#F3F4F6] rounded-[8px] flex-shrink-0" />
                                        <div>
                                            <p className="font-[700] text-[#111827]">{asset.title}</p>
                                            <p className="text-[12px] text-[#6B7280]">{asset.address}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-[20px]">
                                    <span className={`px-[10px] py-[4px] rounded-[4px] text-[11px] font-[700] uppercase ${asset.status === 'available' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-[#1D4ED8]/10 text-[#1D4ED8]'}`}>
                                        {asset.status}
                                    </span>
                                </td>
                                <td className="p-[20px]">
                                    <p className="font-[700] text-[#111827]">{asset.yield}</p>
                                    <p className="text-[11px] text-[#6B7280]">Annual IRR</p>
                                </td>
                                <td className="p-[20px]">
                                    <p className="font-[700] text-[#111827]">${asset.price.toLocaleString()}</p>
                                    <p className="text-[11px] text-[#6B7280]">Monthly Assessment</p>
                                </td>
                                <td className="p-[20px] text-right">
                                    <div className="flex justify-end gap-[8px]">
                                        <Link href={`/landlord/listings/${asset.id}`}>
                                            <button className="px-[16px] py-[8px] bg-[#FFFFFF] border border-[#D1D5DB] text-[13px] font-[600] rounded-[6px] hover:bg-[#F9FAFB] transition-all">
                                                Forensics
                                            </button>
                                        </Link>
                                        <button className="px-[16px] py-[8px] bg-[#111827] text-[#FFFFFF] text-[13px] font-[600] rounded-[6px] hover:bg-[#1D4ED8] transition-all">
                                            Edit
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
                {[
                    { label: "Pipeline Velocity", val: "High" },
                    { label: "Market Delta", val: "+2.4%" },
                    { label: "Active Audit Nodes", val: "12" }
                ].map(item => (
                    <Card key={item.label} className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px]">
                        <p className="text-[11px] font-[700] text-[#6B7280] uppercase tracking-[0.05em] mb-[4px]">{item.label}</p>
                        <p className="text-[20px] font-[700] text-[#111827]">{item.val}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}
