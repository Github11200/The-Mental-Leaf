import React, { useEffect, useState } from "react";
import { getJokes } from "./jokesAPI";

export const JokesWrapper = () => {
    const [joke, setJoke] = useState();

    useEffect(() => {
        getJokes().then((data) => {
            const text = data[0].joke;
            setJoke(text);
        });
    }, []);

    const eventHandler = (e) => {
        e.preventDefault();

        getJokes().then((data) => {
            const text = data[0].joke;
            setJoke(text);
        });
    };

    return (
        <div className="prose flex flex-col justify-center min-w-full mt-12">
            <h2 className="text-center text-4xl">
                Feeling down? Jokes can help!
            </h2>
            <p className="text-2xl w-[50vw] self-center text-center">
                If journaling and talking to someone hasn't really helped you,
                then a good joke definetly will! Click the button to create a
                new joke, and relax!
            </p>
            {joke !== undefined ? (
                <div className="m-4 bg-base-300 rounded-xl w-[90vw] self-center">
                    <p className="text-center text-4xl">{joke}</p>
                </div>
            ) : (
                <></>
            )}

            <button
                type="button"
                onClick={(e) => eventHandler(e)}
                className="btn btn-outline w-[8vw] btn-accent self-center mt-3"
            >
                Click for a joke!
            </button>
        </div>
    );
};
