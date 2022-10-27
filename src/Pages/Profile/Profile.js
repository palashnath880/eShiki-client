import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { UserContext } from '../../contexts/AuthContext';

const Profile = () => {

    const { user, updateUser, forgetPassword } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [userName, setUserName] = useState(user?.displayName);
    const [profileImg, setProfileImg] = useState(user?.photoURL);

    const passwordResetHandler = () => {
        const email = user.email;
        forgetPassword(email)
            .then(() => {
                toast.success('Password reset link send. Please check your mail and reset your password.');
            })
            .catch(error => console.error(error));
    }

    const updateProfileHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.displayName.value;
        const photoURL = form.photoURL.value;

        if (!name || !photoURL) {
            return;
        }
        setLoading(true);
        updateUser(name, photoURL)
            .then(() => {
                toast.success('Your profile update successfully');
                setLoading(false);
            })
            .catch(error => console.error(error));
    }

    const profileInputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        name === 'displayName' && setUserName(value);
        name === 'photoURL' && setProfileImg(value);
    }

    return (
        <div className='container mt-10 mx-auto'>
            <div className='min-h-[500px] my-10'>
                <div className='w-full md:w-8/12 mx-auto rounded-md border shadow-lg p-3'>
                    <div className='mt-5'>
                        <div className='w-32 cursor-pointer h-32 rounded-full overflow-hidden mx-auto'>
                            <img src={`${user.photoURL ? user.photoURL : 'https://placeimg.com/192/192/people'}`} alt='' />
                        </div>
                    </div>
                    <div>
                        <form onSubmit={updateProfileHandler} className='mt-10'>
                            <div className='flex gap-2 border px-2 py-3 rounded-md mb-2'>
                                <label className='w-32 font-semibold'>Email</label>
                                <input className='focus:outline-0 ml-2' type='text' value={user?.email} readOnly />
                            </div>
                            <div className='flex items-center gap-2 border px-2 py-3 rounded-md mb-2'>
                                <label className='w-32 font-semibold'>Name</label>
                                <input onChange={profileInputHandler} className='focus:outline-0 focus:bg-slate-100 py-2 focus:px-3 ml-2' type='text' name='displayName' value={userName} />
                            </div>
                            <div className='flex items-center gap-2 border px-2 py-3 rounded-md mb-2'>
                                <label className='w-32 font-semibold'>Photo Url</label>
                                <input onChange={profileInputHandler} className='focus:outline-0 flex-1 focus:bg-slate-100 py-2 focus:px-3 ml-2' type='urk' name='photoURL' value={profileImg} />
                            </div>
                            {loading && <small className='pl-4 mt-3'>Updating.......</small>}
                            <div className='mt-5 p-3'>
                                <button disabled={loading ? true : false} onClick={passwordResetHandler} type='button' className='hover:underline'>Forget Password</button>
                                <button disabled={loading ? true : false} type='submit' className='hover:bg-transparent hover:text-gray-700 border border-green-500 ml-4 px-4 py-2 bg-green-500 text-slate-50'>Update Profile</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
