import React, { useState } from "react";

//css import
import "./App.css";

//Component Import
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//Custom component import
import HeaderUnit from "./components/header";
import HomePage from "./Pages/Home";
import Guides from "./Pages/Guides";
import Profile from "./Pages/Profile";
import LoginPage from "./Pages/Login";
import Coder from "./Pages/Coder";
import CodeView from "./Pages/CodeView";

function App() {
    const [theme, setTheme] = useState("dark");
    const themes = [
        "dark",
        "light",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
    ];

    const { user } = useAuthContext()
    const guideBlock = false

    return (
        <BrowserRouter>
            <div className="App" data-theme={theme}>
                <header className="App-header">
                    <HeaderUnit />
                    {/* routes for navigation with security to not allow non logged in users to access data */}
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/code/:id" element={user? <CodeView /> : <Navigate to="/login" />} />
                        <Route path="/coder" element={<Coder />} />
                        <Route path="/guides" element={guideBlock? <Guides /> : <Navigate to='/'/>}/>
                        <Route path="/profile" element={user? <Profile /> : <Navigate to="/login" />} />
                        <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/profile"/>} />
                    </Routes>
                    {/* way to change the theme of the overall website */}
                    <select
                        className="select fixed bottom-2 left-2 btn-sm btn-secondary mt-5"
                        onChange={(e) => {
                            setTheme(e.target.value);
                        }}
                    >
                        <option value="dark" key={`theme`}>
                            Theme
                        </option>
                        {themes.map((theme) => (
                            <option value={theme} key={theme}>
                                {theme}
                            </option>
                        ))}
                    </select>
                </header>
            </div>
        </BrowserRouter>
    );
}

export default App;
