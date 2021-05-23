import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";

const NavBar = () => {
  return (
    <Navbar className="position">
      <Navbar.Brand href="/home">
        Hero
        <img
          alt="temple"
          src="https://image.flaticon.com/icons/png/512/89/89020.png"
          width="40"
          height="40"
        />{" "}
        Temple
      </Navbar.Brand>

      <Nav className="links">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/search">Search</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
