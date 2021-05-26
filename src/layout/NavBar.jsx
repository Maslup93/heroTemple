import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import temple from '../layout/temple.png'
import "./navbar.css";

const NavBar = () => {
  return (
    <Navbar className="position">
      <Navbar.Brand href="/home" >
        
        <img
          src={temple}
          alt="temple"
          className="templeImg"
        />
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
