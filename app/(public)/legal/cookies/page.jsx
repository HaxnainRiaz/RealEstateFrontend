
"use client";

import React from 'react';
import LegalLayout from '../LegalLayout';

export default function CookiesPage() {
    return (
        <LegalLayout title="Cookie & Tracking Policy" lastUpdated="October 2023">
            <section className="space-y-[16px]">
                <h3 className="text-[20px] font-[700]">1. Purposeful Cookies</h3>
                <p>We utilize strictly necessary cookies for authentication and structural session persistence. These are required for the institutional operation of the platform.</p>
            </section>

            <section className="space-y-[16px]">
                <h3 className="text-[20px] font-[700]">2. Analytics Nodes</h3>
                <p>To optimize our yield models and user experience, we track anonymous interaction telemetry. This allows us to ensure a 60FPS fluid experience across all global nodes.</p>
            </section>
        </LegalLayout>
    );
}
