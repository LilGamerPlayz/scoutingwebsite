import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../../components/scss/matchauto.scss';

const MatchScoutingTele: React.FC = () => {
    const [questions, setQuestions] = useState([
        {
            question: "What is the team number?",
            type: "number",
            id: "TeamNumber",
            placeholder: "4079",

        },
        {
            question: "What game pieces can your robot pick up?",
            type: "text",
            id: "GamePieces",
            placeholder: "Cones, Cubes, etc.",
        },
        {
            question: "How experienced is your driver(s)<br>(# of years)",
            type: "number",
            id: "DriverExperience",
            placeholder: "3",
        },
        {
            question: "What type of drive train do you have?",
            type: "text",
            id: "DriveTrain",
            placeholder: "Mecanum, Omni, etc.",
        },
        {
            question: "What is your typical plan for auto?",
            type: "text",
            id: "AutoPlan",
            placeholder: "Score in low goal, etc.",
        },
        {
            question: "What are the locations in which you can pick up game pieces?",
            type: "text",
            id: "GamePieceLocation",
            placeholder: "Loading Zone, etc.",
        },
        {
            question: "What is your average cycle time?",
            type: "text",
            id: "AverageTime",
            placeholder: "10s",
        },
        {
            question: "Where can you score? (Low, Middle, or High)",
            type: "text",
            id: "ScoringLocation",
            placeholder: "Low, Middle, High",
        },
        {
            question: "How quickly can you dock and engage?",
            type: "text",
            id: "DockEngage",
            placeholder: "5s, 10s, etc. or N/A",
        },
    ]);

    const Submit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
    }

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
                <br /><br /><br /><br />

                <h1 id="Match-Scouting" data-animate>Match Scouting Form</h1>
                <img id="Image" src="/components/elements/4079.png" data-animate />
                {
                    questions.map((question) => {
                        return (
                            <div id={question.id} data-animate>
                                <h1 id={`${question.id}Label`}>{question.question}</h1>
                                <input type={question.type} id={`${question.id}Input`} className="input" placeholder={question.placeholder} />
                            </div>
                        )
                    })
                }
                <div id="Comments" className="Question" data-animate>
                    <h1 id="CommentsLabel">Any additional comments about your robot? <br />Any cool theming or subsystems? etc.</h1>
                    <textarea id="CommentsInput" rows={10} cols={50} className="input" />
                </div>

                <br /><br />

                <div id="Competition" className='Question' data-animate>
                    <h1 id="CompetitionLabel">What competition are you at?</h1>
                    <input type="text" id="CompetitionInput" placeholder="OCR, AVR, BB" className="input" />
                </div>

                <br /><br />

                <div className="submitbox" id="SubmitBox">
                    <h2 id="SubmitLabel">Are you sure you want to submit?</h2>
                    <br />
                    <div id="SubmitCheck">
                        <button id="SubmitYes">Yes</button>
                        <button id="SubmitNo">No</button>
                    </div>

                    <button onClick={Blacked} id="Back" data-animate>Go Back</button>
                    <button type="submit" onClick={Submit} id="SubmitButton" data-animate>Submit</button>

                </div>
            </center>
        </HelmetProvider>
    )
}

export default MatchScoutingTele;