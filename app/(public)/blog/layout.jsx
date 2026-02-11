"use client";

import React from 'react';
import { Breadcrumb } from '@/components/ui/navigation';

/**
 * Editorial Content Layout
 * Provides a structured visual archetype for research and resource nodes.
 */
export default function BlogLayout({ children }) {
    return (
        <div className="bg-[#FFFFFF] min-h-screen">
            <div className="max-w-[1240px] mx-auto px-[32px] py-[60px]">
                <div className="mb-[40px]">
                    <Breadcrumb items={[
                        { label: 'Home', href: '/' },
                        { label: 'Research', href: '/blog' }
                    ]} />
                </div>
                {children}
            </div>
        </div>
    );
}
