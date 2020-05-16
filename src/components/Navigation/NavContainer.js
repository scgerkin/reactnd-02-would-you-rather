import React from "react";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from "react-redux";
import FigureImage from "react-bootstrap/FigureImage";
import Button from "react-bootstrap/Button";


class NavContainer extends React.Component {

  onLogout() {
    console.log("logged out");
  }

  render() {
    const {user} = this.props;
    const {name, avatarURL} = user ? user : {name: "", avatarURL: ""};
    return (
        <Navbar bg={"dark"} variant={"dark"} expand={"lg"}>
          <Navbar.Brand>
            Would you rather...?
          </Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse>
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
            <Navbar.Text>{name}&nbsp;</Navbar.Text>
            <FigureImage
                src={avatarURL}
                width={30}
                height={30}
                roundedCircle/>
            <div>&nbsp;&nbsp;</div>
          <Button variant="outline-light" onClick={this.onLogout}>Logout</Button>
          </Navbar.Collapse>
        </Navbar>
    )
  }
}

function mapStateToProps({authedUser, users}) {
  return {
    user: authedUser ? users[authedUser] : null
  }
}


export default connect(mapStateToProps)(NavContainer);
