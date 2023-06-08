import React from 'react';
import { FaRegCircle, FaTimes } from 'react-icons/fa';

type Props = {
    value: 'X' | 'O' | '';
    onClick: () => void;
};

const GameCard = ({ value, onClick }: Props): JSX.Element => {
    const renderIcon = (): JSX.Element => {
        if (value === 'X') {
            return (
                <FaTimes
                    size={24}
                    color='red'
                />
            );
        }

        if (value === 'O') {
            return (
                <FaRegCircle
                    size={24}
                    color='black'
                />
            );
        }

        return <div />;
    };

    return (
        <button
            type='button'
            className='flex items-center justify-center rounded-3xl w-[8rem] h-[8rem] bg-white'
            onClick={onClick}
        >
            <span>{renderIcon()}</span>
        </button>
    );
};

export default GameCard;
