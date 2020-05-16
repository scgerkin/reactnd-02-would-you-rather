import React from "react";
import {connect} from "react-redux";
import Question from "./Question";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {UNANSWERED, ANSWERED, USER_QUESTIONS} from "../Home/Home";

class QuestionPage extends React.Component {

  render() {
    return (
        <Container style={this.props.style}>
          <Col>
            {this.props.questionIds.map((id) => (
                <Question key={id} id={id}/>
            ))}
          </Col>
        </Container>
    )
  }
}

function mapStateToProps({authedUser, questions}, props) {
  return {
    questionIds: filterQuestionsBySelection(questions, props.selection, authedUser)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

function filterQuestionsBySelection(questions, selection, authedUser) {
  switch (selection) {
    case UNANSWERED:
      return Object.keys(questions).filter((id) =>
          !questions[id].optionOne.votes.includes(authedUser)
          && !questions[id].optionTwo.votes.includes(authedUser)
      )
    case ANSWERED:
      return Object.keys(questions).filter((id) =>
          questions[id].optionOne.votes.includes(authedUser)
        || questions[id].optionTwo.votes.includes(authedUser)
      )
    case USER_QUESTIONS:
      return Object.keys(questions).filter(id => id === authedUser.id);
    default:
      console.warn(`Error in rendering QuestionPage, unknown selection type: '${selection}'`);
      return questions;
  }
}

export default connect(mapStateToProps)(QuestionPage);
