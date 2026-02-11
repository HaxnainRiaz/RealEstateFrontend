
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section, { SectionHeader } from '@/components/shared/layout/Section';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import {
    FiSearch,
    FiShield,
    FiZap,
    FiLayers,
    FiActivity,
    FiCpu,
    FiLock,
    FiGlobe,
    FiArrowRight
} from 'react-icons/fi';

export default function HowItWorks() {
    const [activeRole, setActiveRole] = useState('tenant');

    const steps = {
        tenant: [
            {
                title: "Browse & Compare",
                desc: "Scan our institutional-grade inventory using refined filters and neighborhood forensics.",
                icon: FiSearch,
                metrics: ["2.4s Latency", "98% Match Rate"]
            },
            {
                title: "Unified Application",
                desc: "Submit your secure, credentialed profile once. Applied directly to any asset in our network.",
                icon: FiShield,
                metrics: ["AES-256 Encrypted", "Zero-Knowledge"]
            },
            {
                title: "Verifiable Onboarding",
                desc: "Sign digital leases and process settlements through a transparent, automated protocol.",
                icon: FiZap,
                metrics: ["Instant Settlement", "Smart Contract"]
            }
        ],
        landlord: [
            {
                title: "Inventory Deployment",
                desc: "List your assets with structural data precision. Sync your media and yield parameters.",
                icon: FiLayers,
                metrics: ["Auto-Validation", "HDR Asset Mapping"]
            },
            {
                title: "Automated Screening",
                desc: "Our neural matching algorithm connects you with high-yield, qualified residents.",
                icon: FiCpu,
                metrics: ["Neural Analysis", "Compliance Verified"]
            },
            {
                title: "Asset Optimization",
                desc: "Monitor performance through real-time analytics and technical audit logs.",
                icon: FiActivity,
                metrics: ["99.9% Uptime", "Predictive Yield"]
            }
        ]
    };

    return (
        <div className="bg-[#FFFFFF]">
            {/* Hero Section with BG Image */}
            <section className="relative pt-[240px] pb-[160px] overflow-hidden bg-[#0A0F1C]">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C] via-transparent to-[#0A0F1C]" />
                </div>

                <div className="max-w-[1240px] mx-auto text-center relative z-10 px-[40px]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-flex items-center gap-[8px] px-[16px] py-[6px] bg-[#0066FF] text-white text-[11px] font-[800] uppercase tracking-[0.2em] rounded-full mb-[32px]">
                            <FiGlobe className="w-[14px] h-[14px]" />
                            The Global Protocol
                        </span>
                        <h1 className="text-[72px] font-[900] text-[#FFFFFF] leading-[1.05] tracking-tight mb-[48px]">
                            Engineered for <br /><span className="text-[#0066FF]">Absolute Certainty.</span>
                        </h1>
                        <p className="text-[20px] text-[#94A3B8] max-w-[700px] mx-auto mb-[56px] leading-[1.6]">
                            Real estate interactions redefined as an institutional-grade protocol.
                            Zero friction, maximum traceability, and guaranteed integrity.
                        </p>

                        <div className="flex justify-center gap-[12px] p-[6px] bg-[#1E293B] rounded-[16px] inline-flex border border-[#FFFFFF]/10 shadow-2xl">
                            <button
                                onClick={() => setActiveRole('tenant')}
                                className={`px-[36px] py-[14px] rounded-[12px] text-[15px] font-[800] tracking-wide transition-all ${activeRole === 'tenant' ? 'bg-[#0066FF] text-white shadow-lg' : 'text-[#64748B] hover:text-[#FFFFFF]'}`}
                            >
                                Tenant Protocol
                            </button>
                            <button
                                onClick={() => setActiveRole('landlord')}
                                className={`px-[36px] py-[14px] rounded-[12px] text-[15px] font-[800] tracking-wide transition-all ${activeRole === 'landlord' ? 'bg-[#0066FF] text-white shadow-lg' : 'text-[#64748B] hover:text-[#FFFFFF]'}`}
                            >
                                Landlord Protocol
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Redesigned Protocol Cards */}
            <Section className="py-[120px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
                    <AnimatePresence mode="wait">
                        {steps[activeRole].map((step, i) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={`${activeRole}-${i}`}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    className="group relative h-full"
                                >
                                    <div className="h-full bg-white border border-[#E2E8F0] p-[48px] rounded-[32px] group-hover:border-[#0066FF] group-hover:shadow-[0_24px_48px_rgba(0,102,255,0.08)] transition-all duration-500 flex flex-col">
                                        <div className="w-[64px] h-[64px] bg-[#F1F5F9] text-[#0A0F1C] rounded-[20px] flex items-center justify-center mb-[32px] group-hover:bg-[#0066FF] group-hover:text-white transition-all duration-500 shadow-sm">
                                            <Icon className="w-[28px] h-[28px]" />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-[26px] font-[900] text-[#0F172A] mb-[16px] tracking-tight group-hover:text-[#0066FF] transition-colors">{step.title}</h3>
                                            <p className="text-[17px] text-[#64748B] leading-[1.6] mb-[32px]">
                                                {step.desc}
                                            </p>
                                        </div>

                                        <div className="pt-[32px] border-t border-[#F1F5F9] space-y-[12px]">
                                            {step.metrics.map(m => (
                                                <div key={m} className="flex items-center gap-[8px] text-[12px] font-[700] text-[#0F172A] uppercase tracking-wider">
                                                    <div className="w-[4px] h-[4px] bg-[#0066FF] rounded-full" />
                                                    {m}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="absolute -right-[12px] top-1/2 -translate-y-1/2 hidden md:flex text-[#E2E8F0] group-last:hidden">
                                        <FiArrowRight className="w-[24px] h-[24px]" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </Section>

            {/* Protocol Governance Section */}
            <Section className="bg-[#F8FAFC]">
                <div className="max-w-[1000px] mx-auto">
                    <div className="bg-[#FFFFFF] p-[80px] rounded-[48px] border border-[#E2E8F0] shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-[40px] opacity-[0.03]">
                            <Icon name="FiShield" className="w-[300px] h-[300px]" />
                        </div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
                            <div>
                                <h2 className="text-[42px] font-[900] text-[#0F172A] mb-[28px] leading-tight">Institutional <br />Integrity Nodes.</h2>
                                <p className="text-[18px] text-[#64748B] leading-[1.7] mb-[40px]">
                                    Our protocol is reinforced by distributed validation. Every action, from asset deployment to rent settlement, is recorded with cryptographic precision.
                                </p>
                                <div className="space-y-[20px] mb-[48px]">
                                    {[
                                        { label: "Compliance Index", val: "99.98%" },
                                        { label: "Settlement Speed", val: "< 10ms" },
                                        { label: "Data Redundancy", val: "3.2x" }
                                    ].map(item => (
                                        <div key={item.label} className="flex justify-between items-center border-b border-[#F1F5F9] pb-[16px]">
                                            <span className="text-[13px] font-[800] text-[#64748B] uppercase tracking-widest">{item.label}</span>
                                            <span className="text-[18px] font-[900] text-[#0066FF]">{item.val}</span>
                                        </div>
                                    ))}
                                </div>
                                <PrimaryButton>Explore Governance</PrimaryButton>
                            </div>
                            <div className="grid grid-cols-2 gap-[24px]">
                                {[
                                    { title: "Verifiable", icon: FiZap },
                                    { title: "Scalable", icon: FiLayers },
                                    { title: "Atomic", icon: FiCpu },
                                    { title: "Secure", icon: FiLock }
                                ].map(p => (
                                    <div key={p.title} className="bg-[#F8FAFC] p-[32px] rounded-[24px] border border-[#E2E8F0] text-center hover:border-[#0066FF] hover:translate-y-[-4px] transition-all">
                                        <p.icon className="w-[28px] h-[28px] mx-auto mb-[16px] text-[#0066FF]" />
                                        <span className="text-[14px] font-[900] text-[#0F172A] uppercase tracking-wider">{p.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}

// Simple Helper for Icon rendering in non-JSX context
function Icon({ name, className }) {
    const Icons = { FiShield };
    const Comp = Icons[name] || FiShield;
    return <Comp className={className} />;
}
