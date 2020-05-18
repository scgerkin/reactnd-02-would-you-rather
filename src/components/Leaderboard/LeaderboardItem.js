import React, {Component} from 'react';
import {connect} from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import FigureImage from "react-bootstrap/FigureImage";

//todo styling
class LeaderboardItem extends Component {
  render() {
    const {user, score, position} = this.props

    return (
        <Card>
          <Card.Header>
            Position: {position + 1}
          </Card.Header>
          <Card.Body>
            <Row>
              <Col>
                <FigureImage
                    src={user.avatarURL}
                    width={150}
                    height={150}
                    roundedCircle
                />
              </Col>
              <Col>
                <Row>
                  {user.name}
                </Row>
                <Row className={"text-primary"}>
                  <Col className={"col-9 text-left"}>
                    Total Points
                  </Col>
                  <Col className={"col-3"}>
                    {score}
                  </Col>
                </Row>
                <Row>
                  <Col className={"col-9 text-left"}>
                    Answered Questions
                  </Col>
                  <Col className={"col-3"}>
                    {Object.keys(user.answers).length}
                  </Col>
                </Row>
                <Row>
                  <Col className={"col-9 text-left"}>
                    Created Questions
                  </Col>
                  <Col className={"col-3"}>
                    {user.questions.length}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>

        </Card>
    );
  }
}

function mapStateToProps({users}, {id}) {
  const user = users[id]
  let score = 0
  if (!!user) {
    score = Object.keys(user.answers).length + user.questions.length
  }

  return {
    user,
    score
  }

}

export default connect(mapStateToProps)(LeaderboardItem);
