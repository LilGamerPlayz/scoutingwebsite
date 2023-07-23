import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import HomePageElements from "../components/ts-tsx/home";

const HomePage: React.FC = () => {
    const submit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        const name = document.getElementById("name") as HTMLInputElement;
        if (name.value === "") {
            alert("Please input your name");
        } else {
            localStorage.setItem("name", name.value);
            window.location.href = "/scouting";
        }
    }

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