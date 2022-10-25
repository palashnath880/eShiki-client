import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/AuthContext';

const AuthenticationRoute = ({ children }) => {
    const { user } = useContext(UserContext);

    if (user !== null) {
        return (
            <>
                <Navigate to='/' />
            </>
        );
    }

    return (
        <>
            {children}
        </>
    );
}

export default AuthenticationRoute;
