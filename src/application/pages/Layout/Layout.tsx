/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Drawer from '../../components/Drawer/Drawer';

const Layout = () => {
    const [open, setOpen] = useState<boolean>(false);

    const drawerSize = (document.getElementById('drawerContainer')?.clientHeight || 0) > 0;

    return (
        <div className='flex h-screen'>
            <div
                id='drawerContainer'
                className={`flex-none h-0 w-0 ${open ? 'animate-drawer-open' : drawerSize ? 'animate-drawer-close' : 'invisible'}`}
            >
                <Drawer open={open} />
            </div>
            <button
                type='button'
                onClick={() => setOpen(!open)}
                className='self-start bg-white rounded-r-full w-[48px] text-2xl'
            >
                {open ? '<-' : '->'}
            </button>
            <div className='flex-1'>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
