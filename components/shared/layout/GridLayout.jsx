"use client";

import React from 'react';

export default function GridLayout({ children, columns = 1, gap = 32, className = "" }) {
    const columnStyles = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
        5: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5'
    };

    return (
        <div
            className={`grid ${columnStyles[columns] || 'grid-cols-1'} ${className}`}
            style={{ gap: `${gap}px` }}
        >
            {children}
        </div>
    );
}
