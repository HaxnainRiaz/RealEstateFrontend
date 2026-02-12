
"use client";

import React, { useState } from 'react';
import { useAuth } from '@/lib/context/AuthContext';
import TextField from '@/components/ui/input/TextField';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import Card from '@/components/ui/data/Card';
import Link from 'next/link';

export default function TenantProfilePage() {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        fullName: 'Johnathan Doe',
        email: user?.email || 'resident@example.com',
        phone: '+1 (555) 000-0000',
        recoveryEmail: 'secondary@example.com'
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleUpdate = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    };

    const CONFIG_NODES = [
        { title: 'Localization Settings', desc: 'Recalibrate temporal and linguistic nodes.', href: '/tenant/profile/settings', icon: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 8v12 M9 11l6 6' },
        { title: 'Engagement Logic', desc: 'Fine-tune behavioral heuristics.', href: '/tenant/profile/preferences', icon: 'M12 20v-6 M6 20V10 M18 20V4' },
        { title: 'Signal Distribution', desc: 'Configure notification transmission.', href: '/tenant/profile/notifications', icon: 'M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 0 1-3.46 0' },
        { title: 'Security Protocols', desc: 'Manage cryptographic access layers.', href: '/tenant/profile/security', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }
    ];

    return (
        <div className="max-w-[1000px] space-y-[40px]">
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Credential Management</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Resident Profile</h1>
                <p className="text-[16px] text-[#6B7280]">Manage your institutional identity forensics and security nodes.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px]">
                <div className="lg:col-span-8 space-y-[40px]">
                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px] shadow-sm">
                        <form onSubmit={handleUpdate} className="space-y-[32px]">
                            <div className="space-y-[24px]">
                                <h3 className="text-[18px] font-[700] text-[#111827]">Identity Details</h3>
                                <TextField
                                    label="Full Legal Name"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                                    <TextField
                                        label="Primary Credential (Email)"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        disabled
                                    />
                                    <TextField
                                        label="Mobile Node"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <TextField
                                    label="Recovery Signal Address"
                                    value={formData.recoveryEmail}
                                    onChange={(e) => setFormData({ ...formData, recoveryEmail: e.target.value })}
                                />
                            </div>

                            <div className="pt-[32px] border-t border-[#D1D5DB]/20">
                                <PrimaryButton type="submit" loading={isLoading} className="px-[32px] text-white">
                                    Update Identity
                                </PrimaryButton>
                            </div>
                        </form>
                    </Card>

                    <div className="space-y-[24px]">
                        <h3 className="text-[20px] font-[700] text-[#111827]">Portal Configuration</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                            {CONFIG_NODES.map((node) => (
                                <Link key={node.title} href={node.href}>
                                    <Card className="p-[32px] h-full hover:border-[#1D4ED8] transition-all group border-[#D1D5DB]/30">
                                        <div className="w-[48px] h-[48px] bg-[#F9FAFB] rounded-[12px] flex items-center justify-center text-[#1D4ED8] group-hover:bg-[#1D4ED8] group-hover:text-white transition-all mb-[20px] border border-[#D1D5DB]/10">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d={node.icon} /></svg>
                                        </div>
                                        <h4 className="text-[16px] font-[700] text-[#111827] group-hover:text-[#1D4ED8] transition-colors mb-[4px]">{node.title}</h4>
                                        <p className="text-[13px] text-[#6B7280] leading-[1.6]">{node.desc}</p>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4 space-y-[24px]">
                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] shadow-sm">
                        <h4 className="text-[16px] font-[700] mb-[16px] text-[#111827]">Identity Quality</h4>
                        <div className="text-center mb-[24px]">
                            <p className="text-[48px] font-[700] text-[#10B981]">98</p>
                            <p className="text-[12px] text-[#6B7280] uppercase tracking-[0.1em]">Verified Trust Score</p>
                        </div>
                        <p className="text-[13px] text-[#6B7280] leading-[1.6]">
                            Your trust score is derived from credential longevity and payment structural integrity.
                        </p>
                    </Card>

                    <Card className="bg-[#F9FAFB] border-[#D1D5DB]/30 p-[32px]">
                        <h4 className="text-[16px] font-[700] text-[#111827] mb-[24px]">Rapid Security</h4>
                        <div className="space-y-[16px]">
                            <Link href="/tenant/profile/security" className="block w-full text-left text-[14px] font-[700] text-[#6B7280] hover:text-[#1D4ED8] transition-colors py-[8px] border-b border-[#D1D5DB]/20">
                                Rotate Access Keys
                            </Link>
                            <Link href="/tenant/profile/security" className="block w-full text-left text-[14px] font-[700] text-[#6B7280] hover:text-[#1D4ED8] transition-colors py-[8px] border-b border-[#D1D5DB]/20">
                                Multi-Factor Protocol
                            </Link>
                            <button className="w-full text-left text-[14px] font-[700] text-[#EF4444] hover:underline pt-[12px]">
                                Deactivate Identity Node
                            </button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
