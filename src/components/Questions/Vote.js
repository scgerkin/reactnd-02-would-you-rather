import React, {Component} from 'react';
import {connect} from "react-redux";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {handleVote} from "../../actions/questions";
import FigureImage from "react-bootstrap/FigureImage";

const OPTION_ONE = "optionOne"
const OPTION_TWO = "optionTwo"

class Vote extends Component {
  state = {
    option: ""
  }

  onCastVote() {
    const {dispatch, authedUser, id} = this.props;
    const {option} = this.state;

    dispatch(handleVote(authedUser, id, option));
  }

  render() {
    const {question, author, authorAvatar} = this.props;
    const {selection} = this.state;

    return (
        <Card>
          <Card.Header className={"text-left"}>{author} asks:</Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <FigureImage
                    src={authorAvatar}
                    width={150}
                    height={150}
                    roundedCircle
                />
              </Col>
              <Col>
                <Row>
                  <h4>Would you rather?</h4>
                </Row>
                <Form>
                  <Form.Group>
                    <Form.Label as={"legend"}/>
                    <Row>
                      <Form.Check
                          type={"radio"}
                          id={question.optionOne}
                          name={question.optionOne}
                          label={question.optionOne}
                          onChange={() => this.setState(() => ({option: OPTION_ONE}))}
                      />
                    </Row>
                    <Row>
                      <Form.Check
                          type={"radio"}
                          id={question.optionTwo}
                          name={question.optionOne}
                          label={question.optionTwo}
                          selected={selection === question.optionTwo}
                          onChange={() => this.setState(() => ({option: OPTION_TWO}))}
                      />
                    </Row>
                  </Form.Group>
                  <Row>
                    <Button
                        onClick={() => this.onCastVote()}
                    >
                      Cast your Vote!
                    </Button>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
    );
  }
}

//fixme code duplication
// I also think it should probably return an empty object if not found?
// tbh I really don't remember what this stupid fucking magic incantation does
function mapStateToProps({authedUser, questions}, {id}) {
  const question = questions[id];

  return {
    authedUser,
    qid: id,
    question: question
        ? {
          qid: question.id,
          author: question.author,
          timestamp: question.timestamp,
          optionOne: question.optionOne.text,
          oneVotes: question.optionOne.votes.length,
          optionTwo: question.optionTwo.text,
          twoVotes: question.optionTwo.votes.length
        }
        : "NO QUESTION"
  }
}

export default connect(mapStateToProps)(Vote);
