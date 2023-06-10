import React, { ChangeEvent } from 'react';
import { useLanguage } from '../../provider/LanguageProvider/LanguageProvider';

import DrawerGameOption from './components/DrawerGameOption';

const Drawer = () => {
    const { selectedLanguage, setLanguage, language } = useLanguage();
    const { languages, words } = selectedLanguage;

    const handleLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setLanguage(value);
    };

    return (
        <aside className='bg-gray-600 h-full w-full flex flex-col justify-between'>
            <div>
                <div className='text-white text-center py-2'>
                    <h1 className='text-5xl'>{words.gameMode.gameTitle}</h1>
                    <h3 className='text-xl'>{words.gameMode.selectGameMode}</h3>
                </div>
                <div className='flex flex-col items-center gap-4 py-4'>
                    <DrawerGameOption
                        label={words.gameMode.localSinglePlayer}
                        route='/single-player'
                    />
                    <DrawerGameOption
                        label={words.gameMode.localMultiplayer}
                        route='/two-players'
                    />
                    <DrawerGameOption
                        label={words.gameMode.multiplayer}
                        route=''
                    />
                </div>
            </div>
            <div className='w-full flex justify-center pb-2'>
                <select
                    defaultValue={language}
                    onChange={handleLanguage}
                >
                    {Object.values(languages).map((lang) => (
                        <option
                            key={lang.code}
                            value={lang.code}
                        >
                            {lang.label}
                        </option>
                    ))}
                </select>
            </div>
        </aside>
    );
};

export default Drawer;
