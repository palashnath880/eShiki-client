import React from 'react';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    return (
        <div className='pb-10'>
            <div className='text-center border-b pb-5'>
                <h1 className='font-semibold text-3xl'>Whats student say</h1>
                <p>Our recent new course</p>
            </div>
            <div className='mb-5 mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <ReviewItem />
                <ReviewItem />
                <ReviewItem />
                <ReviewItem />
            </div>
        </div >
    );
}

export default Review;
