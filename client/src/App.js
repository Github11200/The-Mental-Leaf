import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomepageWrapper } from "./Components/Homepage/homepageWrapper";
import { DashboardWrapper } from "./Components/Dashboard/dashboardWrapper";
import React, { useState } from "react";

export const themeContext = React.createContext();

function App() {
    const [theme, setTheme] = useState("retro");

    return (
        <themeContext.Provider value={[theme, setTheme]}>
            <div data-theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomepageWrapper />} />
                        <Route
                            path="/overview"
                            element={<DashboardWrapper />}
                        />
                    </Routes>
                </BrowserRouter>
            </div>
        </themeContext.Provider>
    );
}

export default App;
