import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {
    label: string;
    route: string;
};

const DrawerGameOption: FC<Props> = (props) => {
    const { label, route } = props;

    const navigate = useNavigate();
    const location = useLocation();

    const isActive = location.pathname.length > 2 ? route.includes(location.pathname) : false;

    const handleRedirect = () => {
        if (route) {
            navigate(route);
        }
    };

    return (
        <button
            type='button'
            className={`rounded-lg border-[1px] font-bold text-lg py-4 w-5/6 ${
                isActive ? 'bg-gray-50 text-black border-black' : 'bg-gray-400 text-white border-gray-300'
            }`}
            onClick={handleRedirect}
        >
            {label}
        </button>
    );
};

export default DrawerGameOption;
