import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import {getRecentQuestions, putQuestionVote} from "../../api/wyr-api";

class TestStage extends Component {
  render() {
    return (
        <Container>
          <Button onClick={()=> putQuestionVote({
            authedUser:"fakeUser",
            qid:"8xf0y6ziyjabvozdd253nd",
            answer:"optionOne"})}>Clicky</Button>
        </Container>
    );
  }
}

export default TestStage;
