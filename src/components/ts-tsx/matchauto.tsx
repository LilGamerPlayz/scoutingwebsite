import React from "react";

const CreateQuestions: React.FC = (questionsVal: any) => {
    const data = questionsVal;

    return (
        <div>
            {data.map((question: {
                optioninputs: any;
                options: any;
                id: string | undefined;
                question: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
                type: string | (string & {}) | undefined;
                placeholder: string | undefined;
            }) => {
                return (
                    <div id={question.id} data-animate>
                        <h1 id={`${question.id}Label`}>{question.question}</h1>
                        {
                            question.options ?
                                <select id={`${question.id}Input`} className="input">
                                    {question.options.map((option: string) => {
                                        return (
                                            <option value={option}>{option}</option>
                                        );
                                    })}
                                </select>
                            : question.optioninputs ?
                                <div>
                                    {
                                    question.optioninputs.map((option: string) => {
                                        return (
                                            <div>
                                                <input type={question.type} id={`${question.id}Input`} className="input" placeholder={option} />
                                            </div>
                                        );
                                    })}
                                </div>
                            : question.type == "text" ?
                                <input type={question.type} id={`${question.id}Input`} className="input" placeholder={question.placeholder} />
                            : null
                        }
                    </div>
                );
            })}
        </div>
    );
};

export default CreateQuestions;