"use client";

import React from 'react';

export default function Skeleton({ className = "", variant = "rect" }) {
    const variants = {
        rect: "rounded-[4px]",
        circle: "rounded-full",
        text: "h-[16px] rounded-[4px] w-full"
    };

    return (
        <div
            className={`
                bg-[#E5E7EB] 
                animate-pulse 
                ${variants[variant] || variants.rect} 
                ${className}
            `}
        />
    );
}

export function SkeletonText({ lines = 3, className = "" }) {
    return (
        <div className={`space-y-[12px] ${className}`}>
            {[...Array(lines)].map((_, i) => (
                <Skeleton key={i} variant="text" className={i === lines - 1 ? 'w-[60%]' : 'w-full'} />
            ))}
        </div>
    );
}

export function SkeletonCard({ className = "" }) {
    return (
        <div className={`bg-[#FFFFFF] border border-[#E5E7EB] rounded-[16px] p-[24px] space-y-[24px] ${className}`}>
            <Skeleton className="h-[200px] w-full rounded-[12px]" />
            <div className="space-y-[12px]">
                <Skeleton className="h-[24px] w-[70%]" />
                <Skeleton className="h-[16px] w-[40%]" />
            </div>
            <div className="flex justify-between pt-[16px] border-t border-[#F3F4F6]">
                <Skeleton className="h-[20px] w-[80px]" />
                <Skeleton className="h-[20px] w-[80px]" />
            </div>
        </div>
    );
}
