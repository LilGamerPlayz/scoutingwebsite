import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

// Components

// Pages
import HomePage from "./pages/homepage";
import SurveyResults from "./pages/surveyresults";
import ChooseType from "./pages/choosetype";
import PitScouting from "./pages/Pit-Scouting/questionaire";
import MatchScoutingAuto from "./pages/Match-Scouting/auto";
import Submitted from "./pages/submitted";

const RenderPages: React.FC = () => {
    return (
        <BrowserRouter>
            <HelmetProvider>
                <Helmet>
                    <link rel="icon" href="/components/elements/4079-transparent.png" />
                </Helmet>
            </HelmetProvider>
            <Routes>
                {/* Pages */}
                <Route path="/" element={<HomePage />} />
                <Route path="/surveyresults" element={<SurveyResults />} />
                <Route path="/choosetype" element={<ChooseType />} />
                <Route path="/pitscouting" element={<PitScouting />} />
                <Route path="/matchscoutingauto" element={<MatchScoutingAuto />} />
                <Route path="/match-submitted" element={<Submitted submittedType={"match"}/>} />
                <Route path="/pit-submitted" element={<Submitted submittedType={"pit"}/>} />

                {/* Redirects */}
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/surveyresults/*" element={<Navigate to="/surveyresults" />} />
                <Route path="/choosetype/*" element={<Navigate to="/choosetype" />} />
                <Route path="/pitscouting/*" element={<Navigate to="/pitscouting" />} />
                <Route path="/matchscoutingauto/*" element={<Navigate to="/matchscoutingauto" />} />
                <Route path="/match-submitted/*" element={<Navigate to="/match-submitted" />} />
                <Route path="/pit-submitted/*" element={<Navigate to="/pit-submitted" />} />

            </Routes>
        </BrowserRouter>
    );
}

export default RenderPages;
