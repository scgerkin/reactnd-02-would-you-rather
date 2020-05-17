import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Vote from "./Vote";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FigureImage from "react-bootstrap/FigureImage";

// TODO get user.name from state instead of question.author
// TODO Get question ID from path params
class Question extends Component {
  render() {
    const {creator, question} = this.props;


    //fixme this is a temp hack,
    // might be resolved when loading reducer implemented?
    // still need to handle invalid ID though
    if (!!question) {
      return (
          <Container>
            <Card>
              <Card.Header className={"text-left"}>{creator.name} asks:</Card.Header>
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
                    <Vote
                        qid={question.id}
                        optionOne={question.optionOne.text}
                        optionTwo={question.optionTwo.text}
                    />
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

function mapStateToProps({users, authedUser, questions}, {id}) {
  //todo get id from params
  //const {id} = props.match.params;
  //todo handle invalid id
  const question = questions[id];

  return {
    authedUser,   // nts may not need this here
    creator: question ? users[question.author]: null,
    question: question ? question : null
  }
}

export default withRouter(connect(mapStateToProps)(Question));
