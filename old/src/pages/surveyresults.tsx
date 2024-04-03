import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SurveyResults: React.FC = () => {
    const Blacked: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>Survey Results - Scouting Website</title>
            </Helmet>
            <div className="overlay" />
            <div id="leftHalf" />
            <div id="rightHalf" />

            <center>
                <div id="search" data-animate>
                    <label htmlFor="searchInput" data-animate>Find Teams</label>
                    <input id="searchInput" type="number" placeholder="4079" min="1" max="99999" inputMode="numeric" data-animate />
            
                    <select id="searchType" data-animate>
                        <option value="All-Scouting">All teams</option>
                        <option value="Pit-Scouting">Pit Scouting</option>
                        <option value="Match-Scouting">Match Scouting</option>
                    </select>

                    <button onClick={Blacked} id="Back" data-animate>Go Back</button>
                </div>

                <div className="container" id="Teams" data-animate />
            </center>
        </HelmetProvider>
    )
};

export default SurveyResults;
