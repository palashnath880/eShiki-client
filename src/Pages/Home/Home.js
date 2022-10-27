import React from 'react';
import Achievement from '../../components/Achievement/Achievement';
import Banner from '../../components/Banner/Banner';
import Instructor from '../../components/Instructor/Instructor';
import OurCourses from '../../components/OurCourses/OurCourses';

const Home = () => {
    return (
        <>
            <Banner />
            <div className='container px-5 md:px-0 mx-auto'>
                <Achievement />
                <OurCourses />
                <Instructor />
            </div>
        </>
    );
}

export default Home;
