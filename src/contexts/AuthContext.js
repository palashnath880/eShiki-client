import React from 'react';
import { createContext } from 'react';

export const UserContext = createContext();

const AuthContext = ({ children }) => {

    const authInfo = {}

    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
}

export default AuthContext;
