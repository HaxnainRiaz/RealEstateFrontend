"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function TenantListingsRedirect() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to public listings page
        router.replace('/listings');
    }, [router]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center space-y-[16px]">
                <div className="w-[48px] h-[48px] border-4 border-[#1D4ED8] border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-[16px] text-[#6B7280] font-[600]">Redirecting to property listings...</p>
            </div>
        </div>
    );
}
