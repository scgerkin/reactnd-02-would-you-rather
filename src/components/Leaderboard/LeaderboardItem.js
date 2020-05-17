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
              <Row as={"h4"}>
                {user.name}
              </Row>
              <Row>
                <Col>
                  Answered Questions
                </Col>
                <Col>
                  {Object.keys(user.answers).length}
                </Col>
              </Row>
              <Row>
                <Col>
                  Created Questions
                </Col>
                <Col>
                  {user.questions.length}
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                Position: {position + 1}
              </Row>
              <Row>
                Score: {score}
              </Row>
            </Col>
          </Row>
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
