import React, { useState } from "react";
import { askMessage } from "./chatbotServerCommunication";

export const ChatbotWrapper = () => {
    const [prompt, setPrompt] = useState("");
    const [replies, setReplies] = useState([]);
    const [questions, setQuestions] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setQuestions((oldArray) => [...questions, prompt]);

        let message = await askMessage(prompt, setReplies);
        setReplies((oldArray) => [...oldArray, message]);

        setPrompt("");
    };

    return (
        <div>
            <h1>Feeling Down? Talk with our chatbot!</h1>
            <div>
                <div>
                    {questions.map((object, index) => {
                        return <p key={index}>{object}</p>;
                    })}
                </div>
                <div>
                    {replies.map((object, index) => {
                        return <p key={index}>{object}</p>;
                    })}
                </div>
            </div>
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <input
                    type="text"
                    id="prompt"
                    placeholder="Type your prompt here"
                    value={prompt}
                    onChange={(e) => {
                        setPrompt(e.target.value);
                    }}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};
