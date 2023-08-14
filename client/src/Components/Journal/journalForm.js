import React from "react";
import { useState } from "react";

export const JournalForm = () => {
    const [value, setValue] = useState("");
    const [entries, setEntries] = useState([{}]);
    const [render, setRender] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();

        const date = new Date();

        const month = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];
        console.log(date.getMinutes());
        setEntries((oldArray) => [
            ...oldArray,
            {
                year: date.getFullYear(),
                day: date.getDate(),
                month: month[date.getMonth()],
                hour: date.getHours() % 12,
                PMOrAM: date.getHours >= 12 ? "PM" : "AM",
                minute:
                    date.getMinutes() < 10
                        ? `0${date.getMinutes()}`
                        : date.getMinutes(),
                entry: value,
                showContent: false,
            },
        ]);

        if (render === false) {
            setRender(true);
        }

        setValue("");
    };

    const entryClickHandler = (e, i) => {
        e.preventDefault();
        setEntries(
            entries.map((object, index) => {
                console.log(i);
                return index === i
                    ? { ...object, showContent: !object.showContent }
                    : { ...object };
            })
        );
    };

    return (
        <div className="prose flex flex-col justify-center min-w-full mt-12">
            <h2 className="text-4xl text-center">Your own personal journal!</h2>
            <p className="text-2xl w-[50vw] self-center text-center">
                If you're really feeling down then try writing out your thoughts
                into this online journal. Not only will you help yourself heal
                but you can express yourself in ways you haven't normally been
                able to. It may or reduce your anxiety and just calm you down.
                In fact, people that do journaling have better moods, less
                stress, and improve their phychological wellbeing. And you don't
                need to make your writing perfect, just write the first thing
                that comes to your mind. Remember, no one will judge you.
            </p>
            <form
                onSubmit={(e) => submitHandler(e)}
                className="flex flex-row justify-center"
            >
                <label htmlFor="journalEntry"></label>
                <textarea
                    id="journalEntry"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="textarea textarea-bordered w-10/12 inline-block"
                ></textarea>
                <button
                    type="submit"
                    className="btn btn-outline btn-accent ml-4 self-center"
                >
                    Add Journal Entry
                </button>
            </form>
            <h3 className="text-center text-5xl">Entries</h3>
            <div className="grid self-center justify-items-center">
                {render ? (
                    entries.reverse().map((object, index) => {
                        return Object.keys(object).length !== 0 ? (
                            object.showContent === true ? (
                                <div
                                    key={index}
                                    className="m-2 flex flex-col w-[70vw]"
                                >
                                    <button
                                        className="btn text-4xl h-[6vh] w-[50vw] self-center"
                                        onClick={(e) =>
                                            entryClickHandler(e, index)
                                        }
                                    >
                                        {object.month} {object.day},{" "}
                                        {object.year}{" "}
                                        {object.hour === 0 ? 12 : object.hour}:
                                        {object.minute}
                                        {object.PMOrAM}
                                    </button>
                                    <div>
                                        <p className="text-lg">
                                            {object.entry}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <button
                                    className="btn text-4xl h-[6vh] w-[50vw] self-center m-2"
                                    onClick={(e) => entryClickHandler(e, index)}
                                    key={index}
                                >
                                    {object.month} {object.day}, {object.year}{" "}
                                    {object.hour === 0 ? 12 : object.hour}:
                                    {object.minute}
                                    {object.PMOrAM}
                                </button>
                            )
                        ) : (
                            <div key={index}></div>
                        );
                    })
                ) : (
                    <>No entries currently</>
                )}
            </div>
        </div>
    );
};
