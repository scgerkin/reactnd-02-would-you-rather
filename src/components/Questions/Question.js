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
import QuestionInitial from "./QuestionInitial";

// TODO get user.name from state instead of question.author
// TODO Get question ID from path params
class Question extends Component {
  render() {
    const {hasVoted, id, isListView, creator, question} = this.props;

    //fixme this is a temp hack,
    // might be resolved when loading reducer implemented?
    // still need to handle invalid ID though
    if (!!question) {
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
                        <QuestionInitial displayText={"asdofijasodfi"} id={id}/>
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
    return (<div/>)
  }
}

function mapStateToProps({users, authedUser, questions}, props) {
  //fixme this is a little hacky but needed based on the way this component is
  // constructed... It either has to be inside a list where there won't be any
  // path params so it needs to get the id from the props.id BUT if it's alone
  // and not in a list, it needs to get the id from the path params.
  // The resolution may be to extract QuestionInitial out and use that for the
  // list, then that will create the Question component... not sure on this.
  let {id} = props.match.params
  let isListView = false
  if (!id) {
    id = props.id
    isListView = true
  }

  //todo handle invalid id
  const question = questions[id];

  let hasVoted = false;
  if (!!question) {
    hasVoted =
        question.optionOne.votes.includes(authedUser)
        || question.optionTwo.votes.includes(authedUser)
  }

  return {
    hasVoted,
    id,
    isListView,
    creator: question ? users[question.author]: null,
    question: question ? question : null
  }
}

export default withRouter(connect(mapStateToProps)(Question));
