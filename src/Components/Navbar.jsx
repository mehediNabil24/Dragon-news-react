import React from 'react';
import { Link } from 'react-router-dom';
import person from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>

            </div>
            <div className='space-x-2'>
                <Link to={'/'}>Home</Link>
                <Link to={'/career'}>Career</Link>
                <Link to={'/about'}>About</Link>

            </div>
            <div>
                <div className='flex items-center gap-1'>
                    <img src={person} alt="" />
                    <Link to={'/auth/login'} className='btn btn-neutral rounded-none h-8 '>Login</Link>
                </div>

            </div>
            
        </div>
    );
};

export default Navbar;