import React from 'react';
import Row from "react-bootstrap/Row";
import QuestionResultItem from "./QuestionResultItem";

function QuestionResults(props) {

  const {optionOne, optionTwo} = props
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


export default QuestionResults;
