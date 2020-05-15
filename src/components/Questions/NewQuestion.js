import React, {Component} from 'react';
import {connect} from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import {handleAddQuestion} from "../../actions/questions";

const QUESTION_ONE = "QUESTION_ONE";
const QUESTION_TWO = "QUESTION_TWO";

//consider changing column display? not sure about question flow
// should probably select a question -> go to question -> then edit from there
class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: ""
  }

  handleChange = (event) => {
    const value = event.target.value;
    switch (event.target.id) {
      case QUESTION_ONE:
        this.setState((currentState) => ({
          optionOne: value,
          optionTwo: currentState.optionTwo
        }));
        break;
      case QUESTION_TWO:
        this.setState((currentState) => ({
          optionOne: currentState.optionOne,
          optionTwo: value
        }));
        break;
      default:
        break;
    }
  }

  handleSubmit = (event) => {
    const {dispatch} = this.props;
    dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo));
  }

  render() {
    return (
        <Container className={"mc-auto"}>
          <Card style={{width: "30rem"}} className={"mx-auto"}>
            <Card.Header>Create a New Question</Card.Header>
            <Card.Title>Would you rather...</Card.Title>
            <Card.Body>
              <Form>
                <Card.Text as={"div"}>
                  <Form.Control
                      id={QUESTION_ONE}
                      type={"text"}
                      placeholder={"Question one..."}
                      onChange={this.handleChange}
                  />
                </Card.Text>
                <Card.Text as={"div"}>
                  OR
                </Card.Text>
                <Card.Text as={"div"}>

                  <Form.Control
                      id={QUESTION_TWO}
                      type={"text"}
                      placeholder={"Question two..."}
                      onChange={this.handleChange}
                  />
                </Card.Text>
              </Form>
              <Button onClick={this.handleSubmit}>Submit</Button>
            </Card.Body>
          </Card>
        </Container>
    );
  }
}

export default connect()(NewQuestion);
