import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../../application/pages/Layout/Layout';

import Home from '../../application/pages/Home/Home';
import TwoPlayers from '../../application/pages/twoPlayers/TwoPlayers';
import Multiplayer from '../../application/pages/multiplayer/Multiplayer';
import SinglePlayer from '../../application/pages/singlePlayer/SinglePlayer';
import MultiplayerRoom from '../../application/pages/multiplayer/multiplayerRoom/MultiplayerRoom';

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
        {
            path: '/single-player',
            element: <SinglePlayer />,
        },
        {
            path: '/multiplayer',
            element: <Multiplayer />,
        },
        {
            path: '/multiplayer/room',
            element: <MultiplayerRoom />,
        },
        {
            path: '/multiplayer/room/:id',
            element: <MultiplayerRoom />,
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
