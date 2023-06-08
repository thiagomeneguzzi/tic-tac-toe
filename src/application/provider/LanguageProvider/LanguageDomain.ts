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
};
