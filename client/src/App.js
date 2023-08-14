import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomepageWrapper } from "./Components/Homepage/homepageWrapper";
import { DashboardWrapper } from "./Components/Overview/dashboardWrapper";
export let theme = "retro";

function App() {
    return (
        <div data-theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomepageWrapper />} />
                    <Route path="/overview" element={<DashboardWrapper />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
