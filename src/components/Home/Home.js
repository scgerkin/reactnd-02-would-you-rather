import React from "react";
import {connect} from "react-redux";
import Container from "react-bootstrap/Container";
import QuestionList from "../Questions/QuestionList";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export const UNANSWERED = "UNANSWERED"
export const ANSWERED = "ANSWERED"
export const USER_QUESTIONS = "USER_QUESTIONS"

class Home extends React.Component {
  state = {
    selection: UNANSWERED
  }

  render() {
    return (
        <Container className={"mc-auto"}>
          <Tabs
              id={"question-tabs"}
              activeKey={this.state.selection}
              onSelect={(selection) => this.setState(() => ({selection}))}
          >
            <Tab
                eventKey={UNANSWERED}
                title={"Unanswered"}
            />
            <Tab
                eventKey={ANSWERED}
                title={"Answered"}
            />
            <Tab
                eventKey={USER_QUESTIONS}
                title={"Your Questions"}
            />
          </Tabs>
          <QuestionList
              selection={this.state.selection}
          />
        </Container>
    );
  }
}

export default connect()(Home);
