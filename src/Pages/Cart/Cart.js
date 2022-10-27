import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import { CartContext } from '../../contexts/CartsContext';

const Cart = () => {
    const [guideLine, setGuideLine] = useState(false);
    const { cart, deleteCart } = useContext(CartContext);

    const additionalGuideline = () => {
        setGuideLine(!guideLine);
    }

    const cartSubTotal = cart !== null ? cart.reduce((prev, next) => prev + parseInt(next.price), 0) : 0;

    return (
        <div className='container mx-auto py-10'>
            <h2 className='text-center my-5 pb-5 text-3xl border-b'>Cart</h2>
            <div className='flex flex-col md-flex-row px-5 md:px-0 gap-2'>
                <div className='flex-1 md:min-h-[400px]'>
                    <div>
                        {
                            cart !== null && cart.length > 0 ? cart.map((item, index) => <CartItem id={item.id} key={index} deleteCart={deleteCart} />) : <>
                                <h2 className='text-center bg-red-100 py-3 rounded-md text-lg text-red-500'>Empty Cart</h2>
                            </>
                        }

                    </div>
                </div>
                <div className='w-full md:w-3/12'>
                    <div className='border shadow-lg rounded-md pb-10 md:pb-0 md:h-full'>
                        <h2 className='text-xl text-center py-5 border-b'>Totals</h2>
                        <div className='px-2 py-3'>
                            <p className='flex border-b pb-4 pt-2'>
                                <span className='flex-1'>Subtotal:</span>
                                <span className='flex-1 font-semibold'>&#2547; {cartSubTotal}</span>
                            </p>
                            <p className='flex border-b pb-4 pt-2'>
                                <span className='flex-1 flex items-center'>
                                    <span className='inline mr-3'>Additional <br /> Guideline</span>
                                    <input className='h-fit cursor-pointer' onChange={additionalGuideline} type='checkbox' />
                                </span>
                                <span className='flex-1 font-semibold'>
                                    &#2547; {guideLine ? 100 : 0}
                                </span>
                            </p>
                            <p className='flex border-b pb-4 pt-2'>
                                <span className='flex-1 font-semibold'>
                                    Total
                                </span>
                                <span className='flex-1 font-semibold'>&#2547; {guideLine ? cartSubTotal + 100 : cartSubTotal + 0}</span>
                            </p>
                        </div>
                        <div className='text-center mt-5'>
                            <Link className='mx-auto bg-violet-500 text-slate-50 py-2 px-5' to={'/checkout'}>Check Out</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
