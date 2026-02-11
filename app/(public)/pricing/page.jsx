"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '@/components/shared/layout/Section';
import Card, { CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/data/Card';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import SecondaryButton from '@/components/ui/button/SecondaryButton';

export default function PricingPage() {
    return (
        <div className="bg-[#FFFFFF]">
            {/* Hero */}
            <section className="pt-[200px] pb-[80px] px-[80px] bg-[#FFFFFF]">
                <div className="max-w-[1240px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-[56px] font-[700] text-[#111827] tracking-[-0.01em] mb-[24px]">
                            Simple, transparent <span className="text-[#1D4ED8]">economics.</span>
                        </h1>
                        <p className="text-[20px] text-[#6B7280] max-w-[700px] mx-auto leading-[1.6]">
                            Whether you're looking for your next home or managing a global inventory,
                            our pricing model is designed to grow with you.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Grid */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
                    {/* Tenant Tier */}
                    <Card className="h-full bg-[#FFFFFF] border-[#D1D5DB] flex flex-col p-[40px]">
                        <CardContent className="flex-grow">
                            <span className="text-[#10B981] text-[12px] font-[700] uppercase tracking-[0.1em] mb-[16px] block">For Tenants</span>
                            <CardTitle className="text-[32px]">Always Free</CardTitle>
                            <CardDescription className="text-[16px] mt-[16px]">
                                Search, apply, and manage your rent settlements without any platform fees.
                            </CardDescription>
                            <div className="mt-[40px] space-y-[16px]">
                                {['Unlimited searches', 'Secure digital ID', 'Fee-free settlements', 'Maintenance portal'].map(f => (
                                    <div key={f} className="flex items-center gap-[12px] text-[14px] text-[#111827]">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#10B981]" />
                                        {f}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="border-t-0 p-0 pt-[40px]">
                            <SecondaryButton className="w-full">Create Profile</SecondaryButton>
                        </CardFooter>
                    </Card>

                    {/* Landlord - Emerging */}
                    <Card className="h-full bg-[#FFFFFF] border-[#1D4ED8]/20 ring-2 ring-[#1D4ED8]/10 flex flex-col p-[40px]">
                        <CardContent className="flex-grow">
                            <span className="text-[#1D4ED8] text-[12px] font-[700] uppercase tracking-[0.1em] mb-[16px] block">For Landlords</span>
                            <div className="flex items-baseline gap-[4px]">
                                <span className="text-[32px] font-[700] text-[#111827]">$19</span>
                                <span className="text-[#6B7280] text-[14px]">/mo /unit</span>
                            </div>
                            <CardTitle className="mt-[8px]">Emerging Portfolio</CardTitle>
                            <CardDescription className="text-[16px] mt-[16px]">
                                Professional tools for growing property owners looking to automate management.
                            </CardDescription>
                            <div className="mt-[40px] space-y-[16px]">
                                {['Up to 50 units', 'Automated screening', 'Standard yield reports', 'Email support'].map(f => (
                                    <div key={f} className="flex items-center gap-[12px] text-[14px] text-[#111827]">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#1D4ED8]" />
                                        {f}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="border-t-0 p-0 pt-[40px]">
                            <PrimaryButton className="w-full">Start Managing</PrimaryButton>
                        </CardFooter>
                    </Card>

                    {/* Landlord - Institutional */}
                    <Card className="h-full bg-[#111827] border-none flex flex-col p-[40px]">
                        <CardContent className="flex-grow">
                            <span className="text-[#FFFFFF]/60 text-[12px] font-[700] uppercase tracking-[0.1em] mb-[16px] block">Enterprise</span>
                            <CardTitle className="text-[#FFFFFF] text-[32px]">Custom</CardTitle>
                            <CardDescription className="text-[#FFFFFF]/60 text-[16px] mt-[16px]">
                                Tailored solutions for institutional portfolios with advanced integration needs.
                            </CardDescription>
                            <div className="mt-[40px] space-y-[16px]">
                                {['Unlimited units', 'Neural matching', 'Custom API access', 'Dedicated node manager'].map(f => (
                                    <div key={f} className="flex items-center gap-[12px] text-[14px] text-[#FFFFFF]/80">
                                        <div className="w-[6px] h-[6px] rounded-full bg-[#1D4ED8]" />
                                        {f}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="border-t-0 p-0 pt-[40px]">
                            <button className="w-full py-[16px] bg-[#FFFFFF] text-[#111827] font-[600] rounded-[8px] hover:bg-[#F3F4F6] transition-all">
                                Contact Sales
                            </button>
                        </CardFooter>
                    </Card>
                </div>
            </Section>

            {/* Yield Calculator CTA */}
            <Section className="bg-[#F9FAFB]">
                <div className="flex flex-col md:flex-row items-center justify-between gap-[40px] p-[64px] bg-[#FFFFFF] rounded-[32px] border border-[#D1D5DB]">
                    <div className="max-w-[500px]">
                        <h3 className="text-[28px] font-[700] text-[#111827] mb-[16px]">Calculate your potential ROI.</h3>
                        <p className="text-[#6B7280]">Use our institutional modeling tool to see how Tirios MVP can optimize your portfolio yield.</p>
                    </div>
                    <Link href="/pricing/calculator">
                        <SecondaryButton>Try the Calculator</SecondaryButton>
                    </Link>
                </div>
            </Section>
        </div>
    );
}
