import React from 'react';

import GameCard from '../GameCard/GameCard';

import { Options } from '../../../utils/types/game';

type Props = {
    gameState: Options;
    handleOptionMark: (index: number) => void;
};

const GameBoard = ({ gameState, handleOptionMark }: Props): JSX.Element => {
    return (
        <div className='grid grid-rows-3 grid-flow-col gap-1'>
            {gameState.map((option, index) => (
                <GameCard
                    value={option}
                    onClick={() => handleOptionMark(index)}
                />
            ))}
        </div>
    );
};

export default GameBoard;
