import React from "react";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from 'react-router-bootstrap';
import LoginLogout from "../Auth/LoginLogout";


function NavContainer() {
  return (
      <Navbar bg={"dark"} variant={"dark"} expand={"lg"}>
        <Navbar.Brand>
          Would you rather...?
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav className={"mr-auto"}>
            <LinkContainer exact to={"/"}>
              <Nav.Link active={false}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to={"/add"}>
              <Nav.Link active={false}>New Question</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/leaderboard"}>
              <Nav.Link active={false}>Leader Board</Nav.Link>
            </LinkContainer>
          </Nav>
          <LoginLogout/>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default NavContainer;
