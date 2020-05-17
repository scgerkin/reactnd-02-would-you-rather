import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function QuestionInitial(props) {
  const {displayText, id} = props

  return (
      <Container>
        <Row>
          <h4>Would you rather...</h4>
        </Row>
        <Row as={"p"}>
          {displayText}
        </Row>
        <Row>
          <Button
              onClick={()=> (props.history.push(`/questions/${id}`))}
          >View Poll</Button>
        </Row>
      </Container>
  );
}

export default QuestionInitial;
