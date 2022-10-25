import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            with <span className='font-semibold'>eShiki.com</span>, you will have an account if you want to enroll in our courses. If you have not created an account, please <Link className='underline text-primary' to='/signup'>create an account</Link>. And if you have created an account please login.
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='text-center flex flex-col'>
                                <small className='text-base'>or</small>
                                <button className='mt-2 rounded-full border border-slate-500 py-1 duration-300 hover:bg-gray-500 hover:text-slate-50 flex justify-center items-center'>
                                    <FaGoogle className='mr-2' />
                                    Continue With Google
                                </button>
                                <button className='mt-2 rounded-full border border-slate-500 py-1 duration-300 hover:bg-gray-500 hover:text-slate-50 flex justify-center items-center'>
                                    <FaGithub className='mr-2' />
                                    Continue With Github
                                </button>
                                <p className='mt-2 text-sm'>Don't have an account. Please <Link className='underline text-primary' to='/signup'>Sign Up</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
