export interface Asset {
    id: string;
    title: string;
    address: string;
    price: number;
    beds: number;
    baths: number;
    sqft: number;
    yield: string;
    status: 'available' | 'rented' | 'maintenance';
    category: string;
    description: string;
    features: string[];
    images: string[];
}

export interface Application {
    id: string;
    assetId: string;
    status: 'In Review' | 'Identity Verified' | 'Approved' | 'Rejected';
    type: 'Application' | 'Viewing';
    date: string;
}

export interface Payment {
    id: string;
    title: string;
    amount: number;
    date: string;
    status: 'Settled' | 'Pending' | 'Failed';
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'landlord' | 'tenant';
    avatar?: string;
    complianceScore: number;
}
