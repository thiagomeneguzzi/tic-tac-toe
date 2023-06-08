import { Language } from './LanguageDomain';

import enUSWords from './languages/en-US';
import ptBRWords from './languages/pt-BR';

const languages: Language[] = [
    {
        code: 'en-US',
        languages: {
            brazilianPortuguese: {
                label: 'Brazilian Portuguese',
                code: 'pt-BR',
            },
            usaEnglish: {
                label: 'USA English',
                code: 'en-US',
            },
        },
        words: enUSWords,
    },
    {
        code: 'pt-BR',
        languages: {
            brazilianPortuguese: {
                label: 'Português Brasileiro',
                code: 'pt-BR',
            },
            usaEnglish: {
                label: 'Inglês USA',
                code: 'en-US',
            },
        },
        words: ptBRWords,
    },
];

export default languages;
