import { ROUTES } from './routes';

export const LANDLORD_NAV = [
    { label: 'Overview', href: ROUTES.LANDLORD.DASHBOARD, icon: 'Layout' },
    { label: 'Portfolio', href: ROUTES.LANDLORD.PROPERTIES, icon: 'Home' },
    { label: 'Tenants', href: ROUTES.LANDLORD.TENANTS, icon: 'Users' },
    { label: 'Financials', href: ROUTES.LANDLORD.FINANCIALS, icon: 'BarChart' },
    { label: 'Maintenance', href: ROUTES.LANDLORD.MAINTENANCE, icon: 'Tool' },
    { label: 'Managed Assets', href: ROUTES.LANDLORD.LISTINGS, icon: 'List' },
];

export const TENANT_NAV = [
    { label: 'Dashboard', href: ROUTES.TENANT.DASHBOARD, icon: 'Layout' },
    { label: 'Marketplace', href: ROUTES.TENANT.LISTINGS, icon: 'Search' },
    { label: 'Applications', href: ROUTES.TENANT.APPLICATIONS, icon: 'FileText' },
    { label: 'Ledger', href: ROUTES.TENANT.PAYMENTS, icon: 'CreditCard' },
    { label: 'Repair Signals', href: ROUTES.TENANT.MAINTENANCE, icon: 'Tool' },
    { label: 'Documents', href: ROUTES.TENANT.DOCUMENTS, icon: 'Folder' },
];

export const PUBLIC_NAV = [
    { label: 'How it Works', href: ROUTES.PUBLIC.HOW_IT_WORKS },
    { label: 'Pricing', href: ROUTES.PUBLIC.PRICING },
    { label: 'Research', href: ROUTES.PUBLIC.BLOG },
    { label: 'Resources', href: ROUTES.PUBLIC.RESOURCES }, // Assuming resources exists
    { label: 'About', href: ROUTES.PUBLIC.ABOUT },
];

export const FOOTER_LINKS = {
    PLATFORM: [
        { label: 'How it Works', href: ROUTES.PUBLIC.HOW_IT_WORKS },
        { label: 'Pricing', href: ROUTES.PUBLIC.PRICING },
        { label: 'Compare Nodes', href: '/compare' },
    ],
    COMPANY: [
        { label: 'About', href: ROUTES.PUBLIC.ABOUT },
        { label: 'Blog', href: ROUTES.PUBLIC.BLOG },
        { label: 'Careers', href: ROUTES.PUBLIC.CAREERS },
        { label: 'Contact', href: ROUTES.PUBLIC.CONTACT },
    ],
    LEGAL: [
        { label: 'Terms of Service', href: '/legal/terms' },
        { label: 'Privacy Protocol', href: '/legal/privacy' },
        { label: 'Cookie Policy', href: '/legal/cookies' },
    ]
};
