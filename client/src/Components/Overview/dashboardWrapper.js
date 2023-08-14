import React, { useState } from "react";
import { ChatbotWrapper } from "../ChatBot/chatbotWrapper";
import { JournalWrapper } from "../Journal/journalWrapper";
import { JokesWrapper } from "../Jokes/jokesWrapper";
import { ExternalResourcesWrapper } from "../Resources/externalResourcesWrapper";
import theme from "../../App.js";

export const DashboardWrapper = () => {
    const components = [
        <ChatbotWrapper />,
        <JournalWrapper />,
        <JokesWrapper />,
        <ExternalResourcesWrapper />,
    ];
    const [elements, setElements] = useState([
        {
            tabState: true,
            element: 0,
            elementName: "Chatbot",
        },
        {
            tabState: false,
            element: 1,
            elementName: "Journal",
        },
        { tabState: false, element: 2, elementName: "Jokes" },
        { tabState: false, element: 3, elementName: "External Resources" },
    ]);

    const handleClick = (e, index) => {
        e.preventDefault();

        setElements(
            elements.map((object, i) => {
                return i === index
                    ? { ...object, tabState: !object.tabState }
                    : { ...object, tabState: false };
            })
        );

        console.log(elements);
    };

    return (
        <div
            className="prose p-10 flex flex-col justify-center min-w-full min-h-screen overflow-y-scroll"
            data-theme={theme}
        >
            <h1 className="text-5xl text-center">
                Welcome to your own mental health dashboard!
            </h1>
            <br />
            <div className="tabs tabs-boxed justify-center w-[50vw] h-[9vh] self-center flex flex-row space-x-10 pb-[10vh]">
                {elements.map((object, index) => {
                    return object.tabState === true ? (
                        <div key={index}>
                            <div onClick={(e) => handleClick(e, index)}>
                                <p className="tab tab-active text-3xl h-[3.5vh]">
                                    {object.elementName}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div key={index} onClick={(e) => handleClick(e, index)}>
                            <p className="tab text-3xl h-[3.5vh]">
                                {object.elementName}
                            </p>
                        </div>
                    );
                })}
            </div>
            <div>
                {elements.map((object, index) => {
                    return object.tabState === true ? (
                        components[object.element]
                    ) : (
                        <div key={index}></div>
                    );
                })}
            </div>
        </div>
    );
};
