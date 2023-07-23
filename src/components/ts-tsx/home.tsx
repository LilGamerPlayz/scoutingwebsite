import React from "react";
import '../scss/home.scss';

const HomePageElements: React.FC = () => {
    function Survey() {
        throw new Error("Function not implemented.");
    }

    function Blacked() {
        throw new Error("Function not implemented.");
    }

    function ScoutingType(event: React.MouseEvent<HTMLButtonElement>): void {
        throw new Error("Function not implemented.");
    }

    return (
        <>
            <div id="leftHalf"></div>
            <div id="rightHalf"></div>
            <br />
            <br />
            <center id="center">
                <br />
                <br />
                <h1 id="Scouting1" data-animate="">
                    OA Robotics Scouting Website
                </h1>
                <br />
                <img
                    id="Image"
                    src="/components/elements/4079-transparent.png"
                    data-animate=""
                    alt="Robotics Team Logo"
                />
                <br />
                <br />
                <div className="submitbox" id="SubmitBox">
                    <h2>Input your name here</h2>
                    <br />
                    <input type="text" id="Name" placeholder="Name" />
                    <button id="Submit">Submit</button>
                </div>
                <div id="buttons">
                    <button
                        className="buttonchoose"
                        id="Scouting"
                        onClick={ScoutingType}
                        data-animate=""
                    >
                        <h1>Scouting</h1>
                    </button>
                    <button
                        className="buttonchoose"
                        id="Survey"
                        onClick={() => {
                            Survey();
                            Blacked();
                        }}
                        data-animate=""
                    >
                        <h1>Scouting Survey Results</h1>
                    </button>
                </div>
            </center>
            <div className="overlay"></div>
        </>
    );
};

export default HomePageElements;