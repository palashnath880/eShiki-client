import React from 'react';
import Achievement from '../../components/Achievement/Achievement';
import Banner from '../../components/Banner/Banner';
import Review from '../../components/Review/Review';
import OurCourses from '../../components/OurCourses/OurCourses';

const Home = () => {
    return (
        <>
            <Banner />
            <div className='container px-5 md:px-0 mx-auto'>
                <Achievement />
                <OurCourses />
                <Review />
            </div>
        </>
    );
}

export default Home;
