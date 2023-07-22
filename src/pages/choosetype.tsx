import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const ChooseType: React.FC = () => {
    const BlackedMatchScouting: React.MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault();
    }

    const BlackedPitScouting: React.MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault();
    }
    
    return (
        <HelmetProvider>
            <Helmet>
                <title>Choose Type - Scouting Website</title>
            </Helmet>
            <div className="overlay"/>
            <div id="leftHalf" onClick={() => BlackedMatchScouting}>
                <h1 id="MatchScouting">Match Scouting</h1>
            </div>
            <div id="rightHalf" onClick={() => BlackedPitScouting}>
                <h1 id="PitScouting">Pit Scouting</h1>
            </div>
            <button id="goBackButton" onClick={() => window.location.href = "/"}>Go Back</button>
        </HelmetProvider>
    )
}