"use client";

import React from 'react';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import { motion } from 'framer-motion';

export default function EmptyState({
    title = "No Data Available",
    description = "There are no items to display at this moment.",
    action,
    actionLabel = "Refresh",
    icon
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-[64px] px-[24px] text-center bg-[#F9FAFB] border border-dashed border-[#D1D5DB] rounded-[16px]"
        >
            <div className="w-[64px] h-[64px] bg-[#F3F4F6] rounded-full flex items-center justify-center mb-[24px] text-[#9CA3AF]">
                {icon || (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                )}
            </div>

            <h3 className="text-[18px] font-[700] text-[#111827] mb-[8px]">{title}</h3>
            <p className="text-[16px] text-[#6B7280] max-w-[400px] mb-[32px]">{description}</p>

            {action && (
                <PrimaryButton onClick={action}>
                    {actionLabel}
                </PrimaryButton>
            )}
        </motion.div>
    );
}
