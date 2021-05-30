import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,

} from "react-router-dom";
import HomePage from "./views/home/HomePage";
import LoginPage from "./views/login/LoginPage";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route
                    path="/login"
                ><LoginPage/></Route>
                <Route
                    path="/home"
                ><HomePage/></Route>
            </Switch>
        </Router>
    );
};

export default App;
