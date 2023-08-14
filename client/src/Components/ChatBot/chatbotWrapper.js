import React, { useState } from "react";
import { askMessage } from "./chatbotServerCommunication";

export const ChatbotWrapper = () => {
    const [prompt, setPrompt] = useState("");
    const [replies, setReplies] = useState([]);
    const [questions, setQuestions] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setQuestions((oldArray) => [...oldArray, prompt]);
        let message = await askMessage(prompt, setReplies);
        setReplies((oldArray) => [...oldArray, message]);

        setPrompt("");
    };

    return (
        <div className="prose flex flex-col justify-center min-w-full mt-12">
            <h2 className="text-center text-4xl">
                Feeling Down? Talk with our chatbot!
            </h2>
            <p className="text-2xl w-[50vw] self-center text-center">
                If you aren't feeling that well, then it might help to talk to
                someone; someone that won't judge you at all, and will just
                listen and reply to your concerns. This way, you don't have to
                worry about anyone getting angry, annoyed, or judge you about
                what you've done, and you also won't feel lonely because you're
                taking just taking out all of your feelings that have been stuck
                inside you and have been overwhelming you.
            </p>
            <div className="mx-auto w-11/12 h-auto my-10 rounded-xl grid grid-cols-1 bg-[#d3b882]">
                {questions.map((object, index) => {
                    return (
                        <>
                            <p
                                key={index}
                                className="max-w-5xl text-left mr-4 p-3 px-6 rounded-xl inline-block place-self-end bg-gradient-to-r from-[#75aeac] to-[#6f7bf7] text-white text-2xl"
                            >
                                {object}
                            </p>
                            <p
                                key={index + 1}
                                className="max-w-5xl text-left p-3 px-6 rounded-xl inline-block place-self-start ml-4 bg-gradient-to-l from-[#b190ba] to-[#e8b595] text-white text-2xl"
                            >
                                {replies[index]}
                            </p>
                        </>
                    );
                })}
            </div>
            <form
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
                className="flex flex-row justify-center"
            >
                <input
                    type="text"
                    id="prompt"
                    placeholder="Type your prompt here"
                    value={prompt}
                    onChange={(e) => {
                        setPrompt(e.target.value);
                    }}
                    className="input input-bordered input-secondary mr-4 w-10/12"
                />
                <button type="submit" className="btn btn-outline btn-accent">
                    Send
                </button>
            </form>
        </div>
    );
};
