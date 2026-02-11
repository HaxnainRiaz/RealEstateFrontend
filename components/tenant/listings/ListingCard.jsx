"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ListingCard({ listing, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            <Link href={`/tenant/listings/${listing.id}`}>
                <Card className="bg-[#FFFFFF] rounded-[16px] overflow-hidden border border-[#E5E7EB] hover:border-[#1D4ED8] hover:shadow-lg transition-all group flex flex-col h-full">
                    <div className="relative h-[240px] overflow-hidden">
                        <img
                            src={listing.images[0]}
                            alt={listing.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-[16px] right-[16px] bg-[#111827]/80 backdrop-blur-sm px-[12px] py-[6px] rounded-[8px] text-[#FFFFFF] text-[12px] font-[600]">
                            {listing.category}
                        </div>
                        <div className="absolute bottom-[16px] left-[16px] bg-[#10B981] px-[12px] py-[4px] rounded-[4px] text-[#FFFFFF] text-[10px] font-[700] uppercase tracking-[0.05em]">
                            {listing.status}
                        </div>
                    </div>

                    <div className="p-[24px] flex flex-col flex-1">
                        <div className="flex justify-between items-start mb-[12px]">
                            <h3 className="text-[18px] font-[700] text-[#111827] group-hover:text-[#1D4ED8] transition-colors line-clamp-1">{listing.title}</h3>
                            <span className="text-[18px] font-[800] text-[#111827]">${listing.price.toLocaleString()}</span>
                        </div>

                        <p className="text-[14px] text-[#6B7280] mb-[16px] flex items-center gap-[4px]">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            {listing.address}
                        </p>

                        <div className="flex items-center gap-[16px] pt-[16px] border-t border-[#F3F4F6] mt-auto">
                            <span className="text-[12px] font-[600] text-[#374151] flex items-center gap-[4px]"><span className="text-[#9CA3AF] font-[400]">Beds</span> {listing.beds}</span>
                            <span className="text-[12px] font-[600] text-[#374151] flex items-center gap-[4px]"><span className="text-[#9CA3AF] font-[400]">Baths</span> {listing.baths}</span>
                            <span className="text-[12px] font-[600] text-[#374151] flex items-center gap-[4px]"><span className="text-[#9CA3AF] font-[400]">Sqft</span> {listing.sqft}</span>
                        </div>
                    </div>
                </Card>
            </Link>
        </motion.div>
    );
}
