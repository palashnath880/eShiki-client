import React from 'react';
import Banner from '../../components/Banner/Banner';
import Sidebar from '../../components/Sidebar/Sidebar';

const Home = () => {
    return (
        <>
            <Banner />
            <div className=''>
                <div className='flex'>
                    <div className='w-2/12'>
                        <Sidebar />
                    </div>
                    <div className='w-10/12'>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
