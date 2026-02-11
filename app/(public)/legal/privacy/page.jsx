
"use client";

import React from 'react';
import LegalLayout from '../LegalLayout';

export default function PrivacyPage() {
    return (
        <LegalLayout title="Privacy Protocol" lastUpdated="October 2023">
            <section className="space-y-[16px]">
                <h3 className="text-[20px] font-[700]">1. Information Sovereignty</h3>
                <p>At Tirios MVP, we prioritize your data sovereignty. We collect minimal identification forensics necessary for high-velocity real estate interactions.</p>
            </section>

            <section className="space-y-[16px]">
                <h3 className="text-[20px] font-[700]">2. Data Encryption</h3>
                <p>All sensitive coordinates and financial settled packets are encrypted using enterprise-grade protocols before being committed to our secure ledger.</p>
            </section>

            <section className="space-y-[16px]">
                <h3 className="text-[20px] font-[700]">3. Identity Shield</h3>
                <p>We do not sell user data to third-party node operators. Your identity is shielded within our internal ecosystem.</p>
            </section>
        </LegalLayout>
    );
}
