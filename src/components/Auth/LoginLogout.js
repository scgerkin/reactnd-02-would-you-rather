import React from 'react';
import {connect} from "react-redux";
import {useAuth0} from "../../auth/react-auth0-spa";
import Navbar from "react-bootstrap/Navbar";
import FigureImage from "react-bootstrap/FigureImage";
import Button from "react-bootstrap/Button";

function LoginLogout(props) {
  const {user} = props
  const {name, avatarURL} = user ? user : {name: "", avatarURL: ""};
  const { isAuthenticated, loginWithPopup, logout } = useAuth0();

  if (isAuthenticated && !!user) {
    return (
        <div>
          <Navbar.Text>{name}&nbsp;</Navbar.Text>
          <FigureImage
              src={avatarURL}
              width={30}
              height={30}
              roundedCircle/>
          <div>&nbsp;&nbsp;</div>
          <Button variant="outline-danger" onClick={logout}>Logout</Button>
        </div>
    )
  } else {
    return (
        <div>
          <Button variant="outline-danger" onClick={loginWithPopup}>Login</Button>
        </div>
    )
  }
}

function mapStateToProps({authedUser, users}) {
  return {
    user: authedUser  ? users[authedUser] : null
  }
}

export default connect(mapStateToProps)(LoginLogout);
