import React, { useState } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  setToken,
  deleteToken,
  getToken,
  initAxiosInterceptors,
} from "./helpers/auth-helpers";

import LoginForm from "./views/login/LoginForm";
import HomePage from "./views/home/HomePage";

initAxiosInterceptors();

const App = () => {
  const [isLogged, setIsLogged] = useState(null);

  const login = async (email, password) => {
    const { data: isLogged } = await Axios.post(
      "http://challenge-react.alkemy.org/",
      {
        email,
        password,
      }
    );
    console.log(isLogged);
    setIsLogged(isLogged.token);
    setToken(isLogged.token);
  };

  const logout = () => {
    setIsLogged(null);
    deleteToken();
  };

  return (
    <Router>
      {isLogged ? <LoginRoutes /> : <LogoutRoutes login={login} />}
    </Router>
  );
};

export default App;

const LogoutRoutes = ({ login }) => {
  return (
    <Switch>
      <Route
        path="/login"
        render={(props) => <LoginForm {...props} login={login} />}
      />
    </Switch>
  );
};

const LoginRoutes = () => {
  return (
    <Switch>
      <Route path="/home" component={HomePage} />
    </Switch>
  );
};
