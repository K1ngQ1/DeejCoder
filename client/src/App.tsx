import React from "react";

//css import
import "./App.css";

//Custom component import
import HeaderUnit from "./components/header";
import HomePage from "./Pages/Home";
import Guides from "./Pages/Guides"
import Profile from "./Pages/Profile"
import Coder from "./Pages/Coder"

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
                        <Route path='/coder' exact component={Coder}/>
                        <Route path='/guides' exact component={Guides}/>
                        <Route path='/profile' exact component={Profile}/>
                    </Switch>
                </header>
            </div>
        </Router>
    );
}

export default App;
