import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import Drawer from '../../components/Drawer/Drawer';

const Layout = () => {
    const greaterThan1024 = window.innerWidth > 1024;
    const [open, setOpen] = useState<boolean>(greaterThan1024);

    return (
        <div className='flex h-screen relative'>
            <div className={`z-20 absolute h-full w-[256px] left-0 transition-all duration-1000 ${open ? '' : 'left-[-256px]'}`}>
                <div className='flex-none absolute w-full h-full'>
                    <Drawer open={open} />
                </div>
                <button
                    type='button'
                    onClick={() => setOpen(!open)}
                    className={`absolute top-10 right-[-42px] bg-white rounded-full p-3 text-2xl ${open ? '' : 'rotate-180'}`}
                >
                    <AiOutlineArrowLeft />
                </button>
            </div>
            <div className='relative h-full flex-1'>
                {open && <div className='absolute w-full h-full bg-gray-900 duration-1000 opacity-80' />}
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
