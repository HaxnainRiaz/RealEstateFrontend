
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import TextField from '@/components/ui/input/TextField';
import PrimaryButton from '@/components/ui/button/PrimaryButton';

export default function TenantSecurityPage() {
    return (
        <div className="max-w-[800px] space-y-[40px]">
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Cryptographic Integrity</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Security Protocols</h1>
                <p className="text-[16px] text-[#6B7280]">Manage authentication layers and active hardware tokens.</p>
            </div>

            <div className="grid grid-cols-1 gap-[32px]">
                <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px] shadow-sm">
                    <h3 className="text-[18px] font-[700] text-[#111827] mb-[32px]">Rotate Access Signal</h3>
                    <form className="space-y-[24px]">
                        <TextField type="password" label="Current Credential" placeholder="••••••••" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                            <TextField type="password" label="New Access Node" placeholder="••••••••" />
                            <TextField type="password" label="Confirm Node" placeholder="••••••••" />
                        </div>
                        <div className="pt-[12px]">
                            <PrimaryButton className="px-[32px]">Update Access Protocol</PrimaryButton>
                        </div>
                    </form>
                </Card>

                <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px] shadow-sm">
                    <div className="flex justify-between items-start mb-[32px]">
                        <div className="space-y-[8px]">
                            <h3 className="text-[18px] font-[700] text-[#111827]">Multi-Factor Protocol (MFA)</h3>
                            <p className="text-[14px] text-[#6B7280]">Require a secondary temporal token for all portal entry signals.</p>
                        </div>
                        <span className="px-[12px] py-[6px] bg-[#10B981]/10 text-[#10B981] text-[10px] font-[700] uppercase rounded-[4px] border border-[#10B981]/20">Active</span>
                    </div>
                    <div className="p-[24px] bg-[#F9FAFB] rounded-[12px] flex items-center justify-between border border-[#D1D5DB]/10">
                        <div className="flex items-center gap-[16px]">
                            <div className="w-[40px] h-[40px] bg-[#111827] rounded-[8px] flex items-center justify-center text-[#FFFFFF]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.778-7.778z" /><path d="M12 12l.93-2.015 2.015-.93.93 2.015 2.015.93-.93 2.015-2.015.93-.93-2.015z" /></svg>
                            </div>
                            <div>
                                <p className="text-[14px] font-[700] text-[#111827]">Auth App Signal</p>
                                <p className="text-[12px] text-[#6B7280]">Verified via Google Authenticator Node</p>
                            </div>
                        </div>
                        <button className="text-[13px] font-[700] text-[#1D4ED8]">Configure</button>
                    </div>
                </Card>

                <Card className="bg-[#FEF2F2] border border-[#EF4444]/20 p-[40px]">
                    <h3 className="text-[16px] font-[700] text-[#EF4444] mb-[12px]">Termination Protocol</h3>
                    <p className="text-[14px] text-[#6B7280] leading-[1.6] mb-[24px]">
                        Permanently decommission your institutional resident profile and terminate all active
                        application signals and payment schedules.
                    </p>
                    <button className="px-[24px] py-[12px] bg-[#EF4444] text-[#FFFFFF] font-[700] rounded-[8px] text-[13px] hover:bg-red-700 transition-all">
                        Terminate Identity Node
                    </button>
                </Card>
            </div>
        </div>
    );
}
