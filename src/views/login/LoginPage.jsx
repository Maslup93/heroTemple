import React, { useState } from "react";
import Axios from "axios";
import { setToken, deleteToken, getToken } from "../../helpers/auth-helpers";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import HomePage from "../home/HomePage";
import './loginPage.css'

const LoginPage = () => {
  const [isLogged, setIsLogged] = useState(false);
  const history = useHistory();

  const login = async (email, password) => {
    const { data } = await Axios.post("http://challenge-react.alkemy.org/", {
      email,
      password,
    });
    setIsLogged(true);
    setIsLogged(data.token);
    console.log(isLogged);

    setToken(data.token);
    history.push("/home");
  };

  const logout = () => {
    setIsLogged(false);
    deleteToken();
    history.push("/login");
  };

  return (
    <div lassName="formContainer">
      {isLogged ? <HomePage logout={logout} /> : <LoginForm login={login} />}
    </div>
  );
};

export default LoginPage;
