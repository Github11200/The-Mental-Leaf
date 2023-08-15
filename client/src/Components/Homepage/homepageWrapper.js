import React, { useContext } from "react";
import { HomepageHeader } from "./homepageHeader";
import { HomepageMain } from "./homepageMain";
import logo from "../../Logo.png";
import { themeContext } from "../../App.js";

export const HomepageWrapper = () => {
    const [theme, setTheme] = useContext(themeContext);

    return (
        <div className="prose flex min-w-[50vw] h-screen m-auto">
            <div className="self-center" data-theme={theme}>
                <div className="text-center self-center" data-theme={theme}>
                    <img
                        src={logo}
                        alt="The mental leaf logo, which is an outline of a human head with two leaves in the middle and has a green to blue gradient"
                        className="m-auto w-[10vw]"
                    />
                    <HomepageHeader />
                    <HomepageMain />
                </div>
            </div>
        </div>
    );
};
