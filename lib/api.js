
import { MOCK_ASSETS, MOCK_REQUESTS, MOCK_PAYMENTS } from './mockData';

// Simulated API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
    assets: {
        getAll: async () => {
            await delay(800);
            return MOCK_ASSETS;
        },
        getById: async (id) => {
            await delay(500);
            return MOCK_ASSETS.find(a => a.id === id);
        },
        getRecommendations: async () => {
            await delay(1000);
            return MOCK_ASSETS.slice(0, 2);
        }
    },
    applications: {
        getAll: async () => {
            await delay(800);
            return MOCK_REQUESTS;
        },
        getById: async (id) => {
            await delay(500);
            return MOCK_REQUESTS.find(r => r.id === id);
        },
        submit: async (data) => {
            await delay(1500);
            return { success: true, id: `req-${Math.floor(Math.random() * 1000)}` };
        }
    },
    payments: {
        getHistory: async () => {
            await delay(800);
            return MOCK_PAYMENTS;
        },
        getUpcoming: async () => {
            await delay(600);
            return { amount: 4200, dueDate: '2023-11-01', status: 'Pending' };
        }
    },
    documents: {
        getAll: async () => {
            await delay(700);
            return [
                { id: 'doc-1', title: 'Residential Agreement v2.1', date: '2023-10-12', size: '2.4 MB', status: 'Executed' },
                { id: 'doc-2', title: 'Property Rule Forensics', date: '2023-10-12', size: '1.1 MB', status: 'Archived' }
            ];
        }
    },
    profile: {
        get: async () => {
            await delay(500);
            return {
                fullName: 'Johnathan Doe',
                email: 'resident@example.com',
                phone: '+1 (555) 000-0000',
                score: 98
            };
        },
        update: async (data) => {
            await delay(1000);
            return { success: true };
        }
    }
};
