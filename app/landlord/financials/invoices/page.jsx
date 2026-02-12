
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';

const INVOICES = [
    { id: 'INV-2023-142', tenant: 'Dr. Alexander Hoffman', asset: 'The Metropolitan Suite', amount: 4200, date: 'Nov 01, 2023', status: 'Paid', dueDate: 'Nov 05, 2023' },
    { id: 'INV-2023-143', tenant: 'Sarah Sterling', asset: 'Skyview Loft', amount: 3800, date: 'Nov 01, 2023', status: 'Pending', dueDate: 'Nov 05, 2023' },
    { id: 'INV-2023-144', tenant: 'Enterprise Node #42', asset: 'Industrial Complex A', amount: 8450, date: 'Nov 01, 2023', status: 'Paid', dueDate: 'Nov 05, 2023' },
    { id: 'INV-2023-141', tenant: 'Marcus Vane', asset: 'Downtown Loft', amount: 3200, date: 'Oct 01, 2023', status: 'Overdue', dueDate: 'Oct 05, 2023' }
];

export default function LandlordInvoicesPage() {
    return (
        <div className="space-y-[32px] md:space-y-[40px]">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-[20px] md:gap-[24px]">
                <div>
                    <span className="text-[11px] md:text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Billing Protocol</span>
                    <h1 className="text-[28px] md:text-[32px] font-[700] text-[#111827]">Invoice Management</h1>
                    <p className="text-[14px] md:text-[16px] text-[#6B7280]">Automated billing cycles and resident payment tracking.</p>
                </div>
                <button className="w-full md:w-auto px-[24px] py-[12px] bg-[#111827] text-white rounded-[8px] text-[13px] md:text-[14px] font-[700] hover:bg-[#1D4ED8] transition-all">
                    Generate Manual Invoice
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[24px]">
                {[
                    { label: "Total Outstanding", val: "$16,450", color: "text-[#111827]" },
                    { label: "Paid This Month", val: "$52,400", color: "text-[#10B981]" },
                    { label: "Overdue Invoices", val: "1", color: "text-[#EF4444]" },
                    { label: "Collection Rate", val: "98.2%", color: "text-[#1D4ED8]" }
                ].map((stat, i) => (
                    <motion.div key={stat.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                        <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[32px]">
                            <p className="text-[9px] md:text-[10px] uppercase font-[700] text-[#6B7280] tracking-[0.1em] mb-[8px]">{stat.label}</p>
                            <h3 className={`text-[20px] md:text-[24px] font-[700] truncate ${stat.color}`}>{stat.val}</h3>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="bg-[#FFFFFF] rounded-[16px] border border-[#D1D5DB]/30 overflow-hidden shadow-sm">
                <div className="p-[20px] md:p-[24px] border-b border-[#D1D5DB]/20 bg-[#F9FAFB]/50 flex flex-col sm:flex-row justify-between sm:items-center gap-[16px]">
                    <h3 className="text-[16px] md:text-[18px] font-[700] text-[#111827]">Invoice Ledger</h3>
                    <div className="flex gap-[8px] md:gap-[12px]">
                        <button className="flex-grow sm:flex-grow-0 px-[12px] md:px-[16px] py-[8px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[6px] text-[11px] md:text-[12px] font-[700] text-[#6B7280]">Filter</button>
                        <button className="flex-grow sm:flex-grow-0 px-[12px] md:px-[16px] py-[8px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[6px] text-[11px] md:text-[12px] font-[700] text-[#6B7280]">Export</button>
                    </div>
                </div>
                <div className="overflow-x-auto overflow-hidden">
                    <table className="w-full text-left min-w-[800px]">
                        <thead>
                            <tr className="bg-[#F9FAFB] border-b border-[#D1D5DB]/50">
                                <th className="p-[16px] md:p-[20px] text-[10px] md:text-[11px] font-[700] uppercase text-[#6B7280]">Invoice ID</th>
                                <th className="p-[16px] md:p-[20px] text-[10px] md:text-[11px] font-[700] uppercase text-[#6B7280]">Resident</th>
                                <th className="p-[16px] md:p-[20px] text-[10px] md:text-[11px] font-[700] uppercase text-[#6B7280]">Asset Node</th>
                                <th className="p-[16px] md:p-[20px] text-[10px] md:text-[11px] font-[700] uppercase text-[#6B7280]">Amount</th>
                                <th className="p-[16px] md:p-[20px] text-[10px] md:text-[11px] font-[700] uppercase text-[#6B7280]">Due Date</th>
                                <th className="p-[16px] md:p-[20px] text-[10px] md:text-[11px] font-[700] uppercase text-[#6B7280]">Status</th>
                                <th className="p-[16px] md:p-[20px] text-right text-[10px] md:text-[11px] font-[700] uppercase text-[#6B7280]">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#D1D5DB]/20">
                            {INVOICES.map((invoice) => (
                                <tr key={invoice.id} className="hover:bg-[#F9FAFB]/50 transition-colors">
                                    <td className="p-[16px] md:p-[20px]">
                                        <p className="text-[13px] md:text-[14px] font-[700] text-[#111827]">{invoice.id}</p>
                                        <p className="text-[10px] md:text-[11px] text-[#6B7280]">{invoice.date}</p>
                                    </td>
                                    <td className="p-[16px] md:p-[20px] text-[13px] md:text-[14px] font-[600] text-[#111827]">{invoice.tenant}</td>
                                    <td className="p-[16px] md:p-[20px] text-[13px] md:text-[14px] text-[#6B7280]">{invoice.asset}</td>
                                    <td className="p-[16px] md:p-[20px] text-[15px] md:text-[16px] font-[700] text-[#111827]">${invoice.amount.toLocaleString()}</td>
                                    <td className="p-[16px] md:p-[20px] text-[13px] md:text-[14px] text-[#6B7280]">{invoice.dueDate}</td>
                                    <td className="p-[16px] md:p-[20px]">
                                        <span className={`px-[8px] md:px-[10px] py-[3px] md:py-[4px] rounded-[4px] text-[9px] md:text-[10px] font-[800] uppercase ${invoice.status === 'Paid' ? 'bg-[#10B981]/10 text-[#10B981]' :
                                            invoice.status === 'Pending' ? 'bg-[#F59E0B]/10 text-[#F59E0B]' :
                                                'bg-[#EF4444]/10 text-[#EF4444]'
                                            }`}>
                                            {invoice.status}
                                        </span>
                                    </td>
                                    <td className="p-[16px] md:p-[20px] text-right">
                                        <button className="text-[12px] md:text-[13px] font-[700] text-[#1D4ED8] hover:underline">View</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Mobile View Card List (optional enhancement, but scrollable table is safer for now) */}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] md:gap-[40px]">
                <Card className="bg-[#111827] border-none p-[24px] md:p-[48px] text-white shadow-xl">
                    <h3 className="text-[18px] md:text-[20px] font-[700] mb-[20px] md:mb-[24px]">Automated Billing</h3>
                    <div className="space-y-[16px] md:space-y-[24px]">
                        {[
                            { t: "Monthly Cycle", d: "Invoices auto-generate on the 1st of each month at 00:00 UTC.", active: true },
                            { t: "Payment Reminders", d: "Automated reminders sent 3 days before due date.", active: true },
                            { t: "Late Fee Protocol", d: "5% late fee applied automatically after 5-day grace period.", active: false }
                        ].map(item => (
                            <div key={item.t} className="flex flex-col sm:flex-row justify-between sm:items-center gap-[16px] p-[16px] md:p-[20px] bg-white/5 rounded-[12px] border border-white/10">
                                <div className="space-y-[4px]">
                                    <p className="text-[14px] md:text-[15px] font-[700]">{item.t}</p>
                                    <p className="text-[12px] md:text-[13px] text-white/50">{item.d}</p>
                                </div>
                                <div className={`w-[40px] h-[20px] rounded-full relative transition-colors shrink-0 ${item.active ? 'bg-[#1D4ED8]' : 'bg-white/10'}`}>
                                    <div className={`absolute top-[4px] w-[12px] h-[12px] bg-white rounded-full transition-all ${item.active ? 'left-[24px]' : 'left-[4px]'}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="bg-[#FFFFFF] border-[#D1D5DB]/30 p-[24px] md:p-[48px] flex flex-col justify-center text-center space-y-[20px] md:space-y-[24px]">
                    <div className="w-[60px] md:w-[80px] h-[60px] md:h-[80px] bg-[#10B981]/10 rounded-full flex items-center justify-center mx-auto text-[#10B981]">
                        <svg className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                    </div>
                    <div>
                        <h3 className="text-[20px] md:text-[22px] font-[700] text-[#111827]">98.2% Collection Rate</h3>
                        <p className="text-[14px] md:text-[15px] text-[#6B7280] max-w-[400px] mx-auto leading-[1.6]">
                            Your automated billing protocols maintain industry-leading payment velocity across all asset nodes.
                        </p>
                    </div>
                    <button className="w-full sm:w-auto sm:self-center px-[24px] py-[14px] bg-[#111827] text-white font-[700] rounded-[8px] hover:bg-[#1D4ED8] transition-all text-[13px] md:text-[14px]">
                        View Payment Analytics
                    </button>
                </Card>
            </div>
        </div>
    );
}
