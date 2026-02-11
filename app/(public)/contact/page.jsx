
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Section, { SectionHeader } from '@/components/shared/layout/Section';
import PrimaryButton from '@/components/ui/button/PrimaryButton';

export default function ContactPage() {
    return (
        <div className="bg-[#FFFFFF] pt-[160px]">
            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[120px]">
                    <div>
                        <SectionHeader
                            subtitle="Get in Touch"
                            title="Connect with the protocol."
                        />
                        <p className="text-[18px] text-[#6B7280] leading-[1.6] mb-[48px]">
                            Have questions about deploying your portfolio or finding your next home?
                            Our team of institutional specialists is ready to assist.
                        </p>

                        <div className="space-y-[32px]">
                            {[
                                { label: "Institutional Sales", val: "partners@tirios.mvp" },
                                { label: "Tenant Support", val: "help@tirios.mvp" },
                                { label: "Physical HQ", val: "One Global Plaza, Level 42, NY" }
                            ].map(item => (
                                <div key={item.label}>
                                    <p className="text-[12px] font-[700] uppercase tracking-[0.1em] text-[#1D4ED8] mb-[8px]">{item.label}</p>
                                    <p className="text-[20px] font-[600] text-[#111827]">{item.val}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#F9FAFB] p-[64px] rounded-[32px] border border-[#D1D5DB]/50 shadow-xl"
                    >
                        <form className="space-y-[24px]">
                            <div className="grid grid-cols-2 gap-[24px]">
                                <div className="space-y-[8px]">
                                    <label className="text-[14px] font-[600] text-[#111827]">First Name</label>
                                    <input type="text" className="w-full px-[20px] py-[16px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] focus:outline-none focus:border-[#1D4ED8] transition-colors" />
                                </div>
                                <div className="space-y-[8px]">
                                    <label className="text-[14px] font-[600] text-[#111827]">Last Name</label>
                                    <input type="text" className="w-full px-[20px] py-[16px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] focus:outline-none focus:border-[#1D4ED8] transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-[8px]">
                                <label className="text-[14px] font-[600] text-[#111827]">Email Address</label>
                                <input type="email" className="w-full px-[20px] py-[16px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] focus:outline-none focus:border-[#1D4ED8] transition-colors" />
                            </div>
                            <div className="space-y-[8px]">
                                <label className="text-[14px] font-[600] text-[#111827]">Subject</label>
                                <select className="w-full px-[20px] py-[16px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] focus:outline-none focus:border-[#1D4ED8] transition-colors appearance-none">
                                    <option>Institutional Inquiries</option>
                                    <option>Tenant Support</option>
                                    <option>Partnerships</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="space-y-[8px]">
                                <label className="text-[14px] font-[600] text-[#111827]">Message</label>
                                <textarea rows={4} className="w-full px-[20px] py-[16px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] focus:outline-none focus:border-[#1D4ED8] transition-colors resize-none" />
                            </div>
                            <PrimaryButton className="w-full">Signal Transmitted</PrimaryButton>
                        </form>
                    </motion.div>
                </div>
            </Section>
        </div>
    );
}
