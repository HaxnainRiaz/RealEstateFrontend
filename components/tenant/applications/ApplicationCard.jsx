"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';
import { motion } from 'framer-motion';

export default function ApplicationCard({ application, index }) {
    if (!application) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            <Card className="p-[24px] bg-[#FFFFFF] rounded-[16px] border border-[#E5E7EB] hover:border-[#1D4ED8] transition-colors relative group">
                <div className="flex justify-between items-start mb-[16px]">
                    <div>
                        <h3 className="text-[18px] font-[700] text-[#111827] mb-[4px]">{application.propertyTitle || `Application #${application.id}`}</h3>
                        <p className="text-[14px] text-[#6B7280]">{application.address || '123 Asset Lane'}</p>
                    </div>
                    <span className={`px-[12px] py-[4px] rounded-[4px] text-[12px] font-[700] uppercase tracking-[0.05em] 
                        ${application.status === 'approved' ? 'bg-[#10B981]/10 text-[#10B981]'
                            : application.status === 'rejected' ? 'bg-[#EF4444]/10 text-[#EF4444]'
                                : 'bg-[#F59E0B]/10 text-[#F59E0B]'}`}>
                        {application.status}
                    </span>
                </div>

                <div className="flex items-center gap-[24px] text-[14px] text-[#374151] mb-[24px]">
                    <div className="flex items-center gap-[6px]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        Submitted: {application.date || 'Oct 24, 2023'}
                    </div>
                    <div className="flex items-center gap-[6px]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                        Score: {application.score || 'In Progress'}
                    </div>
                </div>

                <div className="flex gap-[12px]">
                    <button className="flex-1 px-[16px] py-[10px] bg-[#111827] text-[#FFFFFF] font-[600] rounded-[6px] text-[14px] hover:bg-[#374151] transition-colors">
                        View Details
                    </button>
                    {application.status === 'pending' && (
                        <button className="px-[16px] py-[10px] bg-[#FFFFFF] border border-[#D1D5DB] text-[#374151] font-[600] rounded-[6px] text-[14px] hover:bg-[#F3F4F6] transition-colors">
                            Withdraw
                        </button>
                    )}
                </div>
            </Card>
        </motion.div>
    );
}
