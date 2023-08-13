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

        setEntries((oldArray) => [
            ...oldArray,
            {
                year: date.getFullYear(),
                day: date.getDate(),
                month: month[date.getMonth()],
                hour: date.getHours() % 12,
                PMOrAM: date.getHours >= 12 ? "PM" : "AM",
                minute: date.getMinutes(),
                entry: value,
            },
        ]);

        if (render === false) {
            setRender(true);
        }

        setValue("");
    };

    return (
        <div>
            <form onSubmit={(e) => submitHandler(e)}>
                <p>
                    Type your thoughts out into your own personal journal entry
                </p>
                <label htmlFor="journalEntry"></label>
                <textarea
                    id="journalEntry"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                ></textarea>
                <button type="submit">Add Journal Entry</button>
            </form>
            <h1>Entries</h1>
            <div>
                {render ? (
                    entries.map((object, index) => {
                        return Object.keys(object).length !== 0 ? (
                            <div key={index}>
                                <button>
                                    <h3>
                                        {object.month} {object.day},{" "}
                                        {object.year}{" "}
                                        {object.hour === 0 ? 12 : object.hour}:
                                        {object.minute}
                                        {object.PMOrAM}
                                    </h3>
                                </button>
                                <div>
                                    <p>{object.entry}</p>
                                </div>
                            </div>
                        ) : (
                            <div key={index}></div>
                        );
                    })
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};
