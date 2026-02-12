
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import PrimaryButton from '@/components/ui/button/PrimaryButton';

import { BackButton } from '@/components/ui/navigation';

export default function TenantDocumentUploadPage() {
    const [isUploading, setIsUploading] = useState(false);

    return (
        <div className="max-w-[800px] mx-auto space-y-[40px]">
            <BackButton href="/tenant/documents" />
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Vault Injection</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Upload Forensic Node</h1>
                <p className="text-[16px] text-[#6B7280]">Securely transmit credential evidence to the document repository.</p>
            </div>

            <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[64px] shadow-2xl text-center space-y-[40px]">
                <div className="w-full h-[320px] bg-[#F9FAFB] border border-dashed border-[#D1D5DB] rounded-[32px] flex flex-col items-center justify-center space-y-[24px] cursor-pointer hover:bg-[#F3F4F6] transition-all group">
                    <div className="w-[80px] h-[80px] bg-[#1D4ED8]/5 rounded-full flex items-center justify-center text-[#1D4ED8] group-hover:scale-110 transition-transform">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                    </div>
                    <div className="space-y-[8px]">
                        <h3 className="text-[20px] font-[700] text-[#111827]">Signal Inbound Node</h3>
                        <p className="text-[14px] text-[#6B7280]">Drag and drop your PDF or JPG forensic evidence here.</p>
                    </div>
                    <p className="text-[12px] text-[#D1D5DB] font-[600]">Maximum Payload: 25MB • Encrypted via AES-256</p>
                </div>

                <div className="grid grid-cols-2 gap-[24px] text-left">
                    <div className="space-y-[8px]">
                        <label className="text-[14px] font-[600] text-[#111827]">Category Node</label>
                        <select className="w-full px-[20px] py-[16px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] focus:outline-none focus:border-[#1D4ED8]">
                            <option>Identity Evidence</option>
                            <option>Financial Forensics</option>
                            <option>Structural References</option>
                        </select>
                    </div>
                    <div className="space-y-[8px]">
                        <label className="text-[14px] font-[600] text-[#111827]">Expiration Protocol (Optional)</label>
                        <input type="date" className="w-full px-[20px] py-[16px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] focus:outline-none focus:border-[#1D4ED8]" />
                    </div>
                </div>

                <div className="pt-[24px] flex justify-center">
                    <PrimaryButton className="px-[64px] h-[64px]" onClick={() => setIsUploading(true)} loading={isUploading}>
                        Inject Forensic Node
                    </PrimaryButton>
                </div>
            </Card>

            <div className="p-[32px] bg-[#111827] rounded-[24px] text-[#FFFFFF] flex items-center justify-between">
                <div className="flex gap-[16px]">
                    <div className="w-[12px] h-[12px] bg-[#10B981] rounded-full mt-[4px] shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                    <div>
                        <p className="text-[15px] font-[700]">End-to-End Encryption Active</p>
                        <p className="text-[13px] text-[#FFFFFF]/40">Your data is being processed via secure institutional nodes.</p>
                    </div>
                </div>
                <button className="text-[13px] font-[700] text-[#FFFFFF]/60 hover:text-[#FFFFFF]">Audit Security Protocol</button>
            </div>
        </div>
    );
}
