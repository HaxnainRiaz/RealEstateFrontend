
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '@/components/ui/data/Card';

const FAQS = [
    {
        category: "Financial Protocols",
        items: [
            { q: "How is my institutional yield calculated?", a: "We utilize 90-day sentiment analysis and neighborhood forensics to project market delta and resident alignment scores." },
            { q: "When are monthly assessments due?", a: "All settlements are initialized on the 1st of each month and must be locked in by the 5th to maintain trust node integrity." }
        ]
    },
    {
        category: "Structural Usage",
        items: [
            { q: "Can I modify my asset node?", a: "Any structural modifications must be signaled via the Maintenance Node and approved by the Management Entity." },
            { q: "What is the policy on additional residents?", a: "Credentialed residents can be added to the node after a structural occupancy audit." }
        ]
    },
    {
        category: "Credentialing",
        items: [
            { q: "How do I improve my trust score?", a: "Maintaining settlement velocity and ensuring accurate identity forensics are the primary vectors for score optimization." }
        ]
    }
];

import { BackButton } from '@/components/ui/navigation';

export default function TenantFAQPage() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="space-y-[64px] max-w-[900px]">
            <BackButton href="/tenant/support" />
            <div className="space-y-[16px]">
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] block">Knowledge Retrieval</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Frequently Asked Questions</h1>
                <p className="text-[16px] text-[#6B7280]">Direct answers to structural and operational queries.</p>
            </div>

            <div className="space-y-[48px]">
                {FAQS.map((cat, catIdx) => (
                    <div key={cat.category} className="space-y-[24px]">
                        <h2 className="text-[20px] font-[700] text-[#111827] flex items-center gap-[12px]">
                            <div className="w-[8px] h-[8px] bg-[#1D4ED8] rounded-full" />
                            {cat.category}
                        </h2>
                        <div className="space-y-[16px]">
                            {cat.items.map((faq, faqIdx) => {
                                const globalIdx = `${catIdx}-${faqIdx}`;
                                const isOpen = openIndex === globalIdx;
                                return (
                                    <Card
                                        key={faq.q}
                                        className={`bg-[#FFFFFF] border-[#D1D5DB]/30 overflow-hidden transition-all duration-300 ${isOpen ? 'ring-2 ring-[#1D4ED8]/20 border-[#1D4ED8]' : ''}`}
                                    >
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : globalIdx)}
                                            className="w-full text-left p-[32px] flex justify-between items-center group"
                                        >
                                            <span className="text-[16px] font-[700] text-[#111827] group-hover:text-[#1D4ED8] transition-colors">{faq.q}</span>
                                            <motion.div
                                                animate={{ rotate: isOpen ? 180 : 0 }}
                                                className="text-[#6B7280]"
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                            </motion.div>
                                        </button>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                >
                                                    <div className="px-[32px] pb-[32px] text-[15px] text-[#6B7280] leading-[1.8] border-t border-[#F3F4F6] pt-[24px]">
                                                        {faq.a}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <Card className="bg-[#111827] border-none p-[48px] text-center text-[#FFFFFF] shadow-2xl">
                <h3 className="text-[20px] font-[700] mb-[12px]">Still encounter technical anomalies?</h3>
                <p className="text-[#FFFFFF]/60 max-w-[500px] mx-auto text-[14px] leading-[1.6] mb-[32px]">
                    If your query is specific to your resident node, transmit a secure signal to the support terminal.
                </p>
                <button className="px-[32px] py-[16px] bg-[#1D4ED8] text-[#FFFFFF] font-[700] rounded-[8px] hover:bg-[#2563EB] transition-all">
                    Open Support Signal
                </button>
            </Card>
        </div>
    );
}
