import React from 'react';
import {connect} from "react-redux";
import Row from "react-bootstrap/Row";
import QuestionResultItem from "./QuestionResultItem";

function QuestionResults(props) {
  const {optionOne, optionTwo, authedUser} = props
  const totalVotes = optionOne.votes.length + optionTwo.votes.length

  return (
      <div>
        <Row>
          <QuestionResultItem
              optionText={optionOne.text}
              numVotes={optionOne.votes.length}
              totalVotes={totalVotes}
              isSelectedOption={optionOne.votes.includes(authedUser)}
          />
        </Row>
        <Row>
          <QuestionResultItem
              optionText={optionTwo.text}
              numVotes={optionTwo.votes.length}
              totalVotes={totalVotes}
              isSelectedOption={optionTwo.votes.includes(authedUser)}
          />
        </Row>
      </div>
  );
}

function mapStateToProps({authedUser}) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(QuestionResults);
