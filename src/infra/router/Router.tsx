import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../../application/pages/Layout/Layout';

import TwoPlayers from '../../application/pages/twoPlayers/TwoPlayers';
import Home from '../../application/pages/Home/Home';

const Router = (): JSX.Element => {
    const routes = [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/two-players',
            element: <TwoPlayers />,
        },
    ];

    const mountRoutes = () => {
        return routes.map((route) => (
            <Route
                key={route.path}
                path={route.path}
                element={route.element}
            />
        ));
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>{mountRoutes()}</Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
