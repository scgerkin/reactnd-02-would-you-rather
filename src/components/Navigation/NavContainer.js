import React from "react";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from 'react-router-bootstrap';

class NavContainer extends React.Component {
  render() {
    return (
        <Navbar bg={"dark"} variant={"dark"}>
          <Navbar.Brand>Would You Rather...?</Navbar.Brand>
          <Nav className={"mr-auto"}>
            <LinkContainer exact to={"/"}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to={"/questions"}>
              <Nav.Link>Questions</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to={"/add"}>
              <Nav.Link>New Question</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/leaderboard"}>
              <Nav.Link>Leader Board</Nav.Link>
            </LinkContainer>
          </Nav>
          {/*Fixme: when clicked, the previous nav item is still highlighted*/}
          <Nav className={"ml-auto"}>
            <LinkContainer to={"/auth"}>
              <Nav.Link>Logout</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar>
    )
  }
}

export default NavContainer;
