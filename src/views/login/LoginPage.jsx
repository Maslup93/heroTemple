import React, { useState, useEffect } from "react";
import Axios from "axios";
import { setToken, getToken } from "../../helpers/auth-helpers";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import './loginPage.css'

const LoginPage = () => {
  const [isLogged, setIsLogged] = useState(!!getToken());
  const history = useHistory();

  useEffect(() => {
    if (isLogged) history.push('/home');
  }, [isLogged])

  const login = async (email, password) => {
    const { data } = await Axios.post("http://challenge-react.alkemy.org/", {
      email,
      password,
    });
    setIsLogged(true);
    setToken(data.token);
  };

  return (
    <div>
      <LoginForm login={login} />
    </div>
  );
};

export default LoginPage;
