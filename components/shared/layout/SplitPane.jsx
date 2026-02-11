"use client";

import React from 'react';

export default function SplitPane({ left, right, leftWidth = "30%", className = "" }) {
    return (
        <div className={`flex flex-col lg:flex-row gap-[40px] items-start ${className}`}>
            <aside
                className="w-full lg:sticky lg:top-[120px]"
                style={{ flexBasis: leftWidth }}
            >
                {left}
            </aside>
            <main className="w-full flex-1">
                {right}
            </main>
        </div>
    );
}
