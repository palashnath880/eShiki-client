import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/AuthContext';

const SignUp = () => {

    const { signUpHandler, githubAuthHandler, googleAuthHandler } = useContext(UserContext);
    const [error, setError] = useState(null);
    const [signUpLoading, setSignUpLoading] = useState(false);
    const navigate = useNavigate();

    const location = useLocation();
    const pathName = location.state?.pathName;

    const createUserHandler = (event) => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        setError(null);

        if (email.length <= 0 || !email) {
            setError('Please enter email.');
            return;
        }

        if (password.length < 6 || !password) {
            setError('Please enter password more then 6 characters.');
            return;
        }

        if (password.toLowerCase() !== confirmPassword.toLowerCase()) {
            setError('Your password does not match.');
            return;
        }

        setSignUpLoading(true);
        signUpHandler(email, password)
            .then(() => {
                toast.success('Signup successfully');
                setSignUpLoading(false);
                navigate(pathName, { replace: true });
            })
            .catch(error => {
                setSignUpLoading(false);
                const errorCode = error.code;
                if (errorCode === "auth/email-already-in-use") {
                    setError('An account is already created with this email.')
                };
                console.log(errorCode);
            });

    }

    const googleHandler = () => {
        googleAuthHandler()
            .then(() => {
                toast.success('Signup successfully');
                navigate(pathName, { replace: true });
            })
            .catch(error => console.log(error));
    }

    const githubHandler = () => {
        githubAuthHandler()
            .then(() => {
                toast.success('Signup successfully');
                navigate(pathName, { replace: true });
            })
            .catch(error => console.log(error));
    }

    return (
        <div className='mt-10'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Signup now!</h1>
                        <p className="py-6">
                            with <span className='font-semibold'>eShiki.com</span>, you will have an account if you want to enroll in our courses. If you have not created an account, please create an account. And if you have created an account please <Link className='underline text-primary' to='/login'>login</Link>.
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={createUserHandler}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className='form-control'>
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" name='confirmPassword' placeholder="confirm password" className="input input-bordered" required />
                                </div>
                                {error !== null && <small className='text-red-400 font-semibold mt-2 block pl-2'>{error}</small>}
                                <div className="form-control mt-3">
                                    <button disabled={signUpLoading ? true : false} className="btn btn-primary">
                                        {signUpLoading && <span className='block w-6 h-6 rounded-full border-4 border-slate-400 animate-spin mr-2 border-y-slate-50'></span>}
                                        Signup
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
                                <p className='mt-2 text-sm'>You have an account. Please <Link className='underline text-primary' to='/signup'>Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default SignUp;
