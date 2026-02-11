"use client";

import React, { useState } from 'react';
import Card from '@/components/ui/data/Card';
import PrimaryButton from '@/components/ui/button/PrimaryButton';
import PhotoUploader from './PhotoUploader';

export default function ListingForm() {
    const [formData, setFormData] = useState({
        title: '',
        address: '',
        price: '',
        beds: '',
        baths: '',
        sqft: '',
        description: '',
        type: 'residential'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Add submit logic here
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-[32px]">
            <Card className="p-[32px] bg-[#FFFFFF] rounded-[16px] border border-[#E5E7EB]">
                <h3 className="text-[20px] font-[700] text-[#111827] mb-[24px]">Asset Details</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                    <div className="col-span-2">
                        <label className="block text-[14px] font-[600] text-[#374151] mb-[8px]">Property Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="e.g. Modern Loft in Downtown"
                            className="w-full px-[16px] py-[12px] border border-[#D1D5DB] rounded-[8px] focus:ring-1 focus:ring-[#1D4ED8]"
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="block text-[14px] font-[600] text-[#374151] mb-[8px]">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="123 Main St, City, State"
                            className="w-full px-[16px] py-[12px] border border-[#D1D5DB] rounded-[8px] focus:ring-1 focus:ring-[#1D4ED8]"
                        />
                    </div>

                    <div>
                        <label className="block text-[14px] font-[600] text-[#374151] mb-[8px]">Monthly Rent ($)</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="2500"
                            className="w-full px-[16px] py-[12px] border border-[#D1D5DB] rounded-[8px] focus:ring-1 focus:ring-[#1D4ED8]"
                        />
                    </div>

                    <div>
                        <label className="block text-[14px] font-[600] text-[#374151] mb-[8px]">Square Footage</label>
                        <input
                            type="number"
                            name="sqft"
                            value={formData.sqft}
                            onChange={handleChange}
                            placeholder="1200"
                            className="w-full px-[16px] py-[12px] border border-[#D1D5DB] rounded-[8px] focus:ring-1 focus:ring-[#1D4ED8]"
                        />
                    </div>

                    <div>
                        <label className="block text-[14px] font-[600] text-[#374151] mb-[8px]">Bedrooms</label>
                        <select
                            name="beds"
                            value={formData.beds}
                            onChange={handleChange}
                            className="w-full px-[16px] py-[12px] border border-[#D1D5DB] rounded-[8px] focus:ring-1 focus:ring-[#1D4ED8]"
                        >
                            <option value="">Select</option>
                            {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>

                    <div>
                        <label className="block text-[14px] font-[600] text-[#374151] mb-[8px]">Bathrooms</label>
                        <select
                            name="baths"
                            value={formData.baths}
                            onChange={handleChange}
                            className="w-full px-[16px] py-[12px] border border-[#D1D5DB] rounded-[8px] focus:ring-1 focus:ring-[#1D4ED8]"
                        >
                            <option value="">Select</option>
                            {[1, 1.5, 2, 2.5, 3, 3.5, 4].map(n => <option key={n} value={n}>{n}</option>)}
                        </select>
                    </div>

                    <div className="col-span-2">
                        <label className="block text-[14px] font-[600] text-[#374151] mb-[8px]">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-[16px] py-[12px] border border-[#D1D5DB] rounded-[8px] focus:ring-1 focus:ring-[#1D4ED8]"
                            placeholder="Highlight key features and amenities..."
                        />
                    </div>
                </div>
            </Card>

            <PhotoUploader />

            <div className="flex justify-end gap-[16px]">
                <button type="button" className="px-[24px] py-[12px] text-[#374151] font-[600] hover:bg-[#F3F4F6] rounded-[8px] transition-colors">
                    Save Draft
                </button>
                <PrimaryButton type="submit">
                    Publish Listing
                </PrimaryButton>
            </div>
        </form>
    );
}
