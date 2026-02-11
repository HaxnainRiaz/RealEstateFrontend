
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '@/components/shared/layout/Section';
import Card, { CardTitle, CardDescription } from '@/components/ui/data/Card';
import { FiShield, FiLock, FiGlobe, FiUsers, FiHexagon, FiZap } from 'react-icons/fi';

export default function AboutPage() {
    return (
        <div className="bg-[#FFFFFF]">
            {/* Governance Hero Section with BG Image */}
            <section className="relative pt-[240px] pb-[160px] overflow-hidden bg-[#0A0F1C]">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0" />
                </div>

                <div className="max-w-[1240px] mx-auto relative z-10 px-[40px]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-[850px]"
                    >
                        <span className="inline-flex items-center gap-[8px] px-[16px] py-[6px] bg-[#0066FF] text-white text-[11px] font-[800] uppercase tracking-[0.2em] rounded-full mb-[32px]">
                            <FiShield className="w-[14px] h-[14px]" />
                            The Governance Layer
                        </span>
                        <h1 className="text-[72px] font-[900] text-[#FFFFFF] leading-[1.05] tracking-tight mb-[40px]">
                            Architecting <br /><span className="text-[#0066FF]">Systemic Trust.</span>
                        </h1>
                        <p className="text-[22px] text-[#94A3B8] leading-[1.6]">
                            Tirios MVP is governed by a decentralized set of institutional protocols,
                            ensuring that every transaction remains ethical, transparent, and immutable.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Nodes */}
            <Section className="py-[120px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[100px]">
                    <div>
                        <div className="flex items-center gap-[12px] mb-[28px]">
                            <div className="w-[48px] h-[2px] bg-[#0066FF]" />
                            <span className="text-[13px] font-[900] text-[#0066FF] uppercase tracking-[0.2em]">Our Mandate</span>
                        </div>
                        <h2 className="text-[48px] font-[900] text-[#0F172A] mb-[32px] tracking-tight leading-tight">Technology <br />with Integrity.</h2>
                        <p className="text-[20px] text-[#64748B] leading-[1.7] mb-[48px]">
                            We balance high-velocity innovation with a deep commitment to systemic stability.
                            Governance isn't an afterthought; it's the core of our technical DNA.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[32px]">
                            {[
                                { label: "Network Uptime", val: "99.99%" },
                                { label: "Trust Index", val: "A+" }
                            ].map(stat => (
                                <div key={stat.label} className="bg-[#F8FAFC] p-[32px] rounded-[24px] border border-[#E2E8F0]">
                                    <div className="text-[32px] font-[900] text-[#0066FF] mb-[8px]">{stat.val}</div>
                                    <div className="text-[12px] font-[800] text-[#64748B] uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-[40px]">
                        {[
                            { title: "Transparency", icon: FiGlobe, desc: "Immutable trail of all operational signals and financial transmissions." },
                            { title: "Efficiency", icon: FiZap, desc: "Automating validation nodes to ensure human-scale decision making." },
                            { title: "Security", icon: FiLock, desc: "Hardware-level security for every resident and asset credential." }
                        ].map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-[32px] group"
                            >
                                <div className="w-[64px] h-[64px] bg-[#F8FAFC] rounded-[20px] flex items-center justify-center text-[#64748B] group-hover:bg-[#0066FF] group-hover:text-white group-hover:scale-110 shadow-sm transition-all duration-500 flex-shrink-0">
                                    <v.icon className="w-[28px] h-[28px]" />
                                </div>
                                <div>
                                    <h4 className="text-[22px] font-[900] text-[#0F172A] mb-[12px] tracking-tight group-hover:text-[#0066FF] transition-colors">{v.title}</h4>
                                    <p className="text-[17px] text-[#64748B] leading-[1.6]">{v.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Impact & Global Stat Nodes */}
            <Section className="bg-[#0A0F1C] py-[120px] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0066FF]/30 to-transparent" />
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[64px] relative z-10">
                    {[
                        { label: "Assets Governed", val: "$2.4B+", icon: FiHexagon },
                        { label: "Active Nodes", val: "12,000", icon: FiGlobe },
                        { label: "Integrity Score", val: "94%", icon: FiShield },
                        { label: "Secured Credentials", val: "0 Leakage", icon: FiUsers }
                    ].map((stat, i) => (
                        <div key={i} className="text-center group">
                            <stat.icon className="w-[32px] h-[32px] text-[#0066FF] mx-auto mb-[24px] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                            <div className="text-[48px] font-[900] text-[#FFFFFF] mb-[12px] tracking-tight">{stat.val}</div>
                            <div className="text-[12px] font-[800] uppercase tracking-[0.2em] text-[#94A3B8]">{stat.label}</div>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0066FF]/30 to-transparent" />
            </Section>

            {/* Council Section */}
            <Section className="py-[160px]">
                <div className="text-center max-w-[800px] mx-auto mb-[80px]">
                    <h2 className="text-[42px] font-[900] text-[#0F172A] mb-[24px] tracking-tight">The Governance Council.</h2>
                    <p className="text-[19px] text-[#64748B] leading-[1.6]">
                        Overseen by leaders across urban planning, technical infrastructure, and financial ethics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
                    {[
                        { name: "Urban Mechanics", role: "Structural Integrity" },
                        { name: "Neural Safety", role: "AI & Auditing" },
                        { name: "Capital Ethics", role: "Financial Governance" }
                    ].map(member => (
                        <div key={member.name} className="bg-white border border-[#E2E8F0] p-[40px] rounded-[32px] hover:border-[#0066FF] hover:shadow-xl transition-all group">
                            <div className="w-[80px] h-[80px] bg-[#F1F5F9] rounded-[24px] mb-[32px] group-hover:bg-[#0066FF]/10 transition-colors" />
                            <h4 className="text-[20px] font-[900] text-[#0F172A] mb-[4px]">{member.name}</h4>
                            <p className="text-[14px] font-[800] text-[#0066FF] uppercase tracking-wider">{member.role}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
