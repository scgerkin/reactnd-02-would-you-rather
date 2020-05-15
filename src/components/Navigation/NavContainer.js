import React from "react";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from 'react-router-bootstrap';

export class NavContainer extends React.Component {
  render() {
    return (
        <Navbar bg={"dark"} variant={"dark"}>
          <Navbar.Brand>Would You Rather?</Navbar.Brand>
          <Nav className={"mr-auto"}>
            <LinkContainer to={"/"}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/questions"}>
              <Nav.Link>Questions</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/leaderboard"}>
              <Nav.Link>Leaderboard</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className={"ml-auto"}>
            <Nav.Link>Logout</Nav.Link>
          </Nav>
        </Navbar>
    )
  }
}
