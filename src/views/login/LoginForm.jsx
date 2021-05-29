import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./loginForm.css";
import temple from "../../layout/temple.png";

const LoginForm = ({ login }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      login(user.email, user.password);
      console.log(user)
    } catch (error) {
      console.log(error);
    }
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
          />
        </Form.Group>

        <Button className="button" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
