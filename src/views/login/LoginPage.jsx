import React, { useState, useEffect } from "react";
import Axios from "axios";
import { setToken, getToken } from "../../helpers/auth-helpers";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import './loginPage.css'

const LoginPage = () => {
  const [isLogged, setIsLogged] = useState(!!getToken());
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (isLogged) history.push('/home');
  }, [isLogged])

  const login = async (email, password) => {
    setLoading(true);
    await Axios.post("http://challenge-react.alkemy.org/", {
      email,
      password,
    }).then(({ data }) => {
      setIsLogged(true);
      setToken(data.token);
    }).catch(e => {
      console.log(e);
      alert('Invalid credentials');
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <div>
      <LoginForm login={login} loading={loading} />
    </div>
  );
};

export default LoginPage;
