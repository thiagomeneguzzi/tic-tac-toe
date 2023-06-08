import React from 'react';

import { LanguageProvider } from './application/provider/LanguageProvider/LanguageProvider';

import Router from './infra/router/Router';

const App = (): JSX.Element => {
    return (
        <LanguageProvider>
            <Router />
        </LanguageProvider>
    );
};

export default App;
