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
        navigate(route);
    };

    return (
        <button
            type='button'
            onClick={handleRedirect}
        >
            {label}
        </button>
    );
};

export default DrawerGameOption;
