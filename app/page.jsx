"use client";

import React from 'react';
import Navbar from '@/components/ui/navigation/Navbar';
import { HeroSection, FeaturesGrid, CTASection, TestimonialSlider, NewsletterForm } from '@/components/home';

export default function HomePage() {
    return (
        <>
            <header className="sticky top-0 z-50 bg-[#FFFFFF]/80 backdrop-blur-md border-t-[4px] border-[#1D4ED8]">
                <Navbar />
            </header>
            <main className="bg-[#FFFFFF] min-h-screen">
                <HeroSection />
                <FeaturesGrid />
                <TestimonialSlider />
                <CTASection />
                <NewsletterForm />
            </main>
        </>
    );
}
