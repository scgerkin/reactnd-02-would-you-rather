import React from "react";
import {connect} from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import QuestionPage from "../Questions/QuestionPage";

export const UNANSWERED = "UNANSWERED"
export const ANSWERED = "ANSWERED"
export const USER_QUESTIONS = "USER_QUESTIONS"

class Home extends React.Component {
  state = {
    selection: UNANSWERED
  }

  render() {
    return (
        <Container>
          <Nav
              className={"justify-content-center"}
              variant={"tabs"}
              defaultActiveKey={this.state.selection}
          >
            <Nav.Item>
              <Nav.Link eventKey={UNANSWERED}>Unanswered</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={ANSWERED}>Answered</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={USER_QUESTIONS}>Your Questions</Nav.Link>
            </Nav.Item>
          </Nav>
          <QuestionPage
              selection={UNANSWERED}
          />
        </Container>
    );
  }
}

export default connect()(Home);
