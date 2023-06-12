import { Dispatch, SetStateAction } from 'react';

type LanguageCodeLabel = {
    code: string;
    label: string;
};

export type Language = {
    code: string;
    words: {
        gameMode: {
            gameTitle: string;
            selectGameMode: string;
            localMultiplayer: string;
            localSinglePlayer: string;
            multiplayer: string;
        };
        game: {
            draw: string;
            reset: string;
        };
        localSinglePlayerGame: {
            waitingCpu: string;
            victory: string;
            lose: string;
        };
        localMultiplayerGame: {
            victory: string;
        };
        multiplayer: {
            name: string;
            room: string;
            enterRoom: string;
        };
    };
    languages: {
        usaEnglish: LanguageCodeLabel;
        brazilianPortuguese: LanguageCodeLabel;
    };
};

export type LanguageContextDomain = {
    language: string;
    setLanguage: Dispatch<SetStateAction<string>>;
    selectedLanguage: Language;
    getTextWithParams: (text: string, params: string[]) => string;
};
