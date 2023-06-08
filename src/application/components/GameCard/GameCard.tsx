import React from 'react';

type Props = {
    value: 'X' | 'O' | '';
    onClick: () => void;
};

const GameCard = ({ value, onClick }: Props): JSX.Element => {
    return (
        <button
            type='button'
            className='flex items-center justify-center rounded-3xl max-w-[8rem] max-h-[8rem] bg-gray-100  shadow-lg shadow-white/25'
            onClick={onClick}
        >
            <span className={`text-4xl font-bold ${value === 'X' ? 'text-red-600' : 'text-gray-500'}`}>{value}</span>
        </button>
    );
};

export default GameCard;
