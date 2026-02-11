"use client";

import React from 'react';

/**
 * Authentication Layout Logic
 * Provides a clean, focused portal for identity verification nodes.
 */
export default function AuthLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center p-[24px]">
            <div className="w-full">
                {children}
            </div>

            <p className="mt-[40px] text-[12px] text-[#9CA3AF] font-[600]">
                Institutional Encryption Active • Real Estate Platform Forensic
            </p>
        </div>
    );
}
