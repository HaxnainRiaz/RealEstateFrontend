
"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { validateMockLogin, MOCK_USERS } from '@/lib/mockData';

const AuthContext = createContext({
    user: null,
    login: () => { },
    logout: () => { },
    register: () => { },
    isLoading: true
});

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Persistent UI state via LocalStorage
        const storedUser = localStorage.getItem('tirios_auth_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    const login = (email, password, role) => {
        // Mock authentication with predefined users
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const authenticatedUser = validateMockLogin(email, password);

                if (authenticatedUser) {
                    // Check if role matches (if role is specified)
                    if (role && authenticatedUser.role !== role) {
                        reject(new Error(`Invalid credentials for ${role} portal`));
                        return;
                    }

                    setUser(authenticatedUser);
                    localStorage.setItem('tirios_auth_user', JSON.stringify(authenticatedUser));
                    resolve(authenticatedUser);
                } else {
                    reject(new Error("Invalid email or password"));
                }
            }, 800);
        });
    };

    const register = (data, role) => {
        // Mock registration logic - creates a new user
        return new Promise((resolve) => {
            setTimeout(() => {
                const newUser = {
                    ...data,
                    role,
                    id: `${role}-${Math.random().toString(36).substr(2, 9)}`,
                    verificationStatus: 'pending',
                    avatar: role === 'tenant'
                        ? 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde'
                        : 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
                    savedProperties: [],
                    applications: [],
                    properties: [],
                    complianceScore: 0
                };
                setUser(newUser);
                localStorage.setItem('tirios_auth_user', JSON.stringify(newUser));
                resolve(newUser);
            }, 1000);
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('tirios_auth_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}
