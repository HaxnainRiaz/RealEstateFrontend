
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import { MOCK_REQUESTS, MOCK_ASSETS } from '@/lib/mockData';

export default function LandlordTenantScreeningPage() {
    return (
        <div className="space-y-[40px]">
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Candidate Audit</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Tenant Screening Hub</h1>
                <p className="text-[16px] text-[#6B7280]">Advanced credential verification and behavioral forensics for prospective nodes.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[32px]">
                {[
                    { label: "Pending Audits", val: "12 Candidates", sub: "Priority: High" },
                    { label: "Avg Trust Score", val: "88/100", sub: "+4 pts this month" },
                    { label: "Pass Rate", val: "24%", sub: "Institutional Standard" }
                ].map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] text-center">
                            <p className="text-[10px] font-[700] text-[#6B7280] uppercase tracking-[0.1em] mb-[12px]">{stat.label}</p>
                            <h3 className="text-[28px] font-[700] text-[#111827] mb-[4px]">{stat.val}</h3>
                            <p className="text-[12px] font-[600] text-[#1D4ED8]">{stat.sub}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="bg-[#FFFFFF] rounded-[16px] border border-[#D1D5DB]/30 overflow-hidden shadow-sm">
                <div className="p-[24px] border-b border-[#D1D5DB]/20 bg-[#F9FAFB]/50 flex justify-between items-center">
                    <h3 className="text-[18px] font-[700] text-[#111827]">Active Screening Queue</h3>
                    <div className="flex gap-[12px]">
                        <button className="px-[16px] py-[8px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[6px] text-[12px] font-[700] text-[#6B7280]">Filter Signals</button>
                    </div>
                </div>
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-[#F9FAFB] border-b border-[#D1D5DB]/50">
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Candidate Node</th>
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Target Asset</th>
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Forensic Score</th>
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280]">Audit Status</th>
                            <th className="p-[20px] text-[11px] font-[700] uppercase text-[#6B7280] text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#D1D5DB]/20">
                        {MOCK_REQUESTS.map((req) => {
                            const asset = MOCK_ASSETS.find(a => a.id === req.assetId);
                            const score = Math.floor(Math.random() * 30 + 70);
                            return (
                                <tr key={req.id} className="hover:bg-[#F9FAFB]/50 transition-colors group">
                                    <td className="p-[20px]">
                                        <div className="flex items-center gap-[12px]">
                                            <div className="w-[36px] h-[36px] bg-[#1D4ED8]/10 rounded-full flex items-center justify-center text-[#1D4ED8] font-[700]">T</div>
                                            <div>
                                                <p className="text-[14px] font-[700] text-[#111827]">Prospective T-{req.id.split('-')[1]}</p>
                                                <p className="text-[11px] text-[#6B7280]">Signal ID: {req.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-[20px]">
                                        <p className="text-[14px] font-[600] text-[#111827]">{asset?.title}</p>
                                        <p className="text-[11px] text-[#6B7280]">{asset?.category}</p>
                                    </td>
                                    <td className="p-[20px]">
                                        <div className="flex items-center gap-[8px]">
                                            <span className={`text-[15px] font-[700] ${score > 85 ? 'text-[#10B981]' : 'text-[#F59E0B]'}`}>{score}</span>
                                            <div className="w-[40px] h-[4px] bg-[#F3F4F6] rounded-full overflow-hidden">
                                                <div className={`h-full ${score > 85 ? 'bg-[#10B981]' : 'bg-[#F59E0B]'}`} style={{ width: `${score}%` }} />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-[20px]">
                                        <span className="px-[10px] py-[4px] bg-[#1D4ED8]/10 text-[#1D4ED8] text-[10px] font-[700] uppercase rounded-[4px]">
                                            Analysis Active
                                        </span>
                                    </td>
                                    <td className="p-[20px] text-right">
                                        <button className="px-[16px] py-[8px] bg-[#111827] text-white text-[12px] font-[700] rounded-[6px] hover:bg-[#1D4ED8] transition-all">
                                            Deep Audit
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px]">
                <Card className="bg-[#111827] border-none p-[48px] text-white">
                    <h3 className="text-[20px] font-[700] mb-[32px]">Screening Parameters</h3>
                    <div className="space-y-[24px]">
                        {[
                            { t: "Yield-to-Debt Ratio", d: "Candidates must exhibit >3.5x annual revenue coverage." },
                            { t: "Institutional Pulse", d: "Prior engagement forensics must show zero delinquency clusters." },
                            { t: "Identity Cryptography", d: "Biometric and credential nodes must be Tier-1 verified." }
                        ].map(p => (
                            <div key={p.t} className="space-y-[8px]">
                                <h4 className="text-[16px] font-[700] text-[#1D4ED8]">{p.t}</h4>
                                <p className="text-[14px] text-white/50 leading-[1.6]">{p.d}</p>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px] flex flex-col justify-center text-center space-y-[24px]">
                    <div className="w-[80px] h-[80px] bg-[#1D4ED8]/5 rounded-full flex items-center justify-center mx-auto text-[#1D4ED8]">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    </div>
                    <div>
                        <h3 className="text-[22px] font-[700] text-[#111827]">Automated Guardrails Active</h3>
                        <p className="text-[15px] text-[#6B7280] max-w-[400px] mx-auto leading-[1.6]">
                            Your instance is currently protected by platform-wide AI screening protocols which filter 82% of unqualified signals automatically.
                        </p>
                    </div>
                    <div className="flex justify-center gap-[16px]">
                        <button className="px-[24px] py-[14px] bg-[#111827] text-white font-[700] rounded-[8px] hover:bg-[#1D4ED8] transition-all text-[14px]">Configure Guardrails</button>
                    </div>
                </Card>
            </div>
        </div>
    );
}
