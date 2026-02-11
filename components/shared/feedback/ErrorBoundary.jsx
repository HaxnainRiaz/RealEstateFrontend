"use client";

import React, { Component } from 'react';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import Card from '@/components/ui/data/Card';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // You would log this to an error reporting service
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex items-center justify-center min-h-[400px] p-[24px]">
                    <Card className="max-w-[500px] text-center p-[40px] border border-[#FECACA] bg-[#FEF2F2]">
                        <div className="w-[64px] h-[64px] bg-[#FEE2E2] rounded-full flex items-center justify-center mx-auto mb-[24px] text-[#EF4444]">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                        </div>
                        <h2 className="text-[24px] font-[700] text-[#991B1B] mb-[8px]">Something went wrong</h2>
                        <p className="text-[16px] text-[#B91C1C] mb-[32px]">
                            An unexpected error occurred. Our forensic team has been notified.
                        </p>
                        <PrimaryButton
                            className="bg-[#EF4444] hover:bg-[#DC2626]"
                            onClick={() => window.location.reload()}
                        >
                            Reload Application
                        </PrimaryButton>
                    </Card>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
