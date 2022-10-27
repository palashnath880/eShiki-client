import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <main className='mt-[64px]'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Main;
