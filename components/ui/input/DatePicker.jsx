"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Institutional Temporal Selection Node
 * Provides a forensic interface for selecting specific temporal coordinates.
 */
export default function DatePicker({ label, value, onChange, name, error, required = false, className = "" }) {
    return (
        <div className={`flex flex-col gap-[8px] ${className}`}>
            {label && (
                <label className="text-[12px] font-[700] uppercase tracking-[0.1em] text-[#6B7280]">
                    {label}
                    {required && <span className="text-[#EF4444] ml-1">*</span>}
                </label>
            )}
            <div className="relative">
                <input
                    type="date"
                    name={name}
                    value={value}
                    required={required}
                    onChange={(e) => onChange(e.target.value)}
                    className={`w-full px-[16px] py-[12px] bg-[#FFFFFF] border ${error ? 'border-[#EF4444]' : 'border-[#D1D5DB]'} rounded-[10px] text-[15px] font-[600] text-[#111827] focus:border-[#1D4ED8] focus:ring-1 focus:ring-[#1D4ED8] transition-all outline-none appearance-none`}
                    style={{
                        colorScheme: 'light'
                    }}
                />
                <div className="absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none text-[#9CA3AF]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
            </div>
            {error && (
                <p className="text-[#EF4444] text-[12px] font-[500] mt-[4px]">
                    {error}
                </p>
            )}
        </div>
    );
}
