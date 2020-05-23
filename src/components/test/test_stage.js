import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import {getUsers} from "../../api/wyr-api";

class TestStage extends Component {
  render() {
    return (
        <Container>
          <Button onClick={()=> getUsers(["sarahedo", "johndoe"])}>Test Clicky</Button>
        </Container>
    );
  }
}

export default TestStage;
