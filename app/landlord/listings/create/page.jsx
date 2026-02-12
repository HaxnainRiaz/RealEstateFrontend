
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/ui/data/Card';
import TextField from '@/components/ui/input/TextField';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import { useRouter } from 'next/navigation';

export default function LandlordCreateListingPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        address: '',
        category: 'Residential',
        price: '',
        sqft: '',
        bedrooms: '',
        bathrooms: '',
        description: '',
        features: []
    });

    const steps = [
        { id: 1, label: 'Basic Information', desc: 'Asset identity and classification' },
        { id: 2, label: 'Specifications', desc: 'Structural parameters' },
        { id: 3, label: 'Features & Media', desc: 'Amenities and visual assets' },
        { id: 4, label: 'Pricing & Review', desc: 'Financial parameters and verification' }
    ];

    const handleSubmit = () => {
        setIsSubmitting(true);
        setTimeout(() => {
            router.push('/landlord/listings');
        }, 2000);
    };

    return (
        <div className="max-w-[1200px] mx-auto space-y-[32px] md:space-y-[40px]">
            <div>
                <span className="text-[11px] md:text-[12px] font-[700] text-[#1D4ED8] uppercase tracking-[0.1em] mb-[8px] block">Asset Deployment</span>
                <h1 className="text-[28px] md:text-[32px] font-[700] text-[#111827]">Initialize New Asset Node</h1>
                <p className="text-[14px] md:text-[16px] text-[#6B7280]">Deploy a new structural asset to the global marketplace index.</p>
            </div>

            {/* Progress Stepper */}
            <div className="bg-[#FFFFFF] rounded-[24px] border border-[#D1D5DB]/30 p-[20px] md:p-[40px] shadow-sm">
                <div className="flex justify-between items-center mb-[32px] md:mb-[48px] overflow-x-auto pb-[10px] md:pb-0 scrollbar-hide">
                    {steps.map((step, index) => (
                        <div key={step.id} className={`flex items-center ${index < steps.length - 1 ? 'flex-1' : ''} min-w-fit px-[10px] md:px-0`}>
                            <div className="flex flex-col items-center flex-1">
                                <div className={`w-[36px] md:w-[48px] h-[36px] md:h-[48px] rounded-full flex items-center justify-center text-[14px] md:text-[18px] font-[700] transition-all shrink-0 ${currentStep >= step.id ? 'bg-[#1D4ED8] text-white shadow-lg' : 'bg-[#F3F4F6] text-[#D1D5DB]'}`}>
                                    {currentStep > step.id ? (
                                        <svg className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    ) : step.id}
                                </div>
                                <div className="mt-[8px] md:mt-[12px] text-center">
                                    <p className={`text-[11px] md:text-[13px] font-[700] whitespace-nowrap ${currentStep >= step.id ? 'text-[#111827]' : 'text-[#D1D5DB]'}`}>{step.label}</p>
                                    <p className="text-[9px] md:text-[11px] text-[#6B7280] hidden md:block">{step.desc}</p>
                                </div>
                            </div>
                            {index < steps.length - 1 && (
                                <div className={`h-[2px] w-[20px] sm:w-[50px] md:flex-1 mx-[8px] md:mx-[16px] transition-all shrink-0 ${currentStep > step.id ? 'bg-[#1D4ED8]' : 'bg-[#F3F4F6]'}`} />
                            )}
                        </div>
                    ))}
                </div>

                {/* Step Content */}
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-[24px] md:space-y-[32px]"
                >
                    {currentStep === 1 && (
                        <div className="space-y-[20px] md:space-y-[24px]">
                            <h3 className="text-[18px] md:text-[20px] font-[700] text-[#111827]">Basic Asset Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[24px]">
                                <TextField
                                    label="Asset Title"
                                    placeholder="e.g., The Metropolitan Suite"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                />
                                <div className="space-y-[8px]">
                                    <label className="text-[13px] md:text-[14px] font-[600] text-[#111827]">Asset Category</label>
                                    <select className="w-full px-[16px] md:px-[20px] py-[12px] md:py-[16px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] focus:outline-none focus:border-[#1D4ED8] text-[14px]">
                                        <option>Residential</option>
                                        <option>Commercial</option>
                                        <option>Industrial</option>
                                        <option>Mixed-Use</option>
                                    </select>
                                </div>
                            </div>
                            <TextField
                                label="Physical Address"
                                placeholder="123 Market Street, Manhattan, NY 10001"
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            />
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="space-y-[20px] md:space-y-[24px]">
                            <h3 className="text-[18px] md:text-[20px] font-[700] text-[#111827]">Structural Specifications</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] md:gap-[24px]">
                                <TextField
                                    label="Surface Area (SQFT)"
                                    placeholder="2,400"
                                    value={formData.sqft}
                                    onChange={(e) => setFormData({ ...formData, sqft: e.target.value })}
                                />
                                <TextField
                                    label="Bedroom Nodes"
                                    placeholder="3"
                                    value={formData.bedrooms}
                                    onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                                />
                                <TextField
                                    label="Bathroom Nodes"
                                    placeholder="2"
                                    value={formData.bathrooms}
                                    onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                                />
                            </div>
                            <div className="space-y-[8px]">
                                <label className="text-[13px] md:text-[14px] font-[600] text-[#111827]">Asset Description</label>
                                <textarea
                                    className="w-full h-[120px] md:h-[160px] p-[16px] md:p-[20px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[12px] focus:outline-none focus:border-[#1D4ED8] resize-none text-[14px]"
                                    placeholder="Provide a detailed description of the asset's structural characteristics, location benefits, and unique features..."
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                />
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="space-y-[20px] md:space-y-[24px]">
                            <h3 className="text-[18px] md:text-[20px] font-[700] text-[#111827]">Features & Visual Assets</h3>
                            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-[10px] md:gap-[16px]">
                                {['Central HVAC', 'In-Unit Laundry', 'Hardwood Floors', 'Granite Countertops', 'Stainless Appliances', 'Private Balcony', 'Parking Included', 'Pet Friendly', 'Gym Access'].map(feature => (
                                    <label key={feature} className="flex items-center gap-[10px] md:gap-[12px] p-[12px] md:p-[16px] bg-[#F9FAFB] border border-[#D1D5DB]/20 rounded-[12px] cursor-pointer hover:bg-[#1D4ED8]/5 transition-all">
                                        <input type="checkbox" className="w-[16px] md:w-[18px] h-[16px] md:h-[18px] accent-[#1D4ED8]" />
                                        <span className="text-[13px] md:text-[14px] font-[600] text-[#111827] truncate">{feature}</span>
                                    </label>
                                ))}
                            </div>
                            <div className="mt-[24px] md:mt-[32px] p-[32px] md:p-[48px] bg-[#F9FAFB] border-2 border-dashed border-[#D1D5DB] rounded-[24px] text-center space-y-[12px] md:space-y-[16px]">
                                <div className="w-[48px] md:w-[64px] h-[48px] md:h-[64px] bg-[#1D4ED8]/10 rounded-full flex items-center justify-center mx-auto text-[#1D4ED8]">
                                    <svg className="w-[24px] h-[24px] md:w-[32px] md:h-[32px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-[15px] md:text-[16px] font-[700] text-[#111827]">Upload Visual Assets</h4>
                                    <p className="text-[13px] md:text-[14px] text-[#6B7280]">Drag and drop images or click to browse</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div className="space-y-[20px] md:space-y-[24px]">
                            <h3 className="text-[18px] md:text-[20px] font-[700] text-[#111827]">Financial Parameters & Review</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[24px]">
                                <TextField
                                    label="Monthly Yield Target"
                                    placeholder="$4,200"
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                />
                                <div className="space-y-[8px]">
                                    <label className="text-[13px] md:text-[14px] font-[600] text-[#111827]">Lease Duration</label>
                                    <select className="w-full px-[16px] md:px-[20px] py-[12px] md:py-[16px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] focus:outline-none focus:border-[#1D4ED8] text-[14px]">
                                        <option>12 Months</option>
                                        <option>24 Months</option>
                                        <option>36 Months</option>
                                        <option>Flexible</option>
                                    </select>
                                </div>
                            </div>
                            <Card className="bg-[#F9FAFB] border-[#D1D5DB]/30 p-[20px] md:p-[32px] overflow-hidden">
                                <h3 className="text-[17px] md:text-[18px] font-[700] text-[#111827] mb-[16px]">Asset Summary</h3>
                                <div className="divide-y divide-[#D1D5DB]/20 text-[13px] md:text-[14px]">
                                    <div className="flex justify-between py-[12px] gap-[12px]"><span className="text-[#6B7280] shrink-0">Title:</span><span className="font-[600] text-[#111827] text-right truncate">{formData.title || 'Not set'}</span></div>
                                    <div className="flex justify-between py-[12px] gap-[12px]"><span className="text-[#6B7280] shrink-0">Address:</span><span className="font-[600] text-[#111827] text-right truncate">{formData.address || 'Not set'}</span></div>
                                    <div className="flex justify-between py-[12px] gap-[12px]"><span className="text-[#6B7280] shrink-0">Surface Area:</span><span className="font-[600] text-[#111827] text-right">{formData.sqft || 'Not set'} SQFT</span></div>
                                    <div className="flex justify-between py-[12px] gap-[12px]"><span className="text-[#6B7280] shrink-0">Monthly Yield:</span><span className="font-[600] text-[#1D4ED8] text-right">{formData.price || 'Not set'}</span></div>
                                </div>
                            </Card>
                        </div>
                    )}
                </motion.div>

                {/* Navigation */}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-[32px] md:mt-[48px] pt-[24px] md:pt-[32px] border-t border-[#D1D5DB]/20 gap-[16px]">
                    <button
                        onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                        disabled={currentStep === 1}
                        className="w-full sm:w-auto px-[24px] py-[12px] bg-[#F9FAFB] border border-[#D1D5DB] text-[#111827] text-[13px] md:text-[14px] font-[700] rounded-[8px] hover:bg-[#FFFFFF] transition-all disabled:opacity-50 disabled:cursor-not-allowed order-2 sm:order-1"
                    >
                        Previous Step
                    </button>
                    {currentStep < 4 ? (
                        <button
                            onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                            className="w-full sm:w-auto px-[32px] py-[12px] bg-[#111827] text-white text-[13px] md:text-[14px] font-[700] rounded-[8px] hover:bg-[#1D4ED8] transition-all order-1 sm:order-2"
                        >
                            Continue →
                        </button>
                    ) : (
                        <PrimaryButton onClick={handleSubmit} loading={isSubmitting} className="w-full sm:w-auto px-[32px] md:px-[40px] h-[48px] md:h-[52px] order-1 sm:order-2">
                            Deploy Asset Node
                        </PrimaryButton>
                    )}
                </div>
            </div>
        </div>
    );
}
