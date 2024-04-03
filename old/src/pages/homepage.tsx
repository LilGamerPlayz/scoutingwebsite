import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import HomePageElements from "../components/ts-tsx/home";

const HomePage: React.FC = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Home - Scouting Website</title>
            </Helmet>
            <HomePageElements />
        </HelmetProvider>
    );
}

export default HomePage;