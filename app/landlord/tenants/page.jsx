
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import { MOCK_ASSETS } from '@/lib/mockData';

const MOCK_TENANTS = [
    { id: 'T-1', name: 'Johnathan Doe', assetId: '1', status: 'In Good Standing', quality: '98', balance: '$0.00' },
    { id: 'T-2', name: 'Alina Sterling', assetId: '3', status: 'Assessment Due', quality: '82', balance: '$2,850.00' }
];

export default function LandlordTenantsPage() {
    return (
        <div className="space-y-[40px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px]">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Resident Forensics</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Active Tenants</h1>
                    <p className="text-[16px] text-[#6B7280]">Monitor credentialed residents and structural payment integrity.</p>
                </div>
                <button className="px-[24px] py-[12px] bg-[#111827] text-[#FFFFFF] text-[14px] font-[600] rounded-[8px] hover:bg-[#1D4ED8] transition-all">
                    Audit All Credentials
                </button>
            </div>

            <div className="bg-[#FFFFFF] rounded-[16px] border border-[#D1D5DB]/30 overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#F9FAFB] border-b border-[#D1D5DB]/50">
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Resident</th>
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Asset Node</th>
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Quality Score</th>
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Outstanding</th>
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Status</th>
                            <th className="p-[20px] text-right text-[11px] font-[700] uppercase text-[#6B7280]">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D1D5DB]/20">
                        {MOCK_TENANTS.map((tenant) => {
                            const asset = MOCK_ASSETS.find(a => a.id === tenant.assetId);
                            return (
                                <tr key={tenant.id} className="hover:bg-[#F9FAFB]/50 transition-colors">
                                    <td className="p-[20px]">
                                        <div className="flex items-center gap-[12px]">
                                            <div className="w-[36px] h-[36px] bg-[#1D4ED8]/10 rounded-full flex items-center justify-center text-[#1D4ED8] font-[700] text-[12px]">
                                                {tenant.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-[14px] font-[700] text-[#111827]">{tenant.name}</p>
                                                <p className="text-[11px] text-[#6B7280]">ID: {tenant.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-[20px]">
                                        <p className="text-[14px] font-[600] text-[#111827]">{asset?.title}</p>
                                        <p className="text-[11px] text-[#6B7280]">{asset?.address}</p>
                                    </td>
                                    <td className="p-[20px]">
                                        <span className={`text-[15px] font-[700] ${parseInt(tenant.quality) > 90 ? 'text-[#10B981]' : 'text-[#F59E0B]'}`}>
                                            {tenant.quality}
                                        </span>
                                    </td>
                                    <td className="p-[20px]">
                                        <p className="text-[14px] font-[700] text-[#111827]">{tenant.balance}</p>
                                    </td>
                                    <td className="p-[20px]">
                                        <span className={`px-[10px] py-[4px] border rounded-[4px] text-[10px] font-[700] uppercase ${tenant.status === 'In Good Standing' ? 'bg-[#10B981]/5 text-[#10B981] border-[#10B981]/20' : 'bg-[#EF4444]/5 text-[#EF4444] border-[#EF4444]/20'}`}>
                                            {tenant.status}
                                        </span>
                                    </td>
                                    <td className="p-[20px] text-right">
                                        <button className="text-[13px] font-[600] text-[#1D4ED8] hover:underline">View Forensic Node</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
