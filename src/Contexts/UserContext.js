import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const value = {};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;