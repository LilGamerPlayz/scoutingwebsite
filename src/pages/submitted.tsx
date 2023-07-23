import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface SubmittedProps {
    submittedType: string;
}

const Submitted: React.FC<SubmittedProps> = ({ submittedType }) => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Submitted</title>
            </Helmet>
            <div className="submitted">
                <h1>You have submitted the {submittedType} form!</h1>
                <p>Thank you for your submission!</p>
            </div>
        </HelmetProvider>
    );
};

export default Submitted;