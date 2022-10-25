import React from 'react';
import { ShoppingCartIcon, ClockIcon } from '@heroicons/react/24/outline';

const CourseItem = () => {
    return (
        <div className="card bg-base-100 shadow-xl cursor-pointer hover:shadow-none border border-transparent hover:border-slate-200 duration-300">
            <figure className="px-3 pt-3">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body py-3">
                <h2 className="card-title">Shoes!</h2>
                <p className='flex'>
                    <span className='flex-1 flex items-center'>
                        <ClockIcon className='w-4 h-4 m-0 mr-1' />
                        : 4 Hours
                    </span>
                    <span className='flex-1 flex items-center'>
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

                <div className="card-actions items-center mt-2">
                    <p className='text-lg font-semibold'>
                        <span className='mr-1'>&#2547; :</span>700
                    </p>
                    <button className="border py-2 px-5 flex items-center">
                        Add To Cart
                        <ShoppingCartIcon className='w-6 h-6 ml-2' />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CourseItem;
