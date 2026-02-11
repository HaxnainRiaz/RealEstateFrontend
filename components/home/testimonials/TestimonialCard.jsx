"use client";

import React from 'react';
import Card from '@/components/ui/data/Card';

export default function TestimonialCard({ content, author, role, company, image }) {
    return (
        <Card className="bg-[#FFFFFF] p-[32px] h-full flex flex-col justify-between border border-[#E5E7EB]">
            <div>
                <div className="flex gap-[4px] mb-[24px]">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#FBBF24" />
                        </svg>
                    ))}
                </div>
                <p className="text-[18px] text-[#4B5563] leading-[1.6] italic mb-[32px]">
                    "{content}"
                </p>
            </div>

            <div className="flex items-center gap-[16px]">
                <div className="w-[48px] h-[48px] rounded-full bg-[#F3F4F6] overflow-hidden">
                    <img src={image} alt={author} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h4 className="text-[16px] font-[700] text-[#111827]">{author}</h4>
                    <p className="text-[14px] text-[#6B7280]">{role}, {company}</p>
                </div>
            </div>
        </Card>
    );
}
