
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';

const INVOICES_HISTORY = [
    { id: 'INV-2023-11', date: 'Nov 01, 2023', amount: 149, status: 'Paid', plan: 'Professional' },
    { id: 'INV-2023-10', date: 'Oct 01, 2023', amount: 149, status: 'Paid', plan: 'Professional' },
    { id: 'INV-2023-09', date: 'Sep 01, 2023', amount: 149, status: 'Paid', plan: 'Professional' }
];

export default function LandlordBillingPage() {
    return (
        <div className="space-y-[40px]">
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Subscription Management</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Billing & Subscription</h1>
                <p className="text-[16px] text-[#6B7280]">Manage your subscription plan and payment methods.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px]">
                <div className="lg:col-span-8 space-y-[32px]">
                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px]">
                        <div className="flex justify-between items-start mb-[32px]">
                            <div>
                                <h3 className="text-[20px] font-[700] text-[#111827] mb-[8px]">Current Plan</h3>
                                <p className="text-[14px] text-[#6B7280]">You're on the Professional plan</p>
                            </div>
                            <span className="px-[12px] py-[6px] bg-[#10B981]/10 text-[#10B981] text-[11px] font-[800] uppercase rounded-[6px]">
                                Active
                            </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mb-[32px]">
                            <div className="p-[24px] bg-[#F9FAFB] rounded-[16px]">
                                <p className="text-[11px] text-[#6B7280] uppercase font-[700] mb-[8px]">Monthly Cost</p>
                                <p className="text-[28px] font-[700] text-[#111827]">$149</p>
                            </div>
                            <div className="p-[24px] bg-[#F9FAFB] rounded-[16px]">
                                <p className="text-[11px] text-[#6B7280] uppercase font-[700] mb-[8px]">Next Billing</p>
                                <p className="text-[16px] font-[700] text-[#111827]">Dec 01, 2023</p>
                            </div>
                            <div className="p-[24px] bg-[#F9FAFB] rounded-[16px]">
                                <p className="text-[11px] text-[#6B7280] uppercase font-[700] mb-[8px]">Properties</p>
                                <p className="text-[16px] font-[700] text-[#111827]">Unlimited</p>
                            </div>
                        </div>
                        <div className="space-y-[12px] mb-[32px]">
                            <h4 className="text-[15px] font-[700] text-[#111827]">Plan Features</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[12px]">
                                {[
                                    'Unlimited Properties',
                                    'Advanced Analytics',
                                    'Automated Billing',
                                    'Team Collaboration (5 users)',
                                    'Priority Support',
                                    'Custom Branding',
                                    'API Access',
                                    'White-label Reports'
                                ].map(feature => (
                                    <div key={feature} className="flex items-center gap-[12px]">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#10B981]"><polyline points="20 6 9 17 4 12" /></svg>
                                        <span className="text-[14px] text-[#6B7280]">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-[16px]">
                            <button className="px-[24px] py-[12px] bg-[#F9FAFB] border border-[#D1D5DB] text-[#111827] text-[13px] font-[700] rounded-[8px] hover:bg-[#FFFFFF] transition-all">
                                Change Plan
                            </button>
                            <button className="px-[24px] py-[12px] bg-[#F9FAFB] border border-[#D1D5DB] text-[#EF4444] text-[13px] font-[700] rounded-[8px] hover:bg-[#FEF2F2] transition-all">
                                Cancel Subscription
                            </button>
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px]">
                        <h3 className="text-[20px] font-[700] text-[#111827] mb-[32px]">Payment Method</h3>
                        <div className="flex items-center justify-between p-[24px] bg-[#F9FAFB] rounded-[16px] border border-[#D1D5DB]/20 mb-[24px]">
                            <div className="flex items-center gap-[20px]">
                                <div className="w-[56px] h-[40px] bg-[#1D4ED8]/10 rounded-[8px] flex items-center justify-center text-[#1D4ED8] font-[700]">
                                    VISA
                                </div>
                                <div>
                                    <p className="text-[15px] font-[700] text-[#111827]">•••• •••• •••• 4242</p>
                                    <p className="text-[13px] text-[#6B7280]">Expires 12/2025</p>
                                </div>
                            </div>
                            <div className="flex gap-[12px]">
                                <button className="px-[20px] py-[10px] bg-[#FFFFFF] border border-[#D1D5DB] text-[#111827] text-[13px] font-[700] rounded-[8px] hover:bg-[#F9FAFB] transition-all">
                                    Edit
                                </button>
                                <button className="px-[20px] py-[10px] bg-[#FFFFFF] border border-[#D1D5DB] text-[#EF4444] text-[13px] font-[700] rounded-[8px] hover:bg-[#FEF2F2] transition-all">
                                    Remove
                                </button>
                            </div>
                        </div>
                        <button className="px-[24px] py-[12px] bg-[#111827] text-white text-[13px] font-[700] rounded-[8px] hover:bg-[#1D4ED8] transition-all">
                            Add Payment Method
                        </button>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[48px]">
                        <div className="flex justify-between items-center mb-[24px]">
                            <h3 className="text-[20px] font-[700] text-[#111827]">Billing History</h3>
                            <button className="text-[13px] font-[700] text-[#1D4ED8] hover:underline">Download All</button>
                        </div>
                        <div className="space-y-[12px]">
                            {INVOICES_HISTORY.map((invoice, i) => (
                                <motion.div
                                    key={invoice.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                    className="flex items-center justify-between p-[20px] bg-[#F9FAFB] rounded-[12px] border border-[#D1D5DB]/20 hover:border-[#1D4ED8] transition-all"
                                >
                                    <div className="flex items-center gap-[20px]">
                                        <div className="w-[40px] h-[40px] bg-[#1D4ED8]/10 rounded-[8px] flex items-center justify-center text-[#1D4ED8]">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-[15px] font-[700] text-[#111827]">{invoice.id}</p>
                                            <p className="text-[13px] text-[#6B7280]">{invoice.date} • {invoice.plan}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-[24px]">
                                        <div className="text-right">
                                            <p className="text-[18px] font-[700] text-[#111827]">${invoice.amount}</p>
                                            <span className="px-[8px] py-[2px] bg-[#10B981]/10 text-[#10B981] text-[9px] font-[800] uppercase rounded-[4px]">
                                                {invoice.status}
                                            </span>
                                        </div>
                                        <button className="text-[13px] font-[700] text-[#1D4ED8] hover:underline">Download</button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </Card>
                </div>

                <div className="lg:col-span-4 space-y-[32px]">
                    <Card className="bg-[#111827] border-none p-[40px] text-white shadow-xl">
                        <h3 className="text-[18px] font-[700] mb-[24px]">Upgrade Benefits</h3>
                        <div className="space-y-[20px]">
                            {[
                                { title: 'Enterprise Plan', desc: 'Unlimited team members, dedicated support, custom integrations', price: '$399/mo' },
                                { title: 'Annual Billing', desc: 'Save 20% with annual subscription', price: 'Save $358/yr' }
                            ].map((option, i) => (
                                <div key={i} className="p-[20px] bg-white/5 rounded-[12px] border border-white/10 space-y-[12px]">
                                    <div className="flex justify-between items-start">
                                        <h4 className="text-[15px] font-[700]">{option.title}</h4>
                                        <span className="text-[14px] font-[700] text-[#1D4ED8]">{option.price}</span>
                                    </div>
                                    <p className="text-[13px] text-white/60 leading-[1.6]">{option.desc}</p>
                                    <button className="w-full py-[10px] bg-white/10 border border-white/20 rounded-[8px] text-[12px] font-[700] hover:bg-white/20 transition-all">
                                        Learn More
                                    </button>
                                </div>
                            ))}
                        </div>
                    </Card>

                    <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[40px]">
                        <h4 className="text-[16px] font-[700] text-[#111827] mb-[16px]">Usage This Month</h4>
                        <div className="space-y-[16px]">
                            {[
                                { metric: 'Properties', used: '12', limit: 'Unlimited' },
                                { metric: 'Team Members', used: '3', limit: '5' },
                                { metric: 'API Calls', used: '8.2K', limit: '50K' }
                            ].map((item, i) => (
                                <div key={i} className="space-y-[8px]">
                                    <div className="flex justify-between text-[13px]">
                                        <span className="text-[#6B7280] font-[600]">{item.metric}</span>
                                        <span className="font-[700] text-[#111827]">{item.used} / {item.limit}</span>
                                    </div>
                                    {item.limit !== 'Unlimited' && (
                                        <div className="h-[4px] bg-[#F3F4F6] rounded-full overflow-hidden">
                                            <div className="h-full bg-[#1D4ED8]" style={{ width: `${(parseInt(item.used.replace('K', '000')) / parseInt(item.limit.replace('K', '000'))) * 100}%` }} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
