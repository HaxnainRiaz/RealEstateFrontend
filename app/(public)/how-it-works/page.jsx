
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section, { SectionHeader } from '@/components/shared/layout/Section';
import PrimaryButton from '@/components/ui/button/PrimaryButton';

export default function HowItWorks() {
    const [activeRole, setActiveRole] = useState('tenant');

    const steps = {
        tenant: [
            { title: "Browse & Compare", desc: "Scan our institutional-grade inventory using refined filters and neighborhood forensics." },
            { title: "Unified Application", desc: "Submit your secure, credentialed profile once. Applied directly to any asset in our network." },
            { title: "Verifiable Onboarding", desc: "Sign digital leases and process settlements through a transparent, automated protocol." }
        ],
        landlord: [
            { title: "Inventory Deployment", desc: "List your assets with structural data precision. Sync your media and yield parameters." },
            { title: "Automated Screening", desc: "Our neural matching algorithm connects you with high-yield, qualified residents." },
            { title: "Asset Optimization", desc: "Monitor performance through real-time analytics and technical audit logs." }
        ]
    };

    return (
        <div className="bg-[#FFFFFF]">
            {/* Hero */}
            <section className="pt-[200px] pb-[80px] px-[80px] border-b border-[#D1D5DB]/20">
                <div className="max-w-[1240px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-[56px] font-[700] text-[#111827] mb-[48px]">The Real Estate Protocol.</h1>
                        <div className="flex justify-center gap-[8px] bg-[#F9FAFB] p-[8px] rounded-[12px] inline-flex border border-[#D1D5DB]/30">
                            <button
                                onClick={() => setActiveRole('tenant')}
                                className={`px-[32px] py-[12px] rounded-[8px] text-[14px] font-[600] transition-all ${activeRole === 'tenant' ? 'bg-[#1D4ED8] text-[#FFFFFF] shadow-lg' : 'text-[#6B7280]'}`}
                            >
                                For Tenants
                            </button>
                            <button
                                onClick={() => setActiveRole('landlord')}
                                className={`px-[32px] py-[12px] rounded-[8px] text-[14px] font-[600] transition-all ${activeRole === 'landlord' ? 'bg-[#1D4ED8] text-[#FFFFFF] shadow-lg' : 'text-[#6B7280]'}`}
                            >
                                For Landlords
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Interaction Steps */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[48px]">
                    <AnimatePresence mode="wait">
                        {steps[activeRole].map((step, i) => (
                            <motion.div
                                key={`${activeRole}-${i}`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative"
                            >
                                <div className="text-[120px] font-[800] text-[#F3F4F6] absolute top-[-40px] left-[-20px] z-0 leading-none select-none">
                                    {i + 1}
                                </div>
                                <div className="relative z-10 pt-[40px]">
                                    <h3 className="text-[24px] font-[700] text-[#111827] mb-[20px]">{step.title}</h3>
                                    <p className="text-[16px] text-[#6B7280] leading-[1.6]">
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </Section>

            {/* Deep Dive Callout */}
            <Section className="bg-[#F9FAFB]">
                <div className="bg-[#FFFFFF] p-[80px] rounded-[32px] border border-[#D1D5DB]/50 shadow-xl flex flex-col md:flex-row items-center gap-[80px]">
                    <div className="flex-1">
                        <h2 className="text-[36px] font-[700] text-[#111827] mb-[24px]">Engineered for scale.</h2>
                        <p className="text-[18px] text-[#6B7280] leading-[1.6] mb-[40px]">
                            Tirios MVP isn't just a dashboard; it's a foundational layer for professional property interactions.
                            Our architecture ensures that every action is performant, traceable, and secure.
                        </p>
                        <PrimaryButton>Read Documentation</PrimaryButton>
                    </div>
                    <div className="flex-1 w-full aspect-video bg-[#1D4ED8]/5 rounded-[24px] border border-dashed border-[#1D4ED8]/20" />
                </div>
            </Section>
        </div>
    );
}
