
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Card, { CardTitle, CardDescription } from '@/components/ui/data/Card';
import Link from 'next/link';

const ACTIONS = [
    { title: "Browse Inventory", desc: "Access the institutional market catalog.", href: "/tenant/listings", color: "bg-[#1D4ED8]" },
    { title: "Initialize Application", desc: "Deploy your credentials to a new asset node.", href: "/tenant/applications/wizard", color: "bg-[#111827]" },
    { title: "Protocol Support", desc: "Query the technical knowledge base.", href: "/tenant/support", color: "bg-[#6B7280]" },
    { title: "Settlement Protocol", desc: "Manage financial established methods.", href: "/tenant/payments", color: "bg-[#1D4ED8]" },
    { title: "Document Repository", desc: "View executed legal forensics.", href: "/tenant/documents", color: "bg-[#111827]" },
    { title: "Identity Audit", desc: "Update verified resident coordinates.", href: "/tenant/profile", color: "bg-[#6B7280]" }
];

export default function TenantQuickActionsPage() {
    return (
        <div className="space-y-[40px]">
            <div>
                <span className="text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Command Node</span>
                <h1 className="text-[32px] font-[700] text-[#111827]">Quick Actions</h1>
                <p className="text-[16px] text-[#6B7280]">High-velocity pathways to core portal functions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                {ACTIONS.map((action, i) => (
                    <motion.div
                        key={action.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                    >
                        <Link href={action.href} className="group block h-full">
                            <Card className="h-full bg-[#FFFFFF] border-[#D1D5DB]/30 hover:border-[#1D4ED8] transition-all p-[40px] flex flex-col items-start gap-[24px]">
                                <div className={`w-[56px] h-[56px] ${action.color} rounded-[12px] flex items-center justify-center text-[#FFFFFF] shadow-lg group-hover:scale-110 transition-transform`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
                                </div>
                                <div>
                                    <CardTitle className="text-[18px] mb-[8px] group-hover:text-[#1D4ED8] transition-colors">{action.title}</CardTitle>
                                    <CardDescription className="text-[14px] leading-[1.6]">
                                        {action.desc}
                                    </CardDescription>
                                </div>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
