
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import TextField from '@/components/ui/input/TextField';
import { useAuth } from '@/lib/context/AuthContext';

export default function LandlordSettingsPage() {
    const { user } = useAuth();
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => setIsSaving(false), 1500);
    };

    return (
        <div className="max-w-[1000px] mx-auto space-y-[40px]">
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Configuration</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Account Settings</h1>
                <p className="text-[16px] text-[#6B7280]">Manage your account preferences and platform configuration.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px]">
                <div className="lg:col-span-8 space-y-[32px]">
                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px]">
                        <h3 className="text-[20px] font-[700] text-[#111827] mb-[32px]">Account Information</h3>
                        <div className="space-y-[24px]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                                <TextField label="First Name" defaultValue="John" />
                                <TextField label="Last Name" defaultValue="Smith" />
                            </div>
                            <TextField label="Email Address" defaultValue={user?.email || "landlord@example.com"} />
                            <TextField label="Phone Number" defaultValue="+1 (555) 123-4567" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                                <TextField label="Company Name" defaultValue="Smith Properties LLC" />
                                <TextField label="Tax ID / EIN" defaultValue="12-3456789" />
                            </div>
                        </div>
                        <div className="mt-[32px] pt-[32px] border-t border-[#D1D5DB]/20">
                            <button
                                onClick={handleSave}
                                disabled={isSaving}
                                className="px-[32px] py-[14px] bg-[#111827] text-white text-[14px] font-[700] rounded-[8px] hover:bg-[#1D4ED8] transition-all disabled:opacity-50"
                            >
                                {isSaving ? 'Saving...' : 'Save Changes'}
                            </button>
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px]">
                        <h3 className="text-[20px] font-[700] text-[#111827] mb-[32px]">Notification Preferences</h3>
                        <div className="space-y-[24px]">
                            {[
                                { title: 'Rental Applications', desc: 'Receive alerts when new applications are submitted', enabled: true },
                                { title: 'Payment Notifications', desc: 'Get notified about rent payments and late fees', enabled: true },
                                { title: 'Maintenance Requests', desc: 'Alerts for new maintenance and repair requests', enabled: true },
                                { title: 'Lease Expirations', desc: 'Reminders 60 days before lease expiration', enabled: true },
                                { title: 'Market Insights', desc: 'Weekly reports on market trends and opportunities', enabled: false },
                                { title: 'Platform Updates', desc: 'News about new features and improvements', enabled: false }
                            ].map((pref, i) => (
                                <div key={i} className="flex justify-between items-center gap-[24px] p-[20px] bg-[#F9FAFB] rounded-[12px]">
                                    <div>
                                        <h4 className="text-[15px] font-[700] text-[#111827] mb-[4px]">{pref.title}</h4>
                                        <p className="text-[13px] text-[#6B7280]">{pref.desc}</p>
                                    </div>
                                    <div className={`w-[48px] h-[24px] rounded-full relative transition-colors cursor-pointer ${pref.enabled ? 'bg-[#1D4ED8]' : 'bg-[#D1D5DB]'}`}>
                                        <div className={`absolute top-[4px] w-[16px] h-[16px] bg-white rounded-full transition-all ${pref.enabled ? 'left-[28px]' : 'left-[4px]'}`} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px]">
                        <h3 className="text-[20px] font-[700] text-[#111827] mb-[32px]">Security Settings</h3>
                        <div className="space-y-[24px]">
                            <div>
                                <h4 className="text-[15px] font-[700] text-[#111827] mb-[16px]">Change Password</h4>
                                <div className="space-y-[16px]">
                                    <TextField label="Current Password" type="password" />
                                    <TextField label="New Password" type="password" />
                                    <TextField label="Confirm New Password" type="password" />
                                </div>
                                <button className="mt-[16px] px-[24px] py-[12px] bg-[#F9FAFB] border border-[#D1D5DB] text-[#111827] text-[13px] font-[700] rounded-[8px] hover:bg-[#FFFFFF] transition-all">
                                    Update Password
                                </button>
                            </div>
                            <div className="pt-[24px] border-t border-[#D1D5DB]/20">
                                <h4 className="text-[15px] font-[700] text-[#111827] mb-[12px]">Two-Factor Authentication</h4>
                                <p className="text-[13px] text-[#6B7280] mb-[16px]">Add an extra layer of security to your account</p>
                                <button className="px-[24px] py-[12px] bg-[#111827] text-white text-[13px] font-[700] rounded-[8px] hover:bg-[#1D4ED8] transition-all">
                                    Enable 2FA
                                </button>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="lg:col-span-4 space-y-[32px]">
                    <Card className="bg-[#111827] border-none p-[40px] text-white shadow-xl">
                        <h3 className="text-[18px] font-[700] mb-[24px]">Account Status</h3>
                        <div className="space-y-[20px]">
                            <div className="p-[20px] bg-white/5 rounded-[12px] border border-white/10">
                                <p className="text-[11px] text-white/50 uppercase font-[700] mb-[8px]">Account Type</p>
                                <p className="text-[18px] font-[700]">Professional</p>
                            </div>
                            <div className="p-[20px] bg-white/5 rounded-[12px] border border-white/10">
                                <p className="text-[11px] text-white/50 uppercase font-[700] mb-[8px]">Member Since</p>
                                <p className="text-[18px] font-[700]">Jan 2022</p>
                            </div>
                            <div className="p-[20px] bg-white/5 rounded-[12px] border border-white/10">
                                <p className="text-[11px] text-white/50 uppercase font-[700] mb-[8px]">Verification Status</p>
                                <div className="flex items-center gap-[8px]">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#10B981]"><polyline points="20 6 9 17 4 12" /></svg>
                                    <p className="text-[16px] font-[700] text-[#10B981]">Verified</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[40px]">
                        <h4 className="text-[16px] font-[700] text-[#111827] mb-[16px]">Data & Privacy</h4>
                        <div className="space-y-[16px]">
                            <button className="w-full py-[12px] bg-[#F9FAFB] border border-[#D1D5DB] text-[#111827] text-[13px] font-[700] rounded-[8px] hover:bg-[#FFFFFF] transition-all text-left px-[16px]">
                                Download My Data
                            </button>
                            <button className="w-full py-[12px] bg-[#F9FAFB] border border-[#D1D5DB] text-[#111827] text-[13px] font-[700] rounded-[8px] hover:bg-[#FFFFFF] transition-all text-left px-[16px]">
                                Privacy Settings
                            </button>
                            <button className="w-full py-[12px] bg-[#F9FAFB] border border-[#D1D5DB] text-[#111827] text-[13px] font-[700] rounded-[8px] hover:bg-[#FFFFFF] transition-all text-left px-[16px]">
                                Cookie Preferences
                            </button>
                        </div>
                    </Card>

                    <Card className="bg-[#FEF2F2] border-[#EF4444]/20 p-[40px]">
                        <h4 className="text-[16px] font-[700] text-[#EF4444] mb-[12px]">Danger Zone</h4>
                        <p className="text-[13px] text-[#6B7280] mb-[20px]">Permanently delete your account and all associated data</p>
                        <button className="w-full py-[12px] bg-[#EF4444] text-white text-[13px] font-[700] rounded-[8px] hover:bg-[#DC2626] transition-all">
                            Delete Account
                        </button>
                    </Card>
                </div>
            </div>
        </div>
    );
}
