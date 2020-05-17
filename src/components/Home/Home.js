import React from "react";
import {connect} from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import QuestionList from "../Questions/QuestionList";

export const UNANSWERED = "UNANSWERED"
export const ANSWERED = "ANSWERED"
export const USER_QUESTIONS = "USER_QUESTIONS"

// TODO Fix nav overshooting to the left of the question list container
// consider switching to Tabs
//  https://react-bootstrap.github.io/components/tabs/#tabs-custom-layout
//  This would be a somewhat considerable refactor allowing each tab
//  to receive a question page with filtered items
//  <Tab ...><QuestionList questions={filteredQuestionIds}></Tab>
//  To fix the alignment, will need to use a custom tab layout with
//  a Nav element as currently implemented and then
//  <Tab.Content><QuestionPage..></Tab.Content>
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
          <QuestionList
              selection={this.state.selection}
          />
        </Container>
    );
  }
}

export default connect()(Home);
