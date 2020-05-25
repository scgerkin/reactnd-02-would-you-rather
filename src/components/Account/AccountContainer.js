import React, {Component} from 'react';
import {connect} from "react-redux";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ChangeAvatar from "./ChangeAvatar";
import Button from "react-bootstrap/Button";
import {handleChangeDisplayName} from "../../actions/users";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FigureImage from "react-bootstrap/FigureImage";

const DISPLAY_NAME = "DISPLAY_NAME"

class AccountContainer extends Component {
  state = {
    displayName: ""
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState((currentState) => ({
      displayName: value
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
    const {user} = this.props


    return (
        <Container className={"mt-3 mc-auto"}>
          <Card className={"mx-auto"}>
            <Card.Body>
              <Row>
                <Col className={"col-md-3"}>
                  <FigureImage
                      src={user.avatarURL}
                      width={150}
                      height={150}
                      roundedCircle
                  />
                </Col>
                <Col className={"col-md-9"}>
                  <Row as={"h4"}>
                    Display Name: {user.name}
                  </Row>
                  <Form>
                    <Row>
                      <Col>
                        <Form.Control
                            id={DISPLAY_NAME}
                            type={"text"}
                            placeholder={user.name}
                            onChange={this.handleChange}
                        />

                        <Button
                            onClick={this.onSubmitName}
                            disabled={!validName(this.state.displayName)}
                        >Change</Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
              <Row>

              </Row>


            </Card.Body>


            <ChangeAvatar/>

          </Card>
        </Container>
    );
  }
}

function mapStateToProps({users, authedUser}) {
  return {
    user: !!users[authedUser]
        ? users[authedUser]
        : {
          id: "null",
          name: "null",
          avatarUrl: "null",
          answers: {},
          questions: []
        }
  }
}

function validName(name) {
  return !!name && name.length >= 3
}

export default connect(mapStateToProps)(AccountContainer);
