"use client";

import React from 'react';

export default function Pagination({ currentPage = 1, totalPages = 10, onPageChange }) {
    const pages = Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-between py-[32px] border-t border-[#F3F4F6]">
            <p className="text-[14px] text-[#6B7280]">
                Showing page <span className="font-[600] text-[#111827]">{currentPage}</span> of <span className="font-[600] text-[#111827]">{totalPages}</span>
            </p>

            <div className="flex gap-[8px]">
                <button
                    disabled={currentPage === 1}
                    className="p-[8px] border border-[#D1D5DB] rounded-[6px] text-[#6B7280] hover:bg-[#F9FAFB] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>

                {pages.map(p => (
                    <button
                        key={p}
                        onClick={() => onPageChange && onPageChange(p)}
                        className={`w-[40px] h-[40px] rounded-[6px] text-[14px] font-[600] border transition-all ${currentPage === p ? 'bg-[#1D4ED8] border-[#1D4ED8] text-[#FFFFFF]' : 'bg-[#FFFFFF] border-[#D1D5DB] text-[#374151] hover:border-[#1D4ED8]'}`}
                    >
                        {p}
                    </button>
                ))}

                <button
                    disabled={currentPage === totalPages}
                    className="p-[8px] border border-[#D1D5DB] rounded-[6px] text-[#6B7280] hover:bg-[#F9FAFB] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            </div>
        </div>
    );
}
