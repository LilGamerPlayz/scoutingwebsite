import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
            <div id="leftHalf" />
            <div id="rightHalf" />
            <br /><br /><br />
            <center id="center">
                <br /><br />
                <h1 id="Scouting1" data-animate>OA Robotics Scouting Website</h1>
                <br />
                <img id="Image" data-animate src="/components/4079-transparent.png" />
                <br /><br /><br />
                <div className="submitbox" id="SubmitBox">
                    <h2>Input your name here</h2>
                    <input type="text" id="name" placeholder="Name" />
                    <button id="Submit" onClick={submit}>Submit</button>
                </div>
                <div id="buttons">
                    <button className="buttonchoose" id="Scouting" onClick={() => window.location.href = "/choose"}>
                        <h1>
                            Scouting
                        </h1>
                    </button>
                    <button className="buttonchoose" id="Data" onClick={() => window.location.href = "/data"}>
                        <h1>
                            Scouting Survey Results
                        </h1>
                    </button>
                </div>
            </center>
            <div className="overlay" />
        </HelmetProvider>
    );
}

export default HomePage;