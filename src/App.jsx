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
          to="/login"
          render={(props) => <LoginPage {...props} login={props.login} />}
        />
        <Route
          to="/home"
          render={(props) => <HomePage {...props} logout={props.logout} />}
        />
        
      </Switch>
    </Router>
  );
};

export default App;
