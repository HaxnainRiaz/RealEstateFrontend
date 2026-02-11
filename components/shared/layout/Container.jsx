"use client";

import React from 'react';

export default function Container({ children, className = "", size = "default", fullHeight = false }) {
    const maxWidths = {
        default: 'max-w-[1240px]',
        small: 'max-w-[800px]',
        large: 'max-w-[1440px]',
        full: 'max-w-full'
    };

    return (
        <div className={`
            w-full 
            mx-auto 
            px-[24px] 
            md:px-[40px] 
            lg:px-[80px] 
            ${maxWidths[size] || maxWidths.default} 
            ${fullHeight ? 'h-full' : ''} 
            ${className}
        `}>
            {children}
        </div>
    );
}
