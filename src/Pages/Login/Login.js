import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/AuthContext';

const Login = () => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { loginHandler, googleAuthHandler, githubAuthHandler, forgetPassword } = useContext(UserContext);

    const navigate = useNavigate();
    const location = useLocation();
    const pathName = location.state?.pathName || '/';

    const loginFormHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        setError(null);

        if (!email || email.length <= 0) {
            setError('Please enter email');
            return;
        }
        if (!password || password.length < 6) {
            setError('Please enter password more then 6 characters.');
            return;
        }

        setLoading(true);

        loginHandler(email, password)
            .then(result => {
                toast.success('Successfully login');
                setLoading(false);
                navigate(pathName, { replace: true });
            })
            .catch(error => {
                setLoading(false);
                const errorCode = error.code;
                if (errorCode === 'auth/user-not-found') {
                    setError('No user in this email');
                }
                if (errorCode === 'auth/wrong-password') {
                    setError('Wrong Password');
                }
                console.log(errorCode);
            });

    }

    const googleHandler = () => {
        googleAuthHandler()
            .then(() => {
                navigate(pathName, { replace: true });
            })
            .catch(error => console.log(error));
    }

    const githubHandler = () => {
        githubAuthHandler()
            .then(() => {
                navigate(pathName, { replace: true });
            })
            .catch(error => console.log(error));
    }

    const resetPasswordHandler = () => {
        // forgetPassword()
        //     .then()
        //     .catch();
    }

    return (
        <div className=''>
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
                            <form onSubmit={loginFormHandler}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <button onClick={resetPasswordHandler} className="label-text-alt link link-hover">Forgot password?</button>
                                    </label>
                                </div>
                                {error !== null && <small className='text-red-400 font-semibold mt-2 block pl-2'>{error}</small>}
                                <div className="form-control mt-3">
                                    <button disabled={loading ? true : false} className="btn btn-primary">
                                        {loading && <span className='block w-6 h-6 rounded-full border-4 border-slate-400 animate-spin mr-2 border-y-slate-50'></span>}
                                        Login
                                    </button>
                                </div>
                            </form>
                            <div className='text-center flex flex-col'>
                                <small className='text-base'>or</small>
                                <button onClick={googleHandler} className='mt-2 rounded-full border border-slate-500 py-1 duration-300 hover:bg-gray-500 hover:text-slate-50 flex justify-center items-center'>
                                    <FaGoogle className='mr-2' />
                                    Continue With Google
                                </button>
                                <button onClick={githubHandler} className='mt-2 rounded-full border border-slate-500 py-1 duration-300 hover:bg-gray-500 hover:text-slate-50 flex justify-center items-center'>
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
