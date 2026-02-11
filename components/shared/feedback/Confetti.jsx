"use client";

import React, { useEffect } from 'react';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from 'react-use';

export default function Confetti({ active }) {
    const { width, height } = useWindowSize();

    if (!active) return null;

    return (
        <ReactConfetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={500}
            colors={['#1D4ED8', '#10B981', '#F59E0B']}
        />
    );
}
