import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layout/Main';
import Home from '../Pages/Home/Home';

const Routes = ({ children }) => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />
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
