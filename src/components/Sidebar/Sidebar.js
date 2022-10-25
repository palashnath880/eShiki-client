import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Achievement from '../Achievement/Achievement';

const Sidebar = () => {

    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }, []);
    return (
        <div className='px-2 bg-slate-50 text-gray-600'>
            <div>
                <h2 className='text-xl text-center py-4 border-b border-gray-500'>Categories</h2>
                <div>
                    <ul className="menu menu-compact lg:menu-normal p-2 rounded-box">
                        <li><Link>Javascript</Link></li>
                        <li><Link>PHP</Link></li>
                        <li><Link>Python</Link></li>
                        <li><Link>Javascript</Link></li>
                        <li><Link>PHP</Link></li>
                        <li><Link>Python</Link></li>
                        <li><Link>Javascript</Link></li>
                        <li><Link>PHP</Link></li>
                        <li><Link>Python</Link></li>
                    </ul>
                </div>
            </div>
            <div>
                <h2 className='text-xl text-center py-4 border-b border-gray-500 font-semibold'>Achievement</h2>
                <Achievement />
            </div>
        </div>
    );
}

export default Sidebar;
