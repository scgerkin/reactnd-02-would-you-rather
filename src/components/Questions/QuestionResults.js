import React, {Component} from 'react';
import {connect} from "react-redux";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FigureImage from "react-bootstrap/FigureImage";

class QuestionResults extends Component {
  render() {
    const {question, author, authorAvatar} = this.props;

    return (
        <Card>
          <Card.Header className={"text-left"}>Asked by {author}</Card.Header>
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
                  <h4>Results:</h4>
                </Row>
                <Row>
                  option 1 results
                </Row>
                <Row>
                  option 2 results
                </Row>
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

export default connect(mapStateToProps)(QuestionResults);
