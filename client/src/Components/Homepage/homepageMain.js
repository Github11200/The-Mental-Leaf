import React from "react";
import { Link } from "react-router-dom";

export const HomepageMain = () => {
    return (
        <>
            <h2 className="text-4xl text-center">
                A differenent approach to addressing mental health
            </h2>
            <p className="text-2xl">
                While many mental health apps focus on things like de-stressing
                games to help people, we bring in even more, we have Chatbot's
                for when you want to talk with someone, jokes when you're
                feeling a bit low, and so much more. Get Started, completley for
                no cost, ever, and calm yourself today.
            </p>
            <Link to="/overview">
                <button className="btn btn-outline">
                    Get Started{" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                </button>
            </Link>
        </>
    );
};
