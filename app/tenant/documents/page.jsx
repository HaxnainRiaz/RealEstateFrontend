
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Card, { CardTitle } from '@/components/ui/data/Card';

export default function TenantDocumentsPage() {
    const DOCS = [
        { title: "Residential Agreement v2.1", date: "Oct 12, 2023", size: "2.4 MB", status: "Executed" },
        { title: "Property Rule Forensics", date: "Oct 12, 2023", size: "1.1 MB", status: "Archived" },
        { title: "Identity Verification Audit", date: "Oct 01, 2023", size: "0.8 MB", status: "Active" }
    ];

    return (
        <div className="space-y-[40px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px]">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Document Vault</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Secure Repository</h1>
                    <p className="text-[16px] text-[#6B7280]">Centralized node for all institutional rental documentation.</p>
                </div>
                <div className="flex gap-[16px]">
                    <Link href="/tenant/documents/templates" className="text-[14px] font-[700] text-[#6B7280] hover:text-[#111827] flex items-center gap-[6px] transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                        Standard Templates
                    </Link>
                    <Link href="/tenant/documents/shared" className="text-[14px] font-[700] text-[#6B7280] hover:text-[#111827] flex items-center gap-[6px] transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                        Shared Nodes
                    </Link>
                    <Link href="/tenant/documents/upload">
                        <button className="px-[24px] py-[12px] bg-[#111827] text-[#FFFFFF] text-[14px] font-[600] rounded-[8px] hover:bg-[#1D4ED8] transition-all">
                            Upload Forensic Node
                        </button>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
                {DOCS.map((doc, i) => (
                    <motion.div
                        key={doc.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] hover:border-[#1D4ED8] transition-all group cursor-pointer h-full flex flex-col justify-between">
                            <div>
                                <div className="w-[48px] h-[48px] bg-[#F9FAFB] rounded-[8px] flex items-center justify-center text-[#1D4ED8] mb-[24px] group-hover:bg-[#1D4ED8] group-hover:text-[#FFFFFF] transition-all">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                </div>
                                <h4 className="text-[18px] font-[700] text-[#111827] mb-[8px]">{doc.title}</h4>
                                <div className="flex items-center gap-[12px] text-[12px] text-[#6B7280]">
                                    <span>{doc.date}</span>
                                    <span>•</span>
                                    <span>{doc.size}</span>
                                </div>
                            </div>

                            <div className="mt-[32px] pt-[24px] border-t border-[#D1D5DB]/20 flex justify-between items-center">
                                <span className="px-[8px] py-[4px] bg-[#F3F4F6] text-[#6B7280] text-[10px] font-[700] uppercase rounded-[4px]">
                                    {doc.status}
                                </span>
                                <button className="text-[13px] font-[700] text-[#1D4ED8] opacity-0 group-hover:opacity-100 transition-opacity">
                                    Download →
                                </button>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <Card className="bg-[#F9FAFB] border-[#D1D5DB]/30 p-[48px] text-center max-w-[600px] mx-auto">
                <div className="w-[64px] h-[64px] bg-[#D1D5DB]/20 rounded-full flex items-center justify-center mx-auto mb-[24px]">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                </div>
                <h3 className="text-[20px] font-[700] text-[#111827] mb-[12px]">Request Documentation</h3>
                <p className="text-[14px] text-[#6B7280] leading-[1.6] mb-[32px]">
                    If you require credentialed copies of historical agreements or forensic audit trails,
                    initiate a request to the Landlord Node.
                </p>
                <button className="px-[32px] py-[14px] border border-[#D1D5DB] text-[#111827] text-[14px] font-[600] rounded-[8px] hover:bg-[#FFFFFF] transition-colors">
                    Contact Support Node
                </button>
            </Card>
        </div>
    );
}
