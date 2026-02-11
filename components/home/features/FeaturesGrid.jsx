"use client";

import React from 'react';
import FeatureCard from './FeatureCard';
import SectionHeading from '@/components/shared/layout/SectionHeading';

// Inline SVG icons for now to avoid dependency on an icon library I haven't checked
const Icons = {
    Analytics: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
    Security: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>,
    Global: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
    Support: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
};

const FEATURES = [
    {
        title: "Asset Telemetry",
        description: "Real-time data streams from every property node, providing granular insights into occupancy, maintenance, and financial performance.",
        icon: Icons.Analytics
    },
    {
        title: "Institutional Security",
        description: "Enterprise-grade encryption and physical security protocols ensure your assets and data remain inviolable.",
        icon: Icons.Security
    },
    {
        title: "Global Reach",
        description: "Access investment opportunities across premier markets worldwide, with localized compliance and management.",
        icon: Icons.Global
    },
    {
        title: "Concierge Node",
        description: "24/7 dedicated support for landlords and tenants, powered by AI and human expertise efficiently routed.",
        icon: Icons.Support
    }
];

export default function FeaturesGrid() {
    return (
        <section className="py-[96px] bg-[#F9FAFB]">
            <div className="container mx-auto px-[24px]">
                <SectionHeading
                    label="Why Choose Us"
                    title="Engineered for High-Performance Asset Management"
                    subtitle="We combine cutting-edge technology with institutional rigor to deliver superior returns and operational efficiency."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px]">
                    {FEATURES.map((feature, idx) => (
                        <FeatureCard
                            key={idx}
                            {...feature}
                            index={idx}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

