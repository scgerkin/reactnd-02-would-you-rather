import React, {Component} from 'react';
import {connect} from "react-redux";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ChangeAvatar from "./ChangeAvatar";
import Button from "react-bootstrap/Button";
import {handleChangeDisplayName} from "../../actions/users";

const DISPLAY_NAME = "DISPLAY_NAME"

class AccountContainer extends Component {
  state = {
    displayName: "",
    avatarUrl: ""
  }

  static getDerivedStateFromProps(props, state) {
    const {avatarUrl} = props
    return {
      ...state,
      avatarUrl: avatarUrl
    }
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState((currentState) => ({
      displayName: value,
      avatarUrl: currentState.avatarUrl
    }))
  }

  onSubmitName = () => {
    const {dispatch} = this.props
    if (!validName(this.state.displayName)) {
      return
    }
    dispatch(handleChangeDisplayName(this.state.displayName))
  }

  render() {
    const {currentName} = this.props
    return (
        <Container className={"mc-auto"}>
          <Card className={"mx-auto"}>
            {this.state.avatarUrl}<br/>
            <Form>
              <Form.Control
                  id={DISPLAY_NAME}
                  type={"text"}
                  placeholder={currentName}
                  onChange={this.handleChange}
              />
              <Button
                  onClick={this.onSubmitName}
                  disabled={!validName(this.state.displayName)}
              >Submit</Button>
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
      currentName: users[authedUser].name,
      avatarUrl: users[authedUser].avatarURL
    }
  }
  return {
    currentName: "",
    avatarUrl: ""
  }
}

function validName(name) {
  return !!name && name.length >= 3
}

export default connect(mapStateToProps)(AccountContainer);
