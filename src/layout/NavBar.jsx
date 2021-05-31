import React from "react";
import { Navbar, Nav,Button } from "react-bootstrap";
import temple from '../layout/temple.png'
import "./navbar.css";

const NavBar = ({logout}) => {
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
       
       <Button onClick={logout} className="navButton"> Logout </Button>
      </Nav>
      
    </Navbar>
  );
};

export default NavBar;
