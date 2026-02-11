
"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '@/components/shared/layout/Section';
import Card, { CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/data/Card';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import SecondaryButton from '@/components/ui/button/SecondaryButton';
import { FiCheck, FiBarChart2, FiPieChart, FiTrendingUp, FiActivity, FiSearch } from 'react-icons/fi';

export default function PricingPage() {
    return (
        <div className="bg-[#FFFFFF]">
            {/* Hero Section with BG Image */}
            <section className="relative pt-[240px] pb-[120px] overflow-hidden bg-[#0A0F1C]">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1551288049-bbda48658a7d?q=80&w=2670&auto=format&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover opacity-15"
                    />
                    <div className="absolute inset-0 " />
                </div>

                <div className="max-w-[1240px] mx-auto text-center relative z-10 px-[40px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-[8px] px-[16px] py-[6px] bg-[#1D4ED8] text-white text-[11px] font-[800] uppercase tracking-[0.2em] rounded-full mb-[32px]">
                            <FiBarChart2 className="w-[14px] h-[14px]" />
                            Economic Modeling
                        </span>
                        <h1 className="text-[72px] font-[900] text-[#FFFFFF] leading-[1.05] tracking-tight mb-[40px]">
                            Precision <br /><span className="text-[#1D4ED8]">Asset Valuations.</span>
                        </h1>
                        <p className="text-[20px] text-[#94A3B8] max-w-[750px] mx-auto leading-[1.6]">
                            Institutional-grade financial modeling scaled for every portfolio size.
                            Transparent, data-driven, and designed for high-yield performance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Valuation Grid */}
            <Section className="py-[120px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px]">
                    {/* Tenant Tier */}
                    <Card className="h-full bg-[#FFFFFF] border-[#E2E8F0] flex flex-col p-[48px] rounded-[32px] hover:shadow-2xl transition-all duration-500">
                        <CardContent className="flex-grow p-0">
                            <div className="flex items-center justify-between mb-[32px]">
                                <span className="text-[#10B981] text-[12px] font-[800] uppercase tracking-[0.15em]">Resident Node</span>
                                <div className="p-[10px] bg-[#F0FDF4] text-[#10B981] rounded-[12px]">
                                    <FiActivity className="w-[20px] h-[20px]" />
                                </div>
                            </div>
                            <CardTitle className="text-[36px] font-[900] text-[#0F172A] mb-[12px]">Basic Tier</CardTitle>
                            <div className="text-[16px] font-[600] text-[#10B981] mb-[24px]">Always Free</div>
                            <CardDescription className="text-[17px] leading-[1.6] text-[#64748B] mb-[40px]">
                                Full access to marketplace forensics and secure rent settlement protocols.
                            </CardDescription>

                            <div className="space-y-[16px]">
                                {[
                                    { label: 'Market Forensics', sub: 'Unlimited property scans' },
                                    { label: 'Secure Digital ID', sub: 'Verifiable credentials' },
                                    { label: 'Atomic Settlements', sub: 'Zero-fee rent payments' },
                                    { label: 'Maintenance Log', sub: '24/7 incident reporting' }
                                ].map(f => (
                                    <div key={f.label} className="flex gap-[16px]">
                                        <div className="mt-[4px] w-[18px] h-[18px] bg-[#F0FDF4] text-[#10B981] rounded-full flex items-center justify-center flex-shrink-0">
                                            <FiCheck className="w-[12px] h-[12px]" />
                                        </div>
                                        <div>
                                            <p className="text-[14px] font-[800] text-[#0F172A]">{f.label}</p>
                                            <p className="text-[12px] text-[#64748B]">{f.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="border-t-0 p-0 pt-[48px]">
                            <SecondaryButton className="w-full h-[56px] rounded-[16px] font-[800]">Initialize Profile</SecondaryButton>
                        </CardFooter>
                    </Card>

                    {/* Landlord - Emerging */}
                    <Card className="h-full bg-[#FFFFFF] border-[#1D4ED8] ring-4 ring-[#1D4ED8]/5 flex flex-col p-[48px] rounded-[32px] shadow-xl relative scale-105 z-10">
                        <div className="absolute top-0 right-[48px] -translate-y-1/2 bg-[#1D4ED8] text-white text-[10px] font-[900] uppercase tracking-[0.2em] px-[16px] py-[6px] rounded-full shadow-lg">
                            Institutional Choice
                        </div>
                        <CardContent className="flex-grow p-0">
                            <div className="flex items-center justify-between mb-[32px]">
                                <span className="text-[#1D4ED8] text-[12px] font-[800] uppercase tracking-[0.15em]">Growth Asset</span>
                                <div className="p-[10px] bg-[#EFF6FF] text-[#1D4ED8] rounded-[12px]">
                                    <FiTrendingUp className="w-[20px] h-[20px]" />
                                </div>
                            </div>
                            <CardTitle className="text-[36px] font-[900] text-[#0F172A] mb-[4px]">Emerging</CardTitle>
                            <div className="flex items-baseline gap-[4px] mb-[24px]">
                                <span className="text-[32px] font-[900] text-[#0F172A]">$19</span>
                                <span className="text-[#64748B] text-[14px] font-[600]">/ unit / mo</span>
                            </div>
                            <CardDescription className="text-[17px] leading-[1.6] text-[#64748B] mb-[40px]">
                                Advanced automation for portfolio owners scaling their operations.
                            </CardDescription>

                            <div className="space-y-[16px]">
                                {[
                                    { label: 'Portfolio Mastery', sub: 'Manage up to 50 assets' },
                                    { label: 'Neural Matching', sub: '98.4% tenant reliability' },
                                    { label: 'Yield Analytics', sub: 'Real-time ROI dashboard' },
                                    { label: 'Smart Contracts', sub: 'Auto-executing agreements' }
                                ].map(f => (
                                    <div key={f.label} className="flex gap-[16px]">
                                        <div className="mt-[4px] w-[18px] h-[18px] bg-[#EFF6FF] text-[#1D4ED8] rounded-full flex items-center justify-center flex-shrink-0">
                                            <FiCheck className="w-[12px] h-[12px]" />
                                        </div>
                                        <div>
                                            <p className="text-[14px] font-[800] text-[#0F172A]">{f.label}</p>
                                            <p className="text-[12px] text-[#64748B]">{f.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="border-t-0 p-0 pt-[48px]">
                            <PrimaryButton className="w-full h-[56px] rounded-[16px] font-[800] bg-[#1D4ED8]">Deploy Portfolio</PrimaryButton>
                        </CardFooter>
                    </Card>

                    {/* Landlord - Institutional */}
                    <Card className="h-full bg-[#FFFFFF] border-[#E2E8F0] flex flex-col p-[48px] rounded-[32px] hover:shadow-2xl transition-all duration-500">
                        <CardContent className="flex-grow p-0">
                            <div className="flex items-center justify-between mb-[32px]">
                                <span className="text-[#6366F1] text-[12px] font-[800] uppercase tracking-[0.15em]">Enterprise Node</span>
                                <div className="p-[10px] bg-[#EEF2FF] text-[#6366F1] rounded-[12px]">
                                    <FiPieChart className="w-[20px] h-[20px]" />
                                </div>
                            </div>
                            <CardTitle className="text-[36px] font-[900] text-[#0F172A] mb-[12px]">Institutional</CardTitle>
                            <div className="text-[16px] font-[600] text-[#6366F1] mb-[24px]">Custom Solutions</div>
                            <CardDescription className="text-[17px] leading-[1.6] text-[#64748B] mb-[40px]">
                                Bespoke infrastructure for global real estate mandates and funds.
                            </CardDescription>

                            <div className="space-y-[16px]">
                                {[
                                    { label: 'Unlimited Nodes', sub: 'Global scale deployment' },
                                    { label: 'API Integration', sub: 'Custom data pipelines' },
                                    { label: 'Audit Compliance', sub: 'Institutional-grade reporting' },
                                    { label: 'Support Node', sub: '24/7 dedicated manager' }
                                ].map(f => (
                                    <div key={f.label} className="flex gap-[16px]">
                                        <div className="mt-[4px] w-[18px] h-[18px] bg-[#EEF2FF] text-[#6366F1] rounded-full flex items-center justify-center flex-shrink-0">
                                            <FiCheck className="w-[12px] h-[12px]" />
                                        </div>
                                        <div>
                                            <p className="text-[14px] font-[800] text-[#0F172A]">{f.label}</p>
                                            <p className="text-[12px] text-[#64748B]">{f.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="border-t-0 p-0 pt-[48px]">
                            <button className="w-full h-[56px] py-[16px] bg-[#0F172A] text-[#FFFFFF] text-[15px] font-[800] uppercase tracking-wider rounded-[16px] hover:bg-[#1D4ED8] transition-all">
                                Contact Sales
                            </button>
                        </CardFooter>
                    </Card>
                </div>
            </Section>

            {/* Valuation Engine CTA */}
            <Section className="bg-[#F8FAFC] pb-[160px]">
                <div className="relative overflow-hidden p-[80px] bg-[#FFFFFF] rounded-[48px] border border-[#E2E8F0] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-[80px]">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1D4ED8]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="max-w-[600px] relative z-10">
                        <div className="flex items-center gap-[12px] mb-[24px]">
                            <div className="w-[40px] h-[40px] bg-[#EFF6FF] text-[#1D4ED8] rounded-[10px] flex items-center justify-center">
                                <FiSearch />
                            </div>
                            <span className="text-[13px] font-[900] text-[#1D4ED8] uppercase tracking-[0.2em]">Forensic Tool</span>
                        </div>
                        <h3 className="text-[42px] font-[900] text-[#0F172A] mb-[24px] tracking-tight leading-tight">Model your portfolio <br />potential today.</h3>
                        <p className="text-[19px] text-[#64748B] leading-[1.6] mb-[48px]">
                            Our valuation engine processes over 140 data points per property to deliver accurate ROI projections and yield optimizations.
                        </p>
                        <Link href="/pricing/calculator">
                            <button className="px-[40px] py-[20px] bg-[#0F172A] text-[#FFFFFF] text-[15px] font-[800] uppercase tracking-widest rounded-[16px] hover:bg-[#1D4ED8] transition-all shadow-xl active:scale-95">
                                Initialize Calculator
                            </button>
                        </Link>
                    </div>
                    <div className="flex-shrink-0 w-full lg:w-[400px] space-y-[24px] relative z-10">
                        {[
                            { label: "Yield Accuracy", val: "99.2%" },
                            { label: "Data Points/Node", val: "148" },
                            { label: "Updates Frequency", val: "Real-time" }
                        ].map(stat => (
                            <div key={stat.label} className="bg-[#F8FAFC] p-[24px] rounded-[20px] border border-[#E2E8F0] flex justify-between items-center">
                                <span className="text-[12px] font-[800] text-[#64748B] uppercase tracking-wider">{stat.label}</span>
                                <span className="text-[20px] font-[900] text-[#0F172A]">{stat.val}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
