"use client";

import React, { createContext, useContext, useState } from 'react';

const NotificationContext = createContext({
    notifications: [],
    addNotification: () => { },
    removeNotification: () => { }
});

export const useNotifications = () => useContext(NotificationContext);

export default function NotificationProvider({ children }) {
    const [notifications, setNotifications] = useState([]);

    const addNotification = (message, type = 'success', duration = 5000) => {
        const id = Math.random().toString(36).substr(2, 9);
        const notification = { id, message, type };

        setNotifications(prev => [...prev, notification]);

        if (duration) {
            setTimeout(() => removeNotification(id), duration);
        }
    };

    const removeNotification = (id) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    };

    return (
        <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
            {children}
        </NotificationContext.Provider>
    );
}
