/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const PitScouting: React.FC = () => {
    const [questions, setQuestions] = useState([]);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Pit Scouting - Scouting Website</title>
            </Helmet>
            <div className="overlay" />
            <center id="center">
                <br/><br/><br/><br/>

                <h1 id="Pit-Scouting" data-animate>Pit Scouting Form</h1>
                <img id="Image" src="/components/elements/4079.png" data-animate />
                {questions}
            </center>
        </HelmetProvider>
    )
}

export default PitScouting;