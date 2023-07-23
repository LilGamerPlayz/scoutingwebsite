import React, { useState } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const MatchScoutingAuto: React.FC = () => {
    const [questions, setQuestions] = useState([]);

    const Blacked: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>Match Scouting - Scouting Website</title>
            </Helmet>
            <div className="overlay" />
            <center id="center">
                <br/><br/><br/><br/>

                <h1 id="Match-Scouting" data-animate>Match Scouting Form</h1>
                <img id="Image" src="/components/4079.png" data-animate />
                {questions}
                <button onClick={Blacked} id="Back" data-animate>Go Back</button>
            </center>
        </HelmetProvider>
    )
}

export default MatchScoutingAuto;