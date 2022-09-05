import React, { useState } from "react";

//css import
import "./App.css";

//Custom component import
import HeaderUnit from "./components/header";
import HomePage from "./Pages/Home";
import Guides from "./Pages/Guides";
import Profile from "./Pages/Profile";
import Coder from "./Pages/Coder";

//Component Import
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    const [theme, setTheme] = useState("dark");
    const themes = [
        "light",
        "dark",
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
    return (
        <Router>
            <div className="App" data-theme={theme}>
                <header className="App-header">
                    <HeaderUnit />

                    <Switch>
                        <Route path="/" exact component={HomePage} />
                        <Route path="/coder" exact component={Coder} />
                        <Route path="/guides" exact component={Guides} />
                        <Route path="/profile" exact component={Profile} />
                    </Switch>
                    <select
                        className="select fixed bottom-2 left-2 btn-sm btn-secondary mt-5"
                        onChange={(e) => {
                            setTheme(e.target.value);
                        }}
                    >
                        <option disabled selected>
                            Theme
                        </option>
                        {themes.map((theme) => (
                            <option value={theme}>{theme}</option>
                        ))}
                    </select>
                </header>
            </div>
        </Router>
    );
}

export default App;
