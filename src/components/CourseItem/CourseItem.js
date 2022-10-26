import React, { useContext } from 'react';
import { ShoppingCartIcon, ClockIcon, CheckIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { CartContext } from '../../contexts/CartsContext';
import { Link } from 'react-router-dom';

const CourseItem = ({ course }) => {
    const { cart, addToCart } = useContext(CartContext);
    const { id, name, thumbnail, duration, price, totalEnroll } = course;
    const isCourseHaveCart = cart !== null && cart.find(cartItem => parseInt(cartItem.id) === parseInt(id));

    return (
        <div className="card bg-base-100 shadow-xl cursor-pointer hover:shadow-none border border-transparent hover:border-slate-200 duration-300">
            <figure className="px-3 pt-3">
                <img src={thumbnail} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body py-3">
                <Link to={`/courses/${id}`}><h2 className="card-title">{name}</h2></Link>
                <div className='flex'>
                    <span className='flex-1 flex items-center'>
                        <ClockIcon className='w-4 h-4 m-0 mr-1' />
                        : {duration}
                    </span>
                    <span className='flex-1 flex justify-end items-center'>
                        <AcademicCapIcon className='w-5 h-5 m-0 mr-1' />: {totalEnroll} Students
                    </span>
                </div>
                <div className="card-actions items-center mt-2">
                    <p className='text-lg font-semibold'>
                        <span className='mr-1'>&#2547; :</span>{price}
                    </p>
                    <button disabled={isCourseHaveCart ? true : false} onClick={() => addToCart(id, 1, price)} className="border py-2 px-5 flex items-center">
                        {isCourseHaveCart ? 'Added' : 'Add To Cart'}
                        {isCourseHaveCart ? <CheckIcon className='w-6 h-6 ml-2' /> : <ShoppingCartIcon className='w-6 h-6 ml-2' />}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CourseItem;
