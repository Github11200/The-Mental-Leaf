import React from "react";

export const ExternalResourcesWrapper = () => {
    return (
        <div className="prose flex flex-col justify-center min-w-full mt-12">
            <h2 className="text-4xl text-center">
                Other places to look for help
            </h2>
            <p className="text-2xl text-center w-[50vw] self-center">
                Sometimes it can be hard to deal with mental health by yourself,
                and this is why there are many help lines you can call. The
                people you talk to won't judge you, they will only be there to
                help you and guide you through tough times. All of the resources
                below are also free, and open 24/7 so when you need help, you
                will get help.
            </p>
            <div className="self-center text-2xl">
                <a href="https://988lifeline.org/" className="link">
                    988 Suicide & Crisis Lifeline
                </a>
                <br />
                <a href="https://talksuicide.ca/" className="link">
                    Talk Suicide Canada
                </a>
                <br />
                <a href="https://suicide.ca/en" className="link">
                    suicide.ca (if you live in Quebéc)
                </a>
                <br />
                <a
                    href="https://www.wellnesstogether.ca/en-ca"
                    className="link"
                >
                    Wellness Together Canada
                </a>
                <br />
                <a href="https://kidshelpphone.ca/" className="link">
                    Kids Help Phone
                </a>
                <br />
                <a
                    href="https://www.canada.ca/en/public-health/services/mental-health-services.html"
                    className="link"
                >
                    Mental Health Services
                </a>
            </div>
        </div>
    );
};
