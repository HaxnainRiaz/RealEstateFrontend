
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import { MOCK_ASSETS } from '@/lib/mockData';

const LEASES = [
    { id: 'LSE-001', assetId: '1', resident: 'Dr. Alexander Hoffman', end: 'Oct 2024', status: 'Active', renewal: 'Pending Audit' },
    { id: 'LSE-002', assetId: '3', resident: 'Sarah Sterling', end: 'Dec 2023', status: 'Expiring Soon', renewal: 'In Negotiation' },
    { id: 'LSE-003', assetId: '4', resident: 'Enterprise Node #42', end: 'May 2025', status: 'Active', renewal: '' }
];

export default function LandlordLeaseManagementPage() {
    return (
        <div className="space-y-[40px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px]">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Contract Execution</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Lease Management</h1>
                    <p className="text-[16px] text-[#6B7280]">Administrative control of all structural occupancy contracts and renewal protocols.</p>
                </div>
                <button className="px-[24px] py-[12px] bg-[#111827] text-white rounded-[8px] text-[14px] font-[700] hover:bg-[#1D4ED8] transition-all">Generate New Contract</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[40px]">
                {/* Active Contracts */}
                <div className="lg:col-span-8 space-y-[24px]">
                    <div className="bg-[#FFFFFF] rounded-[16px] border border-[#D1D5DB]/30 overflow-hidden shadow-sm">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-[#F9FAFB] border-b border-[#D1D5DB]/50">
                                    <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Contract ID</th>
                                    <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Resident</th>
                                    <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Expiration</th>
                                    <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Status</th>
                                    <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280] text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#D1D5DB]/20">
                                {LEASES.map((lse) => {
                                    const asset = MOCK_ASSETS.find(a => a.id === lse.assetId);
                                    return (
                                        <tr key={lse.id} className="hover:bg-[#F9FAFB]/50 transition-colors">
                                            <td className="p-[20px]">
                                                <p className="text-[14px] font-[700] text-[#111827]">{lse.id}</p>
                                                <p className="text-[11px] text-[#6B7280]">{asset?.title}</p>
                                            </td>
                                            <td className="p-[20px] text-[14px] text-[#6B7280] font-[600]">{lse.resident}</td>
                                            <td className="p-[20px] text-[14px] text-[#111827] font-[700]">{lse.end}</td>
                                            <td className="p-[20px]">
                                                <span className={`px-[10px] py-[4px] rounded-[4px] text-[10px] font-[800] uppercase ${lse.status === 'Active' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-[#EF4444]/10 text-[#EF4444]'}`}>
                                                    {lse.status}
                                                </span>
                                            </td>
                                            <td className="p-[20px] text-right">
                                                <button className="text-[13px] font-[700] text-[#1D4ED8] hover:underline">Execute Audit</button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Renewal Forensics */}
                <div className="lg:col-span-4 space-y-[40px]">
                    <Card className="bg-[#111827] border-none p-[40px] text-white shadow-xl">
                        <h3 className="text-[18px] font-[700] mb-[24px]">Renewal Pipeline</h3>
                        <div className="space-y-[32px]">
                            {LEASES.filter(l => l.renewal).map(l => (
                                <div key={l.id} className="p-[20px] bg-white/5 rounded-[12px] border border-white/10 space-y-[12px]">
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-[14px] font-[700]">{l.resident}</h4>
                                        <span className="text-[10px] font-[800] uppercase text-[#1D4ED8] bg-white px-[8px] py-[2px] rounded-[4px]">{l.renewal}</span>
                                    </div>
                                    <p className="text-[12px] text-white/50">{l.id} • Target: {l.end}</p>
                                    <button className="w-full py-[10px] bg-white text-[#111827] text-[12px] font-[700] rounded-[6px] hover:bg-[#1D4ED8] hover:text-white transition-all">Initiate Protocol</button>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[40px] text-center space-y-[24px]">
                        <div className="w-[64px] h-[64px] bg-[#F9FAFB] rounded-full mx-auto flex items-center justify-center text-[#D1D5DB]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                        </div>
                        <div>
                            <h4 className="text-[16px] font-[700] text-[#111827]">Compliance Ledger</h4>
                            <p className="text-[13px] text-[#6B7280] leading-[1.6]">
                                All active contracts adhere to the latest institutional regulatory forensics for Q4 2023.
                            </p>
                        </div>
                        <button className="text-[13px] font-[700] text-[#1D4ED8] hover:underline">Download Compliance Pack →</button>
                    </Card>
                </div>
            </div>
        </div>
    );
}
