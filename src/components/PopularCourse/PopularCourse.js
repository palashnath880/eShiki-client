import React from 'react';
import { Link } from 'react-router-dom';
import { ClockIcon } from '@heroicons/react/24/solid';

const PopularCourse = () => {
    return (
        <div className="card border bg-base-100">
            <Link>
                <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
                <div className="card-body gap-0 px-3 py-5">
                    <h2 className="card-title">Javascript For Beginners</h2>
                    <p className='flex justify-between mt-2'>
                        <span className='flex items-center'>
                            <ClockIcon className='w-4 h-4 m-0 mr-1' />
                            : 4 Hours
                        </span>
                        <span className='flex items-center'>
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            : 4.5<small className='ml-1'>( 300 )</small>
                        </span>
                    </p>
                </div>
            </Link>
        </div>
    );
}

export default PopularCourse;
