
"use client";

import React, { useState } from 'react';
import { useAuth } from '@/lib/context/AuthContext';
import TextField from '@/components/ui/input/TextField';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import Card from '@/components/ui/data/Card';

export default function LandlordProfilePage() {
    const { user } = useAuth();
    const [formData, setFormData] = useState({
        orgName: 'Asset Management Group LLC',
        adminEmail: user?.email || 'admin@entity.com',
        taxId: 'XX-XXXXXXX',
        address: 'One Global Plaza, Level 42, NY'
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleUpdate = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            // Simulated success
        }, 1500);
    };

    return (
        <div className="max-w-[1000px] space-y-[32px] md:space-y-[40px]">
            <div>
                <span className="text-[11px] md:text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Entity Configuration</span>
                <h1 className="text-[28px] md:text-[32px] font-[700] text-[#111827]">Organization Settings</h1>
                <p className="text-[14px] md:text-[16px] text-[#6B7280]">Manage institutional credentials and administrative nodes.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[32px] md:gap-[40px]">
                <div className="lg:col-span-8">
                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[48px] shadow-sm">
                        <form onSubmit={handleUpdate} className="space-y-[24px] md:space-y-[32px]">
                            <div className="space-y-[20px] md:space-y-[24px]">
                                <h3 className="text-[16px] md:text-[18px] font-[700] text-[#111827]">Structural Identity</h3>
                                <TextField
                                    label="Organization Legal Name"
                                    value={formData.orgName}
                                    onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                                />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[24px]">
                                    <TextField
                                        label="Admin Credential"
                                        value={formData.adminEmail}
                                        onChange={(e) => setFormData({ ...formData, adminEmail: e.target.value })}
                                    />
                                    <TextField
                                        label="Tax ID / EIN"
                                        value={formData.taxId}
                                        onChange={(e) => setFormData({ ...formData, taxId: e.target.value })}
                                    />
                                </div>
                                <TextField
                                    label="HQ Coordinates"
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                />
                            </div>

                            <div className="pt-[24px] md:pt-[32px] border-t border-[#D1D5DB]/20">
                                <PrimaryButton type="submit" loading={isLoading} className="w-full md:w-auto px-[32px]">
                                    Commit Structural Changes
                                </PrimaryButton>
                            </div>
                        </form>
                    </Card>
                </div>

                <div className="lg:col-span-4 space-y-[24px]">
                    <Card className="bg-[#F9FAFB] border-[#D1D5DB]/30 p-[24px] md:p-[32px]">
                        <h4 className="text-[15px] md:text-[16px] font-[700] text-[#111827] mb-[16px]">Active Admin Nodes</h4>
                        <div className="space-y-[16px]">
                            {[
                                { name: "Primary Node", email: user?.email },
                                { name: "Compliance Node", email: "compliance@entity.com" }
                            ].map(node => (
                                <div key={node.email} className="flex items-center gap-[12px]">
                                    <div className="w-[32px] h-[32px] bg-[#1D4ED8]/10 rounded-full flex items-center justify-center text-[#1D4ED8] text-[10px] font-[700]">
                                        {node.name.charAt(0)}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[13px] font-[700] text-[#111827] truncate">{node.name}</p>
                                        <p className="text-[12px] text-[#6B7280] truncate">{node.email}</p>
                                    </div>
                                </div>
                            ))}
                            <button className="text-[11px] md:text-[12px] font-[700] text-[#1D4ED8] hover:underline mt-[8px]">
                                + Deploy New Admin Node
                            </button>
                        </div>
                    </Card>

                    <Card className="bg-[#FEF2F2] border-[#EF4444]/20 p-[24px] md:p-[32px]">
                        <h4 className="text-[15px] md:text-[16px] font-[700] text-[#EF4444] mb-[12px]">Danger Zone</h4>
                        <p className="text-[12px] md:text-[13px] text-[#6B7280] leading-[1.6]">
                            Deactivating your institutional entity will terminate all global marketplace indexings.
                        </p>
                        <button className="mt-[20px] md:mt-[24px] text-[12px] md:text-[13px] font-[700] text-[#EF4444] border-b border-[#EF4444] pb-[2px]">
                            Terminate Organization Protocol
                        </button>
                    </Card>
                </div>
            </div>
        </div>
    );
}
