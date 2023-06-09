import React, { useState } from 'react';

import GameBoard from '../../components/GameBoard/GameBoard';

import { initialValue } from '../../../utils/consts/game';
import gameServiceImpl from '../../../services/implementation/gameServiceImpl/gameServiceImpl';

import { Options } from '../../../utils/types/game';

const SinglePlayer = () => {
    const [gameStateOptions, setGameStateOptions] = useState<Options>(initialValue);

    const turnOption = 'X';
    const [winner, setWinner] = useState<'player' | 'cpu'>();
    const [draw, setDraw] = useState<boolean>(false);
    const [computerLoading, setComputerLoading] = useState<boolean>(false);

    const handleOptionMark = (index: number): void => {
        if (!winner && !draw) {
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
                    setTimeout(() => {
                        const computerIndex = gameServiceImpl.getComputerTurnIndex(tempOptions);

                        tempOptions[computerIndex] = 'O';

                        const isCpuWinner = gameServiceImpl.verifyWinner(tempOptions, 'O');

                        if (isCpuWinner) {
                            setWinner('cpu');
                        } else {
                            const isCpuDraw = gameServiceImpl.verifyGotOld(tempOptions);
                            setDraw(isCpuDraw);
                        }

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
                    {winner === 'player' && <h1 className='text-2xl text-white font-bold'>Parabéns jogador, você ganhou!</h1>}
                    {winner === 'cpu' && <h1 className='text-2xl text-white font-bold'>Ops, você perdeu!</h1>}
                    {draw && <h1 className='text-2xl text-white font-bold'>Deu velha!</h1>}
                </>
            ) : (
                <h1 className='text-2xl text-white font-bold'>Aguardando computador...</h1>
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
                    Reiniciar
                </button>
            )}
        </div>
    );
};

export default SinglePlayer;
