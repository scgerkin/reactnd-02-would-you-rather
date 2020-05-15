import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

class NewQuestion extends Component {
  render() {
    return (
        <Container className={"mc-auto"}>
          <Card style={{width: "30rem"}} className={"mx-auto"}>
            <Card.Header>Create a New Question</Card.Header>
            <Card.Title>Would you rather...</Card.Title>
            <Card.Body>
              <Form>
                <Card.Text as={"div"}>
                  <Form.Group controlId={"questionOne"}>
                    <Form.Control type={"text"} placeholder={"Question one..."}/>
                  </Form.Group>
                </Card.Text>
                <Card.Text as={"div"}>
                  OR
                </Card.Text>
                <Card.Text as={"div"}>
                  <Form.Group controlId={"questionTwo"}>
                    <Form.Control type={"text"} placeholder={"Question two..."}/>
                  </Form.Group>
                </Card.Text>
              </Form>
              <Button>Submit</Button>
            </Card.Body>
          </Card>
        </Container>
    );
  }
}

export default NewQuestion;
