import React, { useState } from 'react';

import GameBoard from '../../components/GameBoard/GameBoard';

import { initialValue } from '../../../utils/consts/game';
import gameServiceImpl from '../../../services/implementation/gameServiceImpl/gameServiceImpl';

import { Options } from '../../../utils/types/game';
import { useLanguage } from '../../provider/LanguageProvider/LanguageProvider';

const TwoPlayers = () => {
    const {
        selectedLanguage: { words },
        getTextWithParams,
    } = useLanguage();

    const [gameStateOptions, setGameStateOptions] = useState<Options>(initialValue);
    const [turnOption, setTurnOption] = useState<'X' | 'O'>('X');

    const [winner, setWinner] = useState<'X' | 'O'>();
    const [gotOld, setGotOld] = useState<boolean>(false);

    const handleOptionMark = (index: number): void => {
        if (!winner && !gotOld) {
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
            {winner && <h1 className='text-2xl text-white font-bold'>{getTextWithParams(words.localMultiplayerGame.victory, [winner])}</h1>}
            {gotOld && <h1 className='text-2xl text-white font-bold'>{words.game.draw}</h1>}
            <div className='py-4'>
                <GameBoard
                    gameState={gameStateOptions}
                    handleOptionMark={handleOptionMark}
                />
            </div>
            {(winner || gotOld) && (
                <button
                    type='button'
                    className='px-4 py-2 text-white text-bold bg-gray-300 rounded-full'
                    onClick={resetGame}
                >
                    {words.game.reset}
                </button>
            )}
        </div>
    );
};

export default TwoPlayers;
