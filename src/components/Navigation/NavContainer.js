import React from "react";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";

//fixme This actually navigates away from the page and causes a reload which
// is not the behavior we want. This needs to be investigated further with
// Bootstrap. It looks nice, though.
export class NavContainer extends React.Component {
  render() {
    return (
        <Navbar bg={"dark"} variant={"dark"}>
          <Navbar.Brand>Would You Rather?</Navbar.Brand>
          <Nav className={"mr-auto"}>
            <Nav.Link href={"/"}>Home</Nav.Link>
            <Nav.Link href={"/questions"}>Questions</Nav.Link>
            <Nav.Link href={"/leaderboard"}>Leaderboard</Nav.Link>
          </Nav>
          <Nav className={"ml-auto"}>
            <Nav.Link>Logout</Nav.Link>
          </Nav>
        </Navbar>
    )
  }
}
