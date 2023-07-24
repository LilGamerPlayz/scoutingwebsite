import React, { useState, useEffect } from "react";
import '../scss/home.scss';

const HomePageElements: React.FC = () => {
    const [name, setName] = useState<string>("");

    useEffect(() => {
        const storedName = getCookie("name");
        if (storedName) {
            setName(storedName);
        }
    }, []);

    const ScoutingType: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        if (name === "") {
            const nameInput = document.createElement("input");
            nameInput.type = "text";
            nameInput.id = "Name";
            nameInput.placeholder = "Name";
            const submitButton = document.getElementById("Submit");
            const submitBox = document.getElementById("SubmitBox");
            if (submitButton && submitBox) {
                submitBox.insertBefore(nameInput, submitButton);
                submitBox.insertBefore(document.createElement("br"), submitButton);
                setName(nameInput.value);
            }
        }
        setCookie("name", name);
        window.location.href = "/choosetype";
    }

    function setCookie(name: string, value: string, days: number = 7) {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=/";
    }

    function getCookie(name: string) {
        return document.cookie.split("; ").reduce((r, v) => {
            const parts = v.split("=");
            return parts[0] === name ? decodeURIComponent(parts[1]) : r;
        }, "");
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
                    {name === "" && <input type="text" id="Name" placeholder="Name" />}
                    <button id="Submit" onClick={() => setName((document.getElementById("Name") as HTMLInputElement).value)}>Submit</button>
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
                            throw new Error("Function not implemented.");
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
