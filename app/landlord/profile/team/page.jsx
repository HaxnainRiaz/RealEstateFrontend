
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import TextField from '@/components/ui/input/TextField';

const TEAM_MEMBERS = [
    { id: '1', name: 'Sarah Johnson', email: 'sarah@smithproperties.com', role: 'Property Manager', permissions: 'Full Access', status: 'Active', joined: 'Jan 2022' },
    { id: '2', name: 'Michael Chen', email: 'michael@smithproperties.com', role: 'Maintenance Coordinator', permissions: 'Maintenance Only', status: 'Active', joined: 'Mar 2022' },
    { id: '3', name: 'Emily Rodriguez', email: 'emily@smithproperties.com', role: 'Leasing Agent', permissions: 'Listings & Tenants', status: 'Active', joined: 'Jun 2023' }
];

export default function LandlordTeamPage() {
    const [showInviteModal, setShowInviteModal] = useState(false);

    return (
        <div className="space-y-[40px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px]">
                <div>
                    <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Access Management</span>
                    <h1 className="text-[32px] font-[700] text-[#111827]">Team Members</h1>
                    <p className="text-[16px] text-[#6B7280]">Manage team access and permissions for your portfolio.</p>
                </div>
                <button
                    onClick={() => setShowInviteModal(true)}
                    className="px-[24px] py-[12px] bg-[#111827] text-white rounded-[8px] text-[14px] font-[700] hover:bg-[#1D4ED8] transition-all"
                >
                    Invite Team Member
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
                {[
                    { label: "Active Members", val: "3" },
                    { label: "Pending Invites", val: "1" },
                    { label: "Access Levels", val: "4 Types" }
                ].map((stat, i) => (
                    <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] text-center">
                            <p className="text-[10px] uppercase font-[700] text-[#6B7280] tracking-[0.1em] mb-[8px]">{stat.label}</p>
                            <h3 className="text-[24px] font-[700] text-[#111827]">{stat.val}</h3>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px]">
                <div className="lg:col-span-8 space-y-[24px]">
                    {TEAM_MEMBERS.map((member, i) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[32px] hover:border-[#1D4ED8] transition-all group">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-[24px]">
                                    <div className="flex items-center gap-[20px]">
                                        <div className="w-[56px] h-[56px] bg-[#1D4ED8]/10 rounded-full flex items-center justify-center text-[#1D4ED8] text-[18px] font-[700]">
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div>
                                            <h3 className="text-[18px] font-[700] text-[#111827] mb-[4px]">{member.name}</h3>
                                            <p className="text-[14px] text-[#6B7280]">{member.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-[32px]">
                                        <div className="text-right">
                                            <p className="text-[11px] text-[#6B7280] uppercase font-[700] mb-[4px]">Role</p>
                                            <p className="text-[14px] font-[700] text-[#111827]">{member.role}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[11px] text-[#6B7280] uppercase font-[700] mb-[4px]">Permissions</p>
                                            <p className="text-[14px] font-[700] text-[#1D4ED8]">{member.permissions}</p>
                                        </div>
                                        <div className="flex gap-[8px]">
                                            <button className="p-[10px] bg-[#F9FAFB] border border-[#D1D5DB] rounded-[8px] hover:bg-[#FFFFFF] transition-all">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                            </button>
                                            <button className="p-[10px] bg-[#FEF2F2] border border-[#EF4444]/20 rounded-[8px] hover:bg-[#FEE2E2] transition-all text-[#EF4444]">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-[20px] pt-[20px] border-t border-[#D1D5DB]/20 flex justify-between items-center">
                                    <div className="flex items-center gap-[16px] text-[13px] text-[#6B7280]">
                                        <span>Joined: {member.joined}</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-[6px]">
                                            <div className="w-[6px] h-[6px] rounded-full bg-[#10B981]" />
                                            {member.status}
                                        </span>
                                    </div>
                                    <button className="text-[13px] font-[700] text-[#1D4ED8] hover:underline">View Activity Log</button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="lg:col-span-4 space-y-[32px]">
                    <Card className="bg-[#111827] border-none p-[40px] text-white shadow-xl">
                        <h3 className="text-[18px] font-[700] mb-[24px]">Permission Levels</h3>
                        <div className="space-y-[20px]">
                            {[
                                { level: 'Full Access', desc: 'Complete control over all portfolio features' },
                                { level: 'Property Manager', desc: 'Manage properties, tenants, and maintenance' },
                                { level: 'Leasing Agent', desc: 'Access to listings and tenant applications' },
                                { level: 'Maintenance Only', desc: 'View and manage maintenance requests' }
                            ].map((perm, i) => (
                                <div key={i} className="p-[16px] bg-white/5 rounded-[12px] border border-white/10">
                                    <h4 className="text-[14px] font-[700] mb-[4px]">{perm.level}</h4>
                                    <p className="text-[12px] text-white/50">{perm.desc}</p>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[40px]">
                        <h4 className="text-[16px] font-[700] text-[#111827] mb-[16px]">Pending Invitations</h4>
                        <div className="p-[20px] bg-[#F9FAFB] rounded-[12px] border border-[#D1D5DB]/20">
                            <div className="flex justify-between items-start mb-[12px]">
                                <div>
                                    <p className="text-[14px] font-[700] text-[#111827]">james@example.com</p>
                                    <p className="text-[12px] text-[#6B7280]">Sent 2 days ago</p>
                                </div>
                                <span className="px-[8px] py-[2px] bg-[#F59E0B]/10 text-[#F59E0B] text-[9px] font-[800] uppercase rounded-[4px]">
                                    Pending
                                </span>
                            </div>
                            <button className="text-[13px] font-[700] text-[#EF4444] hover:underline">Revoke Invitation</button>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Invite Modal */}
            {showInviteModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-[20px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-[24px] p-[48px] max-w-[500px] w-full"
                    >
                        <h3 className="text-[24px] font-[700] text-[#111827] mb-[24px]">Invite Team Member</h3>
                        <div className="space-y-[20px]">
                            <TextField label="Email Address" placeholder="colleague@example.com" />
                            <div className="space-y-[8px]">
                                <label className="text-[14px] font-[600] text-[#111827]">Permission Level</label>
                                <select className="w-full px-[20px] py-[16px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] focus:outline-none focus:border-[#1D4ED8]">
                                    <option>Full Access</option>
                                    <option>Property Manager</option>
                                    <option>Leasing Agent</option>
                                    <option>Maintenance Only</option>
                                </select>
                            </div>
                            <TextField label="Personal Message (Optional)" placeholder="Welcome to the team!" />
                        </div>
                        <div className="flex gap-[16px] mt-[32px]">
                            <button
                                onClick={() => setShowInviteModal(false)}
                                className="flex-1 px-[24px] py-[14px] bg-[#F9FAFB] border border-[#D1D5DB] text-[#111827] text-[14px] font-[700] rounded-[8px] hover:bg-[#FFFFFF] transition-all"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setShowInviteModal(false)}
                                className="flex-1 px-[24px] py-[14px] bg-[#111827] text-white text-[14px] font-[700] rounded-[8px] hover:bg-[#1D4ED8] transition-all"
                            >
                                Send Invitation
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
