'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context
const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        isLoggedIn: true,
        hasYearlySubscription: false,
    });

    useEffect(() => {
        // Fetch the user subscription status from your backend if necessary
    }, []);

    const updateSubscriptionStatus = (status) => {
        setUser((prevUser) => ({
            ...prevUser,
            hasYearlySubscription: status,
        }));
    };

    return (
        <UserContext.Provider value={{ user, updateSubscriptionStatus }}>
            {children}
        </UserContext.Provider>
    );
};
