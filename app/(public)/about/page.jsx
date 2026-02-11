
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '@/components/shared/layout/Section';
import Card, { CardTitle, CardDescription } from '@/components/ui/data/Card';

export default function AboutPage() {
    return (
        <div className="bg-[#FFFFFF]">
            {/* Narrative Hero */}
            <section className="pt-[200px] pb-[120px] px-[80px] bg-[#F9FAFB]">
                <div className="max-w-[1240px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-[800px]"
                    >
                        <span className="text-[#1D4ED8] text-[14px] font-[600] uppercase tracking-[0.05em] mb-[12px] block">Our Mission</span>
                        <h1 className="text-[56px] font-[700] text-[#111827] leading-[1.1] tracking-[-0.01em] mb-[32px]">
                            Defining the <span className="text-[#1D4ED8]">future</span> of <br />Institutional Real Estate.
                        </h1>
                        <p className="text-[20px] text-[#6B7280] leading-[1.6]">
                            We believe that professional-grade real estate management shouldn't be reserved for the few.
                            Tirios MVP was built to democratize institutional technology, making property interactions
                            seamless, secure, and sophisticated for everyone.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy */}
            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px]">
                    <div>
                        <h2 className="text-[36px] font-[700] text-[#111827] mb-[24px]">Technology with a soul.</h2>
                        <p className="text-[18px] text-[#6B7280] leading-[1.6]">
                            Our approach balances high-velocity technical innovation with a calm, premium user experience.
                            We don't just build software; we architect ecosystems of trust.
                        </p>
                    </div>
                    <div className="space-y-[48px]">
                        {[
                            { title: "Transparency", desc: "Every transaction, request, and data point is accessible and verifiable." },
                            { title: "Efficiency", desc: "Automating the mundane to allow for human-scale interactions." },
                            { title: "Security", desc: "Enterprise-grade protection for your identity and your assets." }
                        ].map((v, i) => (
                            <div key={i} className="flex gap-[24px]">
                                <div className="text-[24px] font-[700] text-[#1D4ED8]/20">0{i + 1}</div>
                                <div>
                                    <h4 className="text-[20px] font-[700] text-[#111827] mb-[8px]">{v.title}</h4>
                                    <p className="text-[16px] text-[#6B7280] leading-[1.6]">{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Impact Section */}
            <Section className="bg-[#1D4ED8] text-[#FFFFFF]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-[48px] text-center">
                    {[
                        { label: "Assets Managed", val: "$2.4B+" },
                        { label: "Active Listings", val: "12,000" },
                        { label: "Tenant Satisfaction", val: "94%" },
                        { label: "Security Incidents", val: "0" }
                    ].map((stat, i) => (
                        <div key={i}>
                            <div className="text-[40px] font-[700] mb-[8px]">{stat.val}</div>
                            <div className="text-[14px] font-[600] uppercase tracking-[0.05em] text-[#FFFFFF]/60">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
