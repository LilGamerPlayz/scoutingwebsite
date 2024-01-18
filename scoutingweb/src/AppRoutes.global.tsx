import React from 'react';
import { BrowserRouter as ReactRouter, Routes as Paths, Route as Path, Navigate as Redirect } from 'react-router-dom';

// SCSS
import './components/styles/pages.global.scss';

// Pages
import HomePage from './pages/homepage.main';

const AppRoutes: React.FC = (): React.JSX.Element => {
    return (
        <ReactRouter>
            <Paths>
                {/* Redirects */}
                <Path path="/*" element={<Redirect to="/" />} />

                {/* Pages */}
                <Path path="/" element={<HomePage />} />
            </Paths>
        </ReactRouter>
    )
};

export default AppRoutes;