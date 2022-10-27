import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/AuthContext';

const CheckOut = () => {

    const { user } = useContext(UserContext);
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        name === 'address' && setAddress(value);
        name === 'payment_method' && setPaymentMethod(value);
    }

    const paymentHandler = () => {

        address === '' && toast.error('Please enter address.');
        paymentMethod === '' && toast.error('Please select payment method.');

        if (address === '' || paymentMethod === '') {
            return;
        }
        localStorage.removeItem('eshiki_cart');
        toast.success('Payment successfully');
        navigate('/');
    }

    return (
        <div className='container px-5 md:px-0 mx-auto pt-10'>
            <div className='w-full md:w-7/12 mx-auto my-10 border p-3 rounded-md shadow-lg'>
                <div className='border-b'>
                    <p className='py-3 flex'>
                        <span className='w-3/12 md:flex-1'>Name:</span>
                        <span className='flex-1'>{user?.displayName}</span>
                    </p>
                </div>
                <div className='border-b'>
                    <p className='py-3 flex'>
                        <span className='w-3/12 md:flex-1'>Email:</span>
                        <span className='flex-1'>{user?.email}</span>
                    </p>
                </div>
                <div className='border-b'>
                    <p className='py-3 flex'>
                        <span className='w-3/12 md:flex-1'>Address:</span>
                        <span className='flex-1'>
                            <input onChange={inputHandler} className='focus:outline-0 w-full' type='text' placeholder='Enter Address Here' name='address' />
                        </span>
                    </p>
                </div>
                <div className='border-b'>
                    <p className='py-3 flex'>
                        <span className='w-3/12 md:flex-1'>Payment Method:</span>
                        <span className='flex-1 flex items-center'>
                            <input onChange={inputHandler} id='bkash' className='cursor-pointer mr-1' type='radio' name='payment_method' value='bKash' />
                            <label htmlFor='bkash' className='mr-2 cursor-pointer'>bKash</label>
                            <input onChange={inputHandler} id='nagad' className='cursor-pointer mr-1' type='radio' name='payment_method' value='Nagad' />
                            <label htmlFor='nagad' className='mr-2 cursor-pointer' >Nagad</label>
                            <input onChange={inputHandler} id='dbbl' className='cursor-pointer mr-1' type='radio' name='payment_method' value='DBBL' />
                            <label htmlFor='dbbl' className='mr-2 cursor-pointer'>DBBL</label>
                        </span>
                    </p>
                </div>
                <div className='py-3 text-end'>
                    <button onClick={paymentHandler} className='bg-green-500 py-2 px-5 text-slate-50 border border-green-500 rounded hover:bg-transparent hover:text-gray-700 duration-300'>Payment</button>
                </div>
            </div>
        </div>
    );
}

export default CheckOut;
