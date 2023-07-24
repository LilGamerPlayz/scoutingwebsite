import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import '../components/scss/selection.scss';

const ChooseType: React.FC = () => {
    const BlackedMatchScouting: React.MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault();

        setTimeout(() => {
            window.location.href = "/match-scouting-auto";
        }, 1000);
    }

    const BlackedPitScouting: React.MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault();

        setTimeout(() => {
            window.location.href = "/pit-scouting";
        }, 1000);
    }

    const Back: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();

        setTimeout(() => {
            window.location.href = "/";
        }, 1000);
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>Choose Type - Scouting Website</title>
            </Helmet>
            <div className="overlay" />
            <div id="leftHalf" onClick={BlackedMatchScouting}>
                <h1 id="Match-Scouting">Match Scouting</h1>
            </div>
            <div id="rightHalf" onClick={BlackedPitScouting}>
                <h1 id="Pit-Scouting">Pit Scouting</h1>
            </div>
            <button id="goBackButton" onClick={Back}>Go Back</button>
        </HelmetProvider>
    )
}

export default ChooseType;