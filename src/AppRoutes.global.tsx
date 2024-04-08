import React from "react";
import { BrowserRouter as ReactRouter, Routes as Pathhub, Route as Path, Navigate as Redirect } from "react-router-dom";

// TS

// SCSS/LESS/CSS
import 'Styles/index.css';

// Components
import App from "Components/App.tsx";

const AppRoutes: React.FC = (): React.JSX.Element => {
    return (
        <ReactRouter>
            <Pathhub>
                {/* Redirects */}
                <Path path="/*" element={<Redirect to="/home" />} />

                {/* Routes */}
                <Path path="/home" element={<App />} />
            </Pathhub>
        </ReactRouter>
    )
};

export default AppRoutes;