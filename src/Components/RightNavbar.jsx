import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import FindUs from './FindUs';

const RightNavbar = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Login With</h2>
            <div className='*:w-full space-y-2'>
                <button className='btn'><FaGoogle></FaGoogle>Login with Google</button>
                <button className='btn'><FaGithub></FaGithub>Login with Github</button>
                <section className='pt-5'><FindUs></FindUs></section>
                
            </div>
        </div>
    );
};

export default RightNavbar;