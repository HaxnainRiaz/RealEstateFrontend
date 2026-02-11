
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';

const TEMPLATES = [
    { id: '1', title: 'Income Verification Node', desc: 'Standard template for presenting verified financial yields.', type: 'Financial' },
    { id: '2', title: 'Structural Usage Affidavit', desc: 'Legal declaration of intended residential application.', type: 'Legal' },
    { id: '3', title: 'Resident Reference Protocol', desc: 'Framework for historical institutional performance indicators.', type: 'Verification' }
];

export default function TenantDocumentTemplatesPage() {
    return (
        <div className="space-y-[40px]">
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Standardized Logic</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Document Templates</h1>
                <p className="text-[16px] text-[#6B7280]">Pre-constructed forensic nodes for rapid credentialing.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
                {TEMPLATES.map((tpl, i) => (
                    <motion.div
                        key={tpl.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] hover:border-[#1D4ED8] transition-all group h-full flex flex-col justify-between">
                            <div className="space-y-[20px]">
                                <div className="px-[10px] py-[4px] bg-[#F3F4F6] text-[#6B7280] text-[10px] font-[700] uppercase rounded-[4px] inline-block">
                                    {tpl.type} Node
                                </div>
                                <h3 className="text-[18px] font-[700] text-[#111827]">{tpl.title}</h3>
                                <p className="text-[14px] text-[#6B7280] leading-[1.6]">{tpl.desc}</p>
                            </div>

                            <div className="mt-[32px] pt-[24px] border-t border-[#D1D5DB]/20">
                                <button className="w-full py-[12px] bg-[#111827] text-[#FFFFFF] font-[600] rounded-[8px] hover:bg-[#1D4ED8] transition-all">
                                    Initialize Template
                                </button>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
