import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/LeftNavbar';
import RightNavbar from '../Components/RightNavbar';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            <header> <Header></Header>
            <section className='mt-3 w-11/12 mx-auto'>
                <LatestNews></LatestNews>
                
            </section>
            </header>
            <nav className='w-11/12 mx-auto py-2'>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-2'>
            <aside className='left col-span-3'>
                <LeftNavbar></LeftNavbar>
            </aside>
            <section className='col-span-6'>
            <Outlet></Outlet>
            </section>
            <aside className='col-span-3'>
                <RightNavbar></RightNavbar>

            </aside>

            </main>
            
            
        </div>
    );
};

export default HomeLayout;