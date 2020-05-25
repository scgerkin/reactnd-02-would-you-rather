import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Vote from "./QuestionVote";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FigureImage from "react-bootstrap/FigureImage";
import QuestionResults from "./QuestionResults";
import QuestionInitial from "./QuestionPreview";

class Question extends Component {

  formatQuestionPreview(question) {
    return "..."
      + ((question.length > 20)
        ? question.substring(0, 20)
        : question)
      + "..."
  }

  render() {
    const {hasVoted, id, isListView, question, isOwner} = this.props;
    let {creator} = this.props
    if (!creator) {
      creator = "null"
    }

    if (!!question) {
      const questionPreview = this.formatQuestionPreview(question.optionOne.text)
      const header = hasVoted ? `Asked by ${creator.name}` : `${creator.name} asks:`
      return (
          <Container>
            <Card>
              <Card.Header className={"text-left"}>{header}</Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <FigureImage
                        src={creator.avatarURL}
                        width={150}
                        height={150}
                        roundedCircle
                    />
                  </Col>
                  <Col>
                    {isListView && (
                        <QuestionInitial displayText={questionPreview} id={id} isOwner={isOwner}/>
                    )}
                    {!isListView && hasVoted && (
                        <QuestionResults
                            optionOne={question.optionOne}
                            optionTwo={question.optionTwo}
                        />
                    )}
                    {!isListView && !hasVoted && (
                        <Vote
                            qid={question.id}
                            optionOne={question.optionOne.text}
                            optionTwo={question.optionTwo.text}
                        />
                    )}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Container>
      );
    }
    return this.questionNotFound()
  }


  // todo 404 for no question found could use some improvement
  questionNotFound() {
    return (
        <Container>
          <h4>Sorry, that question could not be found!</h4>
        </Container>
    )
  }
}

function mapStateToProps({users, authedUser, questions}, props) {
  // get id from path params if present, otherwise use props
  // this is set up this way because the list gives this component the id to use
  // but once an individual question is displayed, the id is not received via
  // the props, but the path params
  // a little hacky, but it works
  let {id} = props.match.params
  let isListView = false
  if (!id) {
    id = props.id
    isListView = true
  }

  //todo handle invalid id
  const question = questions[id];

  let hasVoted = false
  let isOwner = false
  if (!!question) {
    hasVoted =
        question.optionOne.votes.includes(authedUser)
        || question.optionTwo.votes.includes(authedUser)

    isOwner = question.author === authedUser
  }

  let creator
  if (!users) {
    creator = "NULL"
  } else {
    creator = users[question.author]
  }

  return {
    hasVoted,
    isOwner,
    id,
    isListView,
    creator: creator,
    question: question ? question : null
  }
}

export default withRouter(connect(mapStateToProps)(Question));
