"use client";

import React, { useState } from 'react';
import Card from '@/components/ui/data/Card';
import { motion, AnimatePresence } from 'framer-motion';

const DOCS = [
    { title: "Proof of Income", desc: "Pay stubs from last 3 months", status: "uploaded" },
    { title: "Background Check", desc: "Authorization form", status: "pending" },
    { title: "Reference Letter", desc: "From previous landlord", status: "rejected" }
];

export default function DocumentChecklist() {
    return (
        <Card className="p-[32px] bg-[#FFFFFF] rounded-[16px] border border-[#E5E7EB] mt-[32px]">
            <h3 className="text-[20px] font-[700] text-[#111827] mb-[24px]">Required Documentation</h3>

            <div className="space-y-[16px]">
                {DOCS.map((doc, idx) => (
                    <motion.div
                        key={idx}
                        layout
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center justify-between p-[16px] bg-[#F9FAFB] rounded-[12px] border border-[#F3F4F6] hover:bg-[#F3F4F6] transition-colors"
                    >
                        <div className="flex items-center gap-[16px]">
                            <div className={`w-[32px] h-[32px] rounded-full flex items-center justify-center 
                                ${doc.status === 'uploaded' ? 'bg-[#10B981]/10 text-[#10B981]'
                                    : doc.status === 'rejected' ? 'bg-[#EF4444]/10 text-[#EF4444]'
                                        : 'bg-[#E5E7EB] text-[#9CA3AF]'}`}>
                                {doc.status === 'uploaded' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                                {doc.status === 'rejected' && <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>}
                                {doc.status === 'pending' && <span className="w-[8px] h-[8px] rounded-full bg-[#9CA3AF]" />}
                            </div>
                            <div>
                                <h4 className="text-[14px] font-[600] text-[#111827]">{doc.title}</h4>
                                <p className="text-[12px] text-[#6B7280]">{doc.desc}</p>
                            </div>
                        </div>

                        {doc.status !== 'uploaded' ? (
                            <button className="text-[12px] font-[600] text-[#1D4ED8] hover:underline">
                                {doc.status === 'rejected' ? 'Re-upload' : 'Upload'}
                            </button>
                        ) : (
                            <button className="text-[12px] font-[500] text-[#6B7280] hover:text-[#111827]">
                                View
                            </button>
                        )}
                    </motion.div>
                ))}
            </div>
        </Card>
    );
}
