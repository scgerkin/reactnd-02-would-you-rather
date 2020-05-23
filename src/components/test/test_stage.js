import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import {postNewQuestion} from "../../api/wyr-api";

class TestStage extends Component {
  render() {
    return (
        <Container>
          <Button onClick={()=> postNewQuestion({
            optionOneText:"one1111",
            optionTwoText:"two2222",
            author:"fakeUser"})}>Test Clicky</Button>
        </Container>
    );
  }
}

export default TestStage;
