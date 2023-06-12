import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLanguage } from '../../provider/LanguageProvider/LanguageProvider';

const Multiplayer = () => {
    const {
        selectedLanguage: { words },
    } = useLanguage();

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [roomName, setRoomName] = useState('');

    const handleEnterRoom = () => {
        if (name.length >= 3 && roomName) {
            localStorage.setItem('name', name);
            navigate(`/multiplayer/room/${roomName}`);
        }
    };
    return (
        <div className='flex justify-center items-center w-full h-full px-4'>
            <div className='flex flex-col gap-2 justify-center items-center w-full h-full px-4'>
                <input
                    type='text'
                    placeholder={words.multiplayer.name}
                    className='bg-gray-500 border border-gray-300 text-gray-50 block w-full p-2.5 rounded-lg placeholder-gray-200'
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    type='text'
                    placeholder={words.multiplayer.room}
                    className='bg-gray-500 border border-gray-300 text-gray-50 block w-full p-2.5 rounded-lg placeholder-gray-200'
                    onChange={(event) => setRoomName(event.target.value)}
                />
                <button
                    type='button'
                    className='bg-gray-300 border border-gray-300 text-gray-50 w-full p-2.5 rounded-lg hover:bg-gray-400 transition-all duration-500'
                    onClick={handleEnterRoom}
                >
                    {words.multiplayer.enterRoom}
                </button>
            </div>
        </div>
    );
};

export default Multiplayer;
