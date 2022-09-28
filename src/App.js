import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {HomePage} from "./pages/home-page/home-page";
import {Header} from "./components/header/header";

function App() {
    return(
    <Router>
        <div className="App">
            <Header/>
            <Switch>
                <Route path="/">
                    <HomePage/>
                </Route>
            </Switch>
        </div>
    </Router>
    );
}

export default App
