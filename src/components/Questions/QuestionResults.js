import React, {Component} from 'react';
import {connect} from "react-redux";
import Row from "react-bootstrap/Row";
import QuestionResultItem from "./QuestionResultItem";

class QuestionResults extends Component {

  render() {

    const {optionOne, optionTwo} = this.props
    const totalVotes = optionOne.votes.length + optionTwo.votes.length

    return (
        <div>
          <Row>
            <h4>Results:</h4>
          </Row>
          <Row>
            <QuestionResultItem
                optionText={optionOne.text}
                numVotes={optionOne.votes.length}
                totalVotes={totalVotes}
              />
          </Row>
          <Row>
            <QuestionResultItem
                optionText={optionTwo.text}
                numVotes={optionTwo.votes.length}
                totalVotes={totalVotes}
            />
          </Row>
        </div>
    );
  }
}



export default connect()(QuestionResults);
