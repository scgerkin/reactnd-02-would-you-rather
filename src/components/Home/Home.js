import React from "react";
import {connect} from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import QuestionPage from "../Questions/QuestionList";

export const UNANSWERED = "UNANSWERED"
export const ANSWERED = "ANSWERED"
export const USER_QUESTIONS = "USER_QUESTIONS"

class Home extends React.Component {
  state = {
    selection: UNANSWERED
  }

  handleToggleSelection(selection) {
    this.setState(()=> ({selection}));
  }

  render() {
    return (
        <Container className={"mc-auto"}>
          <Nav
              className={"justify-content-center"}

              variant={"tabs"}
              defaultActiveKey={this.state.selection}
          >
            <Nav.Item>
              <Nav.Link
                  eventKey={UNANSWERED}
                  onClick={() => this.handleToggleSelection(UNANSWERED)}
              >Unanswered</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                  eventKey={ANSWERED}
                  onClick={() => this.handleToggleSelection(ANSWERED)}
              >Answered</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                  eventKey={USER_QUESTIONS}
                  onClick={() => this.handleToggleSelection(USER_QUESTIONS)}
              >Your Questions</Nav.Link>
            </Nav.Item>
          </Nav>
          <QuestionPage
              selection={this.state.selection}
          />
        </Container>
    );
  }
}

export default connect()(Home);
