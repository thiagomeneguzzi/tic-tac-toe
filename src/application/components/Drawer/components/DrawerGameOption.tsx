import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
    label: string;
    route: string;
};

const DrawerGameOption: FC<Props> = (props) => {
    const { label, route } = props;

    const navigate = useNavigate();

    const handleRedirect = () => {
        if (route) {
            navigate(route);
        }
    };

    return (
        <button
            type='button'
            className='bg-gray-400 rounded-lg border-[1px] border-gray-300 text-white font-bold text-lg py-4 w-5/6'
            onClick={handleRedirect}
        >
            {label}
        </button>
    );
};

export default DrawerGameOption;
