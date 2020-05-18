import React, {Component} from 'react';
import {connect} from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import FigureImage from "react-bootstrap/FigureImage";

//todo styling
class LeaderboardItem extends Component {

  getPositionColor(position) {
    switch (position) {
      case 0: return "border-warning";
      case 1: return "border-success";
      case 2: return "border-info";
      default: return "border-secondary";
    }
  }

  render() {
    const {user, score, position} = this.props

    return (
        <Card className={`mt-3 ${this.getPositionColor(position)}`}>
          <Card.Body>
            <Row>
              <Col className={"col-md-3"}>
                <FigureImage
                    src={user.avatarURL}
                    width={150}
                    height={150}
                    roundedCircle
                />
              </Col>
              <Col className={"col-md-6"}>
                <Row as={"h4"}>
                  {user.name}
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
              <Col className={"col-md-3"}>
                <Card>
                  <Card.Header>Score</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      {score}
                    </Card.Text>
                  </Card.Body>
                </Card>
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
