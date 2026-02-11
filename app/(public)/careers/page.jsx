
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '@/components/shared/layout/Section';
import Card, { CardTitle, CardDescription } from '@/components/ui/data/Card';
import PrimaryButton from '@/components/ui/button/PrimaryButton';

export default function CareersPage() {
    return (
        <div className="bg-[#FFFFFF] pt-[160px]">
            <Section>
                <div className="max-w-[800px] mb-[80px]">
                    <SectionHeader
                        subtitle="Operational Expansion"
                        title="Architect the future."
                    />
                    <p className="text-[20px] text-[#6B7280] leading-[1.6]">
                        We are looking for sophisticated engineers, data analysts, and product visionaries
                        to join our distributed network. Help us build the protocols that define 21st-century real estate.
                    </p>
                </div>

                <div className="space-y-[24px]">
                    {[
                        { role: "Founding Engineer (FE)", team: "Product Node", loc: "Remote / NY" },
                        { role: "Yield Strategy Analyst", team: "Data Forensics", loc: "Remote / LDN" },
                        { role: "Protocol Security Specialist", team: "Infrastructure", loc: "Remote" }
                    ].map((job, i) => (
                        <motion.div
                            key={job.role}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 hover:border-[#1D4ED8] transition-all cursor-pointer group p-[40px]">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-[32px]">
                                    <div>
                                        <h3 className="text-[24px] font-[700] text-[#111827] mb-[8px] group-hover:text-[#1D4ED8] transition-colors">{job.role}</h3>
                                        <div className="flex gap-[24px] text-[14px] text-[#6B7280]">
                                            <span className="font-[600] uppercase tracking-[0.05em] text-[#1D4ED8]">{job.team}</span>
                                            <span>{job.loc}</span>
                                        </div>
                                    </div>
                                    <PrimaryButton className="md:w-auto w-full">Apply Now</PrimaryButton>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Perks Callout */}
            <Section className="bg-[#F9FAFB]">
                <SectionHeader
                    subtitle="The Reward"
                    title="Designed for high-velocity talent."
                    centered
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
                    {[
                        { title: "Distributed First", desc: "Work from anywhere in the global node network." },
                        { title: "Deep Focus", desc: "4-day work weeks for architectural engineering roles." },
                        { title: "Equity Yield", desc: "Performance-linked tokens and traditional equity options." }
                    ].map((p, i) => (
                        <div key={i} className="text-center">
                            <div className="text-[20px] font-[700] text-[#111827] mb-[12px]">{p.title}</div>
                            <p className="text-[14px] text-[#6B7280] leading-[1.6]">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
