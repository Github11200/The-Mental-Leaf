import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomepageWrapper } from "./Components/Homepage/homepageWrapper";
import { JournalWrapper } from "./Components/Journal/journalWrapper";
import { ChatbotWrapper } from "./Components/ChatBot/chatbotWrapper";
import { JokesWrapper } from "./Components/Jokes/jokesWrapper";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomepageWrapper />} />
            </Routes>
            <Routes>
                <Route path="/journal" element={<JournalWrapper />} />
                <Route path="/chatbot" element={<ChatbotWrapper />} />
                <Route path="/jokes" element={<JokesWrapper />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
