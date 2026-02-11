/**
 * Extended Institutional Mock Data
 * Comprehensive data nodes for application-wide forensic simulations.
 */

export const MOCK_ASSETS = [
    {
        id: '1',
        title: 'The Skyview Loft',
        address: '122 Greenwich St, NY',
        price: 4200,
        beds: 2,
        baths: 2,
        sqft: 1250,
        yield: '5.2%',
        status: 'available',
        category: 'Institutional',
        description: 'A premium industrial-style loft featuring Floor-to-ceiling windows and high-velocity HVAC systems.',
        features: ['Smart Access', 'Concealment Storage', 'Purified Air Node', 'Fiber Uplink'],
        images: [
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
            'https://images.unsplash.com/photo-1560448204-444092e78f43?w=800&q=80'
        ],
        thumbnail: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80'
    },
    {
        id: '2',
        title: 'Industrial Quarter',
        address: '45 Tech Plaza, Austin',
        price: 3850,
        beds: 1,
        baths: 1.5,
        sqft: 950,
        yield: '6.8%',
        status: 'available',
        category: 'Modern',
        description: 'Designed for high-productivity living with integrated workspace aesthetics.',
        features: ['Acoustic Isolation', 'Automated Lighting', 'EV Charging Node'],
        images: [
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
            'https://images.unsplash.com/photo-1560448204-61dc36dc98c8?w=800&q=80',
            'https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=800&q=80'
        ],
        thumbnail: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80'
    },
    {
        id: '3',
        title: 'Central Park Suite',
        address: '15 CPW, Manhattan',
        price: 8900,
        beds: 3,
        baths: 3,
        sqft: 2200,
        yield: '4.1%',
        status: 'available',
        category: 'Enterprise',
        description: 'Unparalleled luxury within the institutional hub of Manhattan.',
        features: ['24/7 Concierge Node', 'Secure Vault', 'Panic Protocol'],
        images: [
            'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&q=80',
            'https://images.unsplash.com/photo-1560449752-8b6023a46a4c?w=800&q=80',
            'https://images.unsplash.com/photo-1560449752-8b6023a46a4d?w=800&q=80'
        ],
        thumbnail: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=400&q=80'
    }
];

export const MOCK_REQUESTS = [
    { id: 'req-101', assetId: '1', status: 'In Review', type: 'Application', date: '2023-10-24' },
    { id: 'req-102', assetId: '2', status: 'Identity Verified', type: 'Viewing', date: '2023-10-22' }
];

export const MOCK_PAYMENTS = [
    { id: 'pmt-501', title: 'Security Settlement', amount: 4200, date: '2023-10-15', status: 'Settled' },
    { id: 'pmt-502', title: 'Monthly Assessment', amount: 3850, date: '2023-09-15', status: 'Settled' }
];

export const MOCK_USER = {
    id: 'user-001',
    name: 'Alexander Sterling',
    email: 'a.sterling@institutional.node',
    role: 'landlord',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    complianceScore: 98,
};

export const MOCK_NOTIFICATIONS = [
    { id: 'notif-1', title: 'Maintenance Signal', message: 'HVAC Incident Logged for Skyview Loft', type: 'info', time: '10m ago' },
    { id: 'notif-2', title: 'Ledger Update', message: 'Rent Deployment successful for Unit 4B', type: 'success', time: '2h ago' },
    { id: 'notif-3', title: 'Contract Alert', message: 'Lease expiring in 30 days for Central Park Suite', type: 'warning', time: '1d ago' },
];

export const MOCK_ANALYTICS = {
    portfolioValue: 12500000,
    monthlyRevenue: 85000,
    occupancyRate: 94.2,
    yieldPerformance: 6.8,
    revenueChartData: [
        { month: 'Jan', value: 78000 },
        { month: 'Feb', value: 81000 },
        { month: 'Mar', value: 80000 },
        { month: 'Apr', value: 85000 },
        { month: 'May', value: 84000 },
        { month: 'Jun', value: 86000 },
    ]
};

export const MOCK_AMENITIES = [
    { id: 'am-1', name: 'Smart Access', category: 'Security' },
    { id: 'am-2', name: 'EV Charging Node', category: 'Energy' },
    { id: 'am-3', name: 'Fiber Uplink', category: 'Connectivity' },
    { id: 'am-4', name: 'Climate Isolation', category: 'Environment' },
];

/**
 * Mock Users for Testing
 * Use these credentials to test different user roles
 */
export const MOCK_USERS = {
    // Tenant Accounts
    tenants: [
        {
            id: 'tenant-001',
            email: 'tenant@demo.com',
            password: 'password123',
            name: 'Sarah Johnson',
            role: 'tenant',
            phone: '+1 (555) 123-4567',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
            verificationStatus: 'verified',
            creditScore: 750,
            savedProperties: ['1', '3'],
            applications: [
                {
                    id: 'app-001',
                    propertyId: '1',
                    status: 'pending',
                    submittedDate: '2023-10-20',
                    moveInDate: '2023-11-01'
                }
            ],
            currentLease: null
        },
        {
            id: 'tenant-002',
            email: 'john.tenant@demo.com',
            password: 'password123',
            name: 'John Martinez',
            role: 'tenant',
            phone: '+1 (555) 234-5678',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
            verificationStatus: 'verified',
            creditScore: 720,
            savedProperties: ['2'],
            applications: [],
            currentLease: {
                propertyId: '2',
                startDate: '2023-06-01',
                endDate: '2024-06-01',
                monthlyRent: 3850,
                status: 'active'
            }
        }
    ],

    // Landlord Accounts
    landlords: [
        {
            id: 'landlord-001',
            email: 'landlord@demo.com',
            password: 'password123',
            name: 'Alexander Sterling',
            role: 'landlord',
            phone: '+1 (555) 345-6789',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
            organizationName: 'Sterling Property Group',
            taxId: 'XX-XXXXXXX',
            verificationStatus: 'verified',
            properties: ['1', '2', '3'],
            totalProperties: 3,
            occupancyRate: 94.2,
            monthlyRevenue: 16900,
            yearlyRevenue: 202800,
            complianceScore: 98
        },
        {
            id: 'landlord-002',
            email: 'property.manager@demo.com',
            password: 'password123',
            name: 'Emily Chen',
            role: 'landlord',
            phone: '+1 (555) 456-7890',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
            organizationName: 'Urban Living Properties LLC',
            taxId: 'XX-YYYYYYY',
            verificationStatus: 'verified',
            properties: [],
            totalProperties: 0,
            occupancyRate: 0,
            monthlyRevenue: 0,
            yearlyRevenue: 0,
            complianceScore: 95
        }
    ]
};

/**
 * Helper function to get all users (for login validation)
 */
export const getAllMockUsers = () => {
    return [...MOCK_USERS.tenants, ...MOCK_USERS.landlords];
};

/**
 * Helper function to find user by email
 */
export const findUserByEmail = (email) => {
    const allUsers = getAllMockUsers();
    return allUsers.find(user => user.email.toLowerCase() === email.toLowerCase());
};

/**
 * Helper function to validate login credentials
 */
export const validateMockLogin = (email, password) => {
    const user = findUserByEmail(email);
    if (!user) return null;
    if (user.password !== password) return null;

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
};
