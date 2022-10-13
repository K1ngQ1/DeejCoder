import React, { useState } from "react";

//css import
import "./App.css";

//Custom component import
import HeaderUnit from "./components/header";
import HomePage from "./Pages/Home";
import Guides from "./Pages/Guides";
import Profile from "./Pages/Profile";
import Coder from "./Pages/Coder";
import CodeView from "./Pages/CodeView";

//Component Import
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    return (
        <Router>
            <div className="App" data-theme={theme}>
                <header className="App-header">
                    <HeaderUnit loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

                    <Switch>
                        <Route path="/" exact>
                            <HomePage
                                loggedIn={loggedIn}
                            />
                        </Route>
                        <Route path="/code/:name" exact>
                            <CodeView />
                        </Route>
                        <Route path="/coder" exact>
                            <Coder loggedIn={loggedIn} />
                        </Route>
                        <Route path="/guides" exact>
                            <Guides />
                        </Route>
                        <Route path="/profile" exact>
                            <Profile loggedIn={loggedIn} />
                        </Route>
                    </Switch>
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
        </Router>
    );
}

export default App;
