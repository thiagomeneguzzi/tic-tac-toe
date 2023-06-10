import React, { useRef, useState } from 'react';

import GameBoard from '../../components/GameBoard/GameBoard';

import { initialValue } from '../../../utils/consts/game';
import gameServiceImpl from '../../../services/implementation/gameServiceImpl/gameServiceImpl';

import { Options } from '../../../utils/types/game';
import { useLanguage } from '../../provider/LanguageProvider/LanguageProvider';

const SinglePlayer = () => {
    const {
        selectedLanguage: { words },
    } = useLanguage();

    const [gameStateOptions, setGameStateOptions] = useState<Options>(initialValue);

    const turnOption = 'X';
    const [winner, setWinner] = useState<'player' | 'cpu'>();
    const [draw, setDraw] = useState<boolean>(false);
    const [computerLoading, setComputerLoading] = useState<boolean>(false);

    const cpuTurnReference = useRef<ReturnType<typeof setTimeout>>();

    const handleOptionMark = (index: number): void => {
        if (!winner && !draw && !cpuTurnReference.current) {
            const tempOptions = [...gameStateOptions];

            if (tempOptions[index] !== '') {
                return;
            }

            tempOptions[index] = turnOption;
            setGameStateOptions(tempOptions);

            const isPlayerWinner = gameServiceImpl.verifyWinner(tempOptions, turnOption);

            if (isPlayerWinner) {
                setWinner('player');
            } else {
                const isPlayerDraw = gameServiceImpl.verifyGotOld(tempOptions);

                if (isPlayerDraw) {
                    setDraw(isPlayerDraw);
                } else {
                    setComputerLoading(true);
                    cpuTurnReference.current = setTimeout(() => {
                        const computerIndex = gameServiceImpl.getComputerTurnIndex(tempOptions);

                        tempOptions[computerIndex] = 'O';

                        const isCpuWinner = gameServiceImpl.verifyWinner(tempOptions, 'O');

                        if (isCpuWinner) {
                            setWinner('cpu');
                        } else {
                            const isCpuDraw = gameServiceImpl.verifyGotOld(tempOptions);
                            setDraw(isCpuDraw);
                        }

                        cpuTurnReference.current = undefined;
                        setComputerLoading(false);
                    }, 2000);
                }
            }
        }
    };

    const resetGame = (): void => {
        setWinner(undefined);
        setGameStateOptions(initialValue);
        setDraw(false);
    };

    return (
        <div className='flex flex-col justify-center items-center w-full h-full px-4'>
            {!computerLoading ? (
                <>
                    {winner === 'player' && <h1 className='text-2xl text-white font-bold'>{words.localSinglePlayerGame.victory}</h1>}
                    {winner === 'cpu' && <h1 className='text-2xl text-white font-bold'>{words.localSinglePlayerGame.lose}</h1>}
                    {draw && <h1 className='text-2xl text-white font-bold'>{words.game.draw}</h1>}
                </>
            ) : (
                <h1 className='text-2xl text-white font-bold'>{words.localSinglePlayerGame.waitingCpu}</h1>
            )}
            <div className='py-4'>
                <GameBoard
                    gameState={gameStateOptions}
                    handleOptionMark={handleOptionMark}
                />
            </div>
            {(winner || draw) && (
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

export default SinglePlayer;
