import React, { useState, useEffect } from "react";
import { getJokes } from "./jokesAPI";

export const JokesWrapper = () => {
    const [joke, setJoke] = useState();

    const eventHandler = (e) => {
        e.preventDefault();
        getJokes().then((data) => {
            const text = data[0].joke;
            setJoke(text);
        });
    };

    return (
        <div>
            <h1>Feeling down? Jokes can help!</h1>
            <div>
                <p>{joke}</p>
            </div>
            <button type="button" onClick={(e) => eventHandler(e)}>
                Click for a joke!
            </button>
        </div>
    );
};
