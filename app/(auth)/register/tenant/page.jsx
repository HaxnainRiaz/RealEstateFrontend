"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/lib/context/AuthContext';
import TextField from '@/components/ui/input/TextField';
import PrimaryButton from '@/components/ui/button/PrimaryButton';

export default function TenantRegisterPage() {
    const router = useRouter();
    const { register } = useAuth();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Full name is required";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
        if (!formData.phone) newErrors.phone = "Phone number is required";
        if (!formData.password) newErrors.password = "Password is required";
        else if (formData.password.length < 8) newErrors.password = "Password must be at least 8 characters";
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsLoading(true);
        try {
            await register(formData, 'tenant');
            router.push('/tenant/dashboard');
        } catch (err) {
            setErrors({ global: "Registration failed. Please try again." });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Form */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 flex items-center justify-center p-[24px] bg-[#FFFFFF]"
            >
                <div className="w-full max-w-[480px] space-y-[32px]">
                    {/* Logo & Back */}
                    <div className="space-y-[24px]">
                        <Link href="/" className="inline-flex items-center gap-[8px] text-[#1D4ED8] hover:text-[#2563EB] transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            <span className="text-[14px] font-[600]">Back to Home</span>
                        </Link>

                        <div>
                            <h1 className="text-[40px] font-[800] text-[#111827] tracking-[-0.02em]">
                                Create Account
                            </h1>
                            <p className="text-[16px] text-[#6B7280] mt-[8px]">
                                Join as a tenant and find your perfect home
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-[20px]">
                        {errors.global && (
                            <div className="p-[16px] bg-[#FEF2F2] border border-[#EF4444] rounded-[12px] text-[#EF4444] text-[14px] font-[500] flex items-start gap-[12px]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-[2px]">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="12" />
                                    <line x1="12" y1="16" x2="12.01" y2="16" />
                                </svg>
                                <span>{errors.global}</span>
                            </div>
                        )}

                        <TextField
                            label="Full Name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => {
                                setFormData({ ...formData, name: e.target.value });
                                setErrors({ ...errors, name: null });
                            }}
                            error={errors.name}
                            required
                        />

                        <TextField
                            label="Email Address"
                            type="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={(e) => {
                                setFormData({ ...formData, email: e.target.value });
                                setErrors({ ...errors, email: null });
                            }}
                            error={errors.email}
                            required
                        />

                        <TextField
                            label="Phone Number"
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={(e) => {
                                setFormData({ ...formData, phone: e.target.value });
                                setErrors({ ...errors, phone: null });
                            }}
                            error={errors.phone}
                            required
                        />

                        <TextField
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => {
                                setFormData({ ...formData, password: e.target.value });
                                setErrors({ ...errors, password: null });
                            }}
                            error={errors.password}
                            required
                        />

                        <TextField
                            label="Confirm Password"
                            type="password"
                            placeholder="••••••••"
                            value={formData.confirmPassword}
                            onChange={(e) => {
                                setFormData({ ...formData, confirmPassword: e.target.value });
                                setErrors({ ...errors, confirmPassword: null });
                            }}
                            error={errors.confirmPassword}
                            required
                        />

                        <PrimaryButton
                            type="submit"
                            className="w-full h-[56px] text-[16px] mt-[24px]"
                            loading={isLoading}
                        >
                            Create Tenant Account
                        </PrimaryButton>
                    </form>

                    {/* Divider */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-[#D1D5DB]" />
                        </div>
                        <div className="relative flex justify-center text-[13px]">
                            <span className="px-[16px] bg-[#FFFFFF] text-[#6B7280] font-[500]">Already have an account?</span>
                        </div>
                    </div>

                    {/* Login Link with Animation */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="text-center"
                    >
                        <Link href="/login/tenant" className="inline-flex items-center gap-[8px] text-[15px] font-[600] text-[#1D4ED8] hover:text-[#2563EB] transition-colors">
                            Sign in to your account
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </motion.div>

                    {/* Switch Portal */}
                    <div className="pt-[24px] border-t border-[#D1D5DB] text-center">
                        <p className="text-[14px] text-[#6B7280] mb-[12px]">Are you a property owner?</p>
                        <Link href="/register/landlord" className="text-[14px] font-[600] text-[#111827] hover:text-[#1D4ED8] transition-colors">
                            Register as Landlord →
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* Right Side - Visual */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#1D4ED8] via-[#2563EB] to-[#3B82F6] relative overflow-hidden"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center p-[64px] text-center text-[#FFFFFF]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="space-y-[32px]"
                    >
                        {/* Icon */}
                        <div className="w-[120px] h-[120px] bg-[#FFFFFF]/10 backdrop-blur-md rounded-[24px] mx-auto flex items-center justify-center border border-[#FFFFFF]/20">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>

                        <div>
                            <h2 className="text-[36px] font-[800] leading-[1.2] mb-[16px]">
                                Start Your<br />Rental Journey
                            </h2>
                            <p className="text-[18px] text-[#FFFFFF]/80 max-w-[400px] mx-auto leading-[1.6]">
                                Get instant access to premium properties and streamlined application processes.
                            </p>
                        </div>

                        {/* Benefits */}
                        <div className="space-y-[16px] text-left max-w-[360px] mx-auto">
                            {[
                                { icon: '🏠', text: 'Browse verified properties' },
                                { icon: '⚡', text: 'Quick application process' },
                                { icon: '🔒', text: 'Secure & encrypted data' },
                                { icon: '💬', text: 'Direct landlord communication' }
                            ].map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + (i * 0.1), duration: 0.4 }}
                                    className="flex items-center gap-[12px] text-[15px] font-[500]"
                                >
                                    <span className="w-[32px] h-[32px] bg-[#FFFFFF]/20 rounded-[8px] flex items-center justify-center text-[18px]">
                                        {benefit.icon}
                                    </span>
                                    <span>{benefit.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-[#FFFFFF]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[10%] left-[10%] w-[200px] h-[200px] bg-[#FFFFFF]/5 rounded-full blur-3xl" />
            </motion.div>
        </div>
    );
}
