
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import TextField from '@/components/ui/input/TextField';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import Card from '@/components/ui/data/Card';

export default function TenantApplicationWizardPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const totalSteps = 4;

    const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
    const prevStep = () => setStep(s => Math.max(s - 1, 1));

    return (
        <div className="max-w-[800px] mx-auto space-y-[40px]">
            <div className="text-center space-y-[12px]">
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em]">Deployment Phase {step} of {totalSteps}</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Initialize Asset Application</h1>
                <p className="text-[16px] text-[#6B7280]">Verify coordinates and authenticate credentials for structural occupancy.</p>
            </div>

            {/* Progress HUD */}
            <div className="flex justify-between items-center px-[40px] mb-[64px]">
                {[1, 2, 3, 4].map(i => (
                    <React.Fragment key={i}>
                        <div className={`w-[40px] h-[40px] rounded-full flex items-center justify-center text-[14px] font-[700] transition-all duration-500 ${step >= i ? 'bg-[#1D4ED8] text-[#FFFFFF] shadow-[0_0_20px_rgba(29,78,216,0.3)]' : 'bg-[#F3F4F6] text-[#D1D5DB]'}`}>
                            {i}
                        </div>
                        {i < 4 && <div className={`flex-grow h-[2px] mx-[12px] transition-colors duration-500 ${step > i ? 'bg-[#1D4ED8]' : 'bg-[#F3F4F6]'}`} />}
                    </React.Fragment>
                ))}
            </div>

            <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 shadow-2xl p-[64px]">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-[40px]"
                        >
                            <div className="space-y-[12px]">
                                <h2 className="text-[22px] font-[700] text-[#111827]">Occupancy Parameters</h2>
                                <p className="text-[14px] text-[#6B7280]">Define the structural usage and temporal window.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-[24px]">
                                <TextField label="Commencement Date" type="date" required />
                                <TextField label="Duration (Months)" type="number" placeholder="12" required />
                            </div>
                            <TextField label="Resident Count" type="number" placeholder="1" />
                            <div className="pt-[24px] flex justify-end">
                                <PrimaryButton className="px-[48px]" onClick={nextStep}>Next: Financials</PrimaryButton>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-[40px]"
                        >
                            <div className="space-y-[12px]">
                                <h2 className="text-[22px] font-[700] text-[#111827]">Financial Forensic Check</h2>
                                <p className="text-[14px] text-[#6B7280]">Verify verified annual yield and liability coverage.</p>
                            </div>
                            <TextField label="Verified Annual Revenue ($)" type="number" required />
                            <div className="space-y-[8px]">
                                <label className="text-[14px] font-[600] text-[#111827]">Primary Revenue Evidence (Upload)</label>
                                <div className="w-full h-[120px] bg-[#F9FAFB] border border-dashed border-[#D1D5DB] rounded-[12px] flex items-center justify-center font-[600] text-[#6B7280] cursor-pointer hover:bg-[#F3F4F6] transition-colors">
                                    DROP PDF NODE HERE
                                </div>
                            </div>
                            <div className="pt-[24px] flex justify-between">
                                <button className="text-[14px] font-[600] text-[#6B7280]" onClick={prevStep}>← Back</button>
                                <PrimaryButton className="px-[48px]" onClick={nextStep}>Next: Verification</PrimaryButton>
                            </div>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-[40px]"
                        >
                            <div className="space-y-[12px]">
                                <h2 className="text-[22px] font-[700] text-[#111827]">Identity Verification</h2>
                                <p className="text-[14px] text-[#6B7280]">Simulated cryptographic biometric audit.</p>
                            </div>
                            <div className="bg-[#111827] rounded-[24px] p-[48px] text-center space-y-[32px]">
                                <div className="w-[80px] h-[80px] bg-[#1D4ED8] rounded-full mx-auto flex items-center justify-center text-[#FFFFFF]">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>
                                </div>
                                <p className="text-[14px] text-[#FFFFFF]/60">Your institutional trust score is sufficient for this asset node.</p>
                                <button className="px-[32px] py-[14px] bg-[#FFFFFF] text-[#111827] font-[700] rounded-[8px]">Analyze Identity Buffer</button>
                            </div>
                            <div className="pt-[24px] flex justify-between">
                                <button className="text-[14px] font-[600] text-[#6B7280]" onClick={prevStep}>← Back</button>
                                <PrimaryButton className="px-[48px]" onClick={nextStep}>Next: Final Review</PrimaryButton>
                            </div>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-[40px]"
                        >
                            <div className="space-y-[12px]">
                                <h2 className="text-[22px] font-[700] text-[#111827]">Final Deployment Review</h2>
                                <p className="text-[14px] text-[#6B7280]">Commit your credentials and initiate asset signaling.</p>
                            </div>
                            <div className="space-y-[16px]">
                                {[
                                    { l: "Asset", v: "The Metropolitan Suite" },
                                    { l: "Commencement", v: "Nov 01, 2023" },
                                    { l: "Assessment", v: "$4,200/mo" }
                                ].map(sum => (
                                    <div key={sum.l} className="flex justify-between items-center py-[16px] border-b border-[#D1D5DB]/20">
                                        <span className="text-[13px] font-[700] text-[#6B7280] uppercase tracking-[0.05em]">{sum.l}</span>
                                        <span className="text-[15px] font-[700] text-[#111827]">{sum.v}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="p-[24px] bg-[#FEF2F2] rounded-[12px] border border-[#EF4444]/10 text-[13px] text-[#EF4444] leading-[1.6]">
                                By deploying this signal, you authorize an institutional credit audit and structural screening.
                            </div>
                            <div className="pt-[24px] flex justify-between items-center">
                                <button className="text-[14px] font-[600] text-[#6B7280]" onClick={prevStep}>← Back</button>
                                <PrimaryButton className="px-[48px]" onClick={() => router.push('/tenant/applications')}>Deploy Signal</PrimaryButton>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Card>
        </div>
    );
}
