import React from 'react';
import ProgressBar from "react-bootstrap/ProgressBar";
import Container from "react-bootstrap/Container";

function QuestionResultItem(props) {
  const {optionText, numVotes, totalVotes} = props
  const percentage = (numVotes/totalVotes * 100).toFixed(0)

  return (
      <Container>
        {optionText}
        <ProgressBar now={percentage} label={`${percentage}%`}/>
        {numVotes} out of {totalVotes} votes
      </Container>
  );
}

export default QuestionResultItem;
