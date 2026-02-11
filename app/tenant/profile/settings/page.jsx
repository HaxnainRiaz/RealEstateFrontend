
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import TextField from '@/components/ui/input/TextField';
import PrimaryButton from '@/components/ui/button/PrimaryButton';

export default function TenantSettingsPage() {
    const [formData, setFormData] = useState({
        displayName: 'John Doe',
        timezone: 'UTC -5:00 (EST)',
        language: 'English (US)',
        currency: 'USD ($)'
    });

    return (
        <div className="max-w-[800px] space-y-[40px]">
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">System Configuration</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Account Settings</h1>
                <p className="text-[16px] text-[#6B7280]">Manage base parameters for your institutional portal engagement.</p>
            </div>

            <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px] shadow-sm">
                <form className="space-y-[32px]">
                    <div className="space-y-[24px]">
                        <h3 className="text-[18px] font-[700] text-[#111827]">Localization Nodes</h3>
                        <TextField
                            label="Display Reference"
                            value={formData.displayName}
                            onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                            <div className="space-y-[8px]">
                                <label className="text-[14px] font-[600] text-[#111827]">Temporal Node (Timezone)</label>
                                <select className="w-full px-[20px] py-[16px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] focus:outline-none focus:border-[#1D4ED8]">
                                    <option>UTC -5:00 (EST)</option>
                                    <option>UTC -8:00 (PST)</option>
                                    <option>UTC +0:00 (GMT)</option>
                                </select>
                            </div>
                            <div className="space-y-[8px]">
                                <label className="text-[14px] font-[600] text-[#111827]">Linguistic Protocol</label>
                                <select className="w-full px-[20px] py-[16px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] focus:outline-none focus:border-[#1D4ED8]">
                                    <option>English (US)</option>
                                    <option>Spanish (ES)</option>
                                    <option>French (FR)</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-[8px]">
                            <label className="text-[14px] font-[600] text-[#111827]">Settlement Currency</label>
                            <select className="w-full px-[20px] py-[16px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] focus:outline-none focus:border-[#1D4ED8]">
                                <option>USD ($)</option>
                                <option>EUR (€)</option>
                                <option>GBP (£)</option>
                            </select>
                        </div>
                    </div>

                    <div className="pt-[32px] border-t border-[#D1D5DB]/20">
                        <PrimaryButton className="px-[32px]">Save Configuration</PrimaryButton>
                    </div>
                </form>
            </Card>

            <div className="p-[32px] border border-[#EF4444]/20 bg-[#FEF2F2] rounded-[16px] flex items-center justify-between">
                <div className="space-y-[4px]">
                    <p className="text-[15px] font-[700] text-[#111827]">Terminate Session Nodes</p>
                    <p className="text-[13px] text-[#6B7280]">Sign out of all active devices across the platform network.</p>
                </div>
                <button className="px-[20px] py-[10px] bg-[#FFFFFF] text-[#EF4444] border border-[#EF4444] text-[13px] font-[700] rounded-[8px] hover:bg-[#EF4444] hover:text-[#FFFFFF] transition-all">
                    Execute Logout
                </button>
            </div>
        </div>
    );
}
