
"use client";

import React from 'react';
import LegalLayout from '../LegalLayout';

export default function TermsPage() {
    return (
        <LegalLayout title="Terms of Service" lastUpdated="October 2023">
            <section className="space-y-[16px]">
                <h3 className="text-[20px] font-[700]">1. Acceptance of Terms</h3>
                <p>By accessing the Tirios MVP platform, users agree to the professional-grade standards and protocols defined herein. Our service is designed for sophisticated real estate interactions requiring a high level of data accuracy and integrity.</p>
            </section>

            <section className="space-y-[16px]">
                <h3 className="text-[20px] font-[700]">2. Platform Usage</h3>
                <p>Users are responsible for the credentialed accuracy of their profiles. For landlords, this includes the structural integrity of listing data. For tenants, this includes the veracity of screening credentials.</p>
                <p>Unauthorized use of platform yield models or automated screening logic is strictly prohibited and subject to institutional audit.</p>
            </section>

            <section className="space-y-[16px]">
                <h3 className="text-[20px] font-[700]">3. Settlement Protocols</h3>
                <p>All financial settlements initiated thru the platform are final upon block confirmation or ledger entry. We utilize SHA-256 verified forensics for all high-velocity transactions.</p>
            </section>

            <section className="space-y-[16px]">
                <h3 className="text-[20px] font-[700]">4. Data Privacy</h3>
                <p>Consult our Privacy Protocol for details on how we safeguard your identity and asset coordinates.</p>
            </section>
        </LegalLayout>
    );
}
