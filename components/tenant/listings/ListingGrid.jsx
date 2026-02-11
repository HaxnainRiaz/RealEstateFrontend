"use client";

import React from 'react';
import ListingCard from './ListingCard';
import { MOCK_ASSETS } from '@/lib/mockData';

export default function ListingGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
            {MOCK_ASSETS.map((asset, i) => (
                <ListingCard key={asset.id} listing={asset} index={i} />
            ))}
        </div>
    );
}
