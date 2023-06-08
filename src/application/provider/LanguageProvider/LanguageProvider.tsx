import React, { createContext, FC, useContext, useEffect, useMemo, useState } from 'react';

import languages from './languages';

import { Language, LanguageContextDomain } from './LanguageDomain';

const LanguageContext = createContext<LanguageContextDomain>({} as LanguageContextDomain);

type Props = {
    children: JSX.Element;
};

const LanguageProvider: FC<Props> = ({ children }) => {
    const getLanguage = () => {
        let language = localStorage.getItem('language');

        if (!language) {
            const languageDefault = languages[0];
            language = languageDefault.code;

            localStorage.setItem('language', languageDefault.code);
        }

        return language;
    };

    const [language, setLanguage] = useState<string>(() => getLanguage());

    const selectedLanguage = useMemo<Language>(() => {
        return languages.find((lang) => lang.code === language) as Language;
    }, [language]);

    const contextValue = useMemo(
        () => ({
            language,
            setLanguage,
            selectedLanguage,
        }),
        [language, selectedLanguage],
    );

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    return (
        <LanguageContext.Provider
            key='language-context'
            value={contextValue}
        >
            {children}
        </LanguageContext.Provider>
    );
};

const useLanguage = () => {
    return useContext(LanguageContext);
};

export { useLanguage, LanguageProvider };
