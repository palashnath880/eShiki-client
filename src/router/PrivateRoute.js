import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(UserContext);

    const location = useLocation();

    if (user === null) {
        // navigate('/login', { state: location });
        return (
            <>
                <Navigate to={'/login'} state={location} replace></Navigate>
            </>
        );
    }

    return (
        <>
            {children}
        </>
    );
}

export default PrivateRoute;
