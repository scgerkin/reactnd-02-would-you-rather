import React from 'react';
import {connect} from "react-redux";
import {useAuth0} from "../../auth/react-auth0-spa";
import Navbar from "react-bootstrap/Navbar";
import FigureImage from "react-bootstrap/FigureImage";
import Button from "react-bootstrap/Button";
import {setAuthedUser} from "../../actions/authedUser";

function LoginLogout(props) {
  const {reduxUser, dispatch} = props
  const {name, avatarURL} = reduxUser ? reduxUser : {name: "", avatarURL: ""};
  const { user, isAuthenticated, loginWithPopup, logout } = useAuth0();

  //todo this is SUPER hacky but it seems to work
  if (isAuthenticated && !reduxUser) {
    console.log("is authenticated but not user")
    console.log(user)
    dispatch(setAuthedUser(user.sub.split("|")[1]))
  }

  if (isAuthenticated && !!reduxUser) {
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
    reduxUser: authedUser  ? users[authedUser] : null
  }
}

export default connect(mapStateToProps)(LoginLogout);
