import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { io, Socket } from 'socket.io-client';
import { useLanguage } from '../../../provider/LanguageProvider/LanguageProvider';

import GameBoard from '../../../components/GameBoard/GameBoard';

import { initialValue } from '../../../../utils/consts/game';
import { ClientToServerEvents, Options, Room, ServerToClientEvents } from '../../../../utils/types/game';

const MultiplayerRoom = () => {
    const {
        selectedLanguage: { words },
        getTextWithParams,
    } = useLanguage();

    const socket: Socket<ServerToClientEvents, ClientToServerEvents> = useMemo(
        () =>
            io('http://localhost:3000', {
                transports: ['websocket'],
            }),
        [],
    );

    const { id: roomName = '' } = useParams();

    const name = localStorage.getItem('name') || '';

    const [room, setRoom] = useState<Room>({
        draw: false,
        gameState: [],
        host: { socketId: '', userName: '' },
        id: '',
        users: [],
        winner: undefined,
        turn: {
            user: {
                userName: '',
                socketId: '',
            },
            item: '',
        },
    });

    useEffect(() => {
        socket.on('connect', () => {
            socket.emit('join_room', {
                roomId: roomName,
                user: { userName: name, socketId: socket.id },
            });
        });

        socket.on('join_room_client', (response) => {
            console.log({ response });
            setRoom(response);
        });

        socket.on('play_client', (response) => {
            handlePlay(response);
        });

        socket.connect();

        return () => {
            socket.off('join_room_client');
            socket.off('play_client');
        };
    }, []);
    console.log({ room });

    const [gameStateOptions] = useState<Options>(initialValue);
    const [turnOption] = useState<'X' | 'O'>('X');

    const [winner] = useState<'X' | 'O'>();
    const [gotOld] = useState<boolean>(false);

    const handleOptionMark = (index: number): void => {
        if (!winner && !gotOld) {
            const tempOptions = [...room.gameState];

            if (tempOptions[index] !== '') {
                return;
            }

            tempOptions[index] = turnOption;

            socket.emit('play', { roomId: room?.id || '', gameState: tempOptions });
        }
    };

    const handlePlay = (newRoomData: Room) => {
        setRoom(newRoomData);
    };

    const resetGame = (): void => {};

    return (
        <div className='flex flex-col justify-center items-center w-full h-full px-4'>
            {room.users.length === 2 ? (
                <>
                    {winner && <h1 className='text-2xl text-white font-bold'>{getTextWithParams(words.localMultiplayerGame.victory, [winner])}</h1>}
                    {gotOld && <h1 className='text-2xl text-white font-bold'>{words.game.draw}</h1>}
                    {room.turn.user.userName !== name && <h1 className='text-2xl text-white font-bold'>Aguardando jogador...</h1>}
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
                </>
            ) : (
                <h1 className='text-2xl text-white font-bold'>Aguardando outro jogador entrar...</h1>
            )}
        </div>
    );
};

export default MultiplayerRoom;
