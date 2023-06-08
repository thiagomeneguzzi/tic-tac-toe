import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../../application/pages/Layout/Layout';
import TwoPlayers from '../../application/pages/twoPlayers/TwoPlayers';

const Router = (): JSX.Element => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: 'two-players',
                    element: <TwoPlayers />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
