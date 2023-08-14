import React from "react";
import { HomepageHeader } from "./homepageHeader";
import { HomepageMain } from "./homepageMain";
import logo from "../../logo.png";
import theme from "../../App.js";

export const HomepageWrapper = () => {
    return (
        <div className="prose flex min-w-[50vw] h-screen m-auto">
            <div className="self-center" data-theme={theme}>
                <div className="text-center self-center" data-theme={theme}>
                    <img
                        src={logo}
                        alt="The mental leaf logo, which is an outline of a human head with two leaves in the middle and has a green to blue gradient"
                        className="m-auto"
                    />
                    <HomepageHeader />
                    <HomepageMain />
                </div>
            </div>
        </div>
    );
};
