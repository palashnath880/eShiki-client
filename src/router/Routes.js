import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import AuthenticationRoute from './AuthenticationRoute';
import PrivateRoute from './PrivateRoute';

const Routes = ({ children }) => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <PrivateRoute><Home /></PrivateRoute>
                },
                {
                    path: '/login',
                    element: <AuthenticationRoute><Login /></AuthenticationRoute>
                },
                {
                    path: '/signup',
                    element: <AuthenticationRoute><SignUp /></AuthenticationRoute>
                }
            ]
        }
    ]);
    return (
        <RouterProvider router={router}>
            {children}
        </RouterProvider>
    );
}

export default Routes;
