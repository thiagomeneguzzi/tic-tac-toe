import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../../application/pages/Layout/Layout';
import TwoPlayers from '../../application/pages/twoPlayers/TwoPlayers';

const Router = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route
                        element={<TwoPlayers />}
                        path='two-players'
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
