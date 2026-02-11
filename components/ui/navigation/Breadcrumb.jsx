"use client";

import React from 'react';
import Link from 'next/link';

export default function Breadcrumb({ items = [] }) {
    return (
        <nav className="flex items-center gap-[8px] text-[12px] font-[600] uppercase tracking-[0.05em] text-[#9CA3AF]">
            <Link href="/" className="hover:text-[#1D4ED8] transition-colors">Home</Link>
            {items.map((item, idx) => (
                <React.Fragment key={idx}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    {item.href ? (
                        <Link href={item.href} className="hover:text-[#1D4ED8] transition-colors">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-[#111827]">{item.label}</span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
}
