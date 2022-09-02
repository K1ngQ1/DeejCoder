import React from "react";

//css import
import "./App.css";

//Custom component import
import HeaderUnit from "./components/header";
import HomePage from "./Pages/Home";

//Component Import
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App" data-theme="dark">
                <header className="App-header">
                    <HeaderUnit />

                    <Switch>
                        <Route path='/' exact component={HomePage}/>
                    </Switch>
                </header>
            </div>
        </Router>
    );
}

export default App;
