import React from 'react';
import {connect} from "react-redux";
import {useAuth0} from "../../auth/react-auth0-spa";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from 'react-router-bootstrap';
import FigureImage from "react-bootstrap/FigureImage";
import Button from "react-bootstrap/Button";
import {handleLogin} from "../../actions/shared";
import Row from "react-bootstrap/Row";

function LoginLogout(props) {
  const {reduxUser, dispatch} = props
  const {name, avatarURL} = reduxUser ? reduxUser : {name: "", avatarURL: ""};
  const {user, isAuthenticated, loginWithPopup, logout, getTokenSilently} = useAuth0();

  if (isAuthenticated && !reduxUser) {
    //fixme user is not retrieved by auth0 if refreshing on non-OAuth user
    // this is a hacky fix
    if (!user) {
      logout()
    } else {
      Promise.resolve(getTokenSilently()).then((token) => {
        console.log(token)
        dispatch(handleLogin(user.sub.split("|")[1], token))
      })
    }

  }

  if (isAuthenticated && !!reduxUser) {
    return (
        <Navbar bg={"dark"} variant={"dark"}>
          <Nav>
            <LinkContainer to={"/account"}>
              <Nav.Link
                  active={false}
              >{name}</Nav.Link>
            </LinkContainer>
            <FigureImage
                src={avatarURL}
                width={30}
                height={30}
                roundedCircle/>
            <div>&nbsp;&nbsp;</div>
            <Button variant="outline-light" onClick={logout}>Logout</Button>
          </Nav>
        </Navbar>
    )
  } else {
    return (
        <Row>
          <Button variant="outline-light" onClick={loginWithPopup}>Login</Button>
        </Row>
    )
  }
}

function mapStateToProps({authedUser, users}) {
  return {
    reduxUser: authedUser ? users[authedUser] : null
  }
}

export default connect(mapStateToProps)(LoginLogout);
