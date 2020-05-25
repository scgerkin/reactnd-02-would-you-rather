import React, {Component} from 'react';
import {connect} from "react-redux";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ChangeAvatar from "./ChangeAvatar";

const DISPLAY_NAME = "DISPLAY_NAME"
const AVATAR_URL = "AVATAR_URL";

class AccountContainer extends Component {
  state = {
    displayName: "",
    avatarUrl: ""
  }

  static getDerivedStateFromProps(props, state) {
    const {displayName, avatarUrl} = props
    return {
      displayName: displayName,
      avatarUrl: avatarUrl
    }
  }

  handleChange = (event) => {
    const value = event.target.value;
    switch (event.target.id) {
      case DISPLAY_NAME:
        this.setState((currentState) => ({
          displayName: value,
          avatarUrl: currentState.avatarUrl
        }))
        break;
      case AVATAR_URL:
        this.setState((currentState) => ({
          displayName: currentState.displayName,
          avatarUrl: value
        }))
        break;
      default: break;
    }
  }

  render() {
    return (
        <Container className={"mc-auto"}>
          <Card className={"mx-auto"}>
            {this.state.avatarUrl}<br/>
            <Form>
              <Form.Control
                  id={DISPLAY_NAME}
                  type={"text"}
                  placeholder={this.state.displayName}
                  onChange={this.handleChange}
              />
              <ChangeAvatar/>
            </Form>
          </Card>
        </Container>
    );
  }
}

function mapStateToProps({users, authedUser}) {
  if (!!users[authedUser]) {
    return {
      displayName: users[authedUser].name,
      avatarUrl: users[authedUser].avatarURL
    }
  }
  return {
    displayName: "",
    avatarUrl: ""
  }
}

export default connect(mapStateToProps)(AccountContainer);
