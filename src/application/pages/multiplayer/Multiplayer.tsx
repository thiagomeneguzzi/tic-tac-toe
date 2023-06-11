import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLanguage } from '../../provider/LanguageProvider/LanguageProvider';

const Multiplayer = () => {
    const {
        selectedLanguage: { words },
        getTextWithParams,
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
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    type='text'
                    onChange={(event) => setRoomName(event.target.value)}
                />
                <button
                    type='button'
                    onClick={handleEnterRoom}
                >
                    entrar
                </button>
            </div>
        </div>
    );
};

export default Multiplayer;
