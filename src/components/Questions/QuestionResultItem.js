import React from 'react';
import ProgressBar from "react-bootstrap/ProgressBar";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

function QuestionResultItem(props) {
  const {optionText, numVotes, totalVotes, isSelectedOption} = props
  const percentage = (numVotes / totalVotes * 100).toFixed(0)

  const border = isSelectedOption ? "success" : "secondary"

  return (
      <Container>
        <Card border={border}>
            {isSelectedOption && (
                <Badge variant={"success"}>Your vote!</Badge>
            )}
            <Card.Body>
            {optionText}
            <ProgressBar now={percentage} label={`${percentage}%`}/>
            {numVotes} out of {totalVotes} votes
            </Card.Body>
        </Card>
      </Container>
  );
}

export default QuestionResultItem;
