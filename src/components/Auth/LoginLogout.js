import React from 'react';
import {connect} from "react-redux";
import {useAuth0} from "../../auth/react-auth0-spa";
import Navbar from "react-bootstrap/Navbar";
import FigureImage from "react-bootstrap/FigureImage";
import Button from "react-bootstrap/Button";
import {handleLogin} from "../../actions/shared";

function LoginLogout(props) {
  const {reduxUser, dispatch} = props
  const {name, avatarURL} = reduxUser ? reduxUser : {name: "", avatarURL: ""};
  const { user, isAuthenticated, loginWithPopup, logout } = useAuth0();

  if (isAuthenticated && !reduxUser) {
    //fixme user is not retrieved by auth0 if refreshing on non-OAuth user
    // this is a hacky fix
    if (!user) {
      logout()
    }
    dispatch(handleLogin(user.sub.split("|")[1]))
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
