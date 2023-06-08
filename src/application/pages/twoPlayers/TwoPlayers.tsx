import React, { useState } from 'react';

import GameCard from '../../components/GameCard/GameCard';

import { initialValue } from '../../../utils/consts/game';
import gameServiceImpl from '../../../services/implementation/gameServiceImpl/gameServiceImpl';

import { Options } from '../../../utils/types/game';

const TwoPlayers = () => {
    const [gameStateOptions, setGameStateOptions] = useState<Options>(initialValue);
    const [turnOption, setTurnOption] = useState<'X' | 'O'>('X');

    const [winner, setWinner] = useState<'X' | 'O'>();
    const [gotOld, setGotOld] = useState<boolean>(false);

    const handleOptionMark = (index: number): void => {
        const tempOptions = [...gameStateOptions];

        if (tempOptions[index] !== '') {
            return;
        }

        tempOptions[index] = turnOption;
        setGameStateOptions(tempOptions);

        const hasWinner = gameServiceImpl.verifyWinner(tempOptions, turnOption);

        if (hasWinner) {
            setWinner(turnOption);
        } else {
            const endGame = gameServiceImpl.verifyGotOld(tempOptions);

            if (endGame) {
                setGotOld(true);
            } else {
                setTurnOption((prevState) => (prevState === 'X' ? 'O' : 'X'));
            }
        }
    };

    const resetGame = (): void => {
        setWinner(undefined);
        setGameStateOptions(initialValue);
        setTurnOption('X');
        setGotOld(false);
    };

    return (
        <div className='flex flex-col justify-center items-center w-full h-full px-4'>
            {winner && <h1>O vencedor foi o Jogador {winner}</h1>}
            {gotOld && <h1>Deu velha!</h1>}
            {(winner || gotOld) && (
                <button
                    type='button'
                    className='px-1 py-2'
                    onClick={resetGame}
                >
                    Reiniciar
                </button>
            )}
            <div className='grid grid-rows-3 grid-flow-col gap-2 w-full h-full max-w-[24rem] max-h-[24rem]'>
                {gameStateOptions.map((option, index) => (
                    <GameCard
                        value={option}
                        onClick={() => handleOptionMark(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default TwoPlayers;
