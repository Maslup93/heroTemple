import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import "./loginForm.css";
import temple from "../../layout/temple.png";

const LoginForm = ({ login, loading }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });





  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    login(user.email, user.password);
    console.log(user)
  };

  return (
    <div className="loginContainer">
      <Form className="login" onSubmit={onSubmitHandler}>
        <div className="templeContainer">
          <img className="temple" src={temple} alt="temple" />
        </div>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={user.email}
            required
            onChange={onChangeHandler}
            disabled={loading}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            required
            onChange={onChangeHandler}
            disabled={loading}
          />
        </Form.Group>
        <Button className="loginButton" type="submit" disabled={loading}>
          Enviar
        </Button>
        {loading && <h5 style={{ textAlign: 'center', marginTop: 10}}>Loading...</h5>}
      </Form>
    </div>
  );
};

export default LoginForm;
