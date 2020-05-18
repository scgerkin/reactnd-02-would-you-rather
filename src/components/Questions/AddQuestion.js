import React, {Component} from 'react';
import {connect} from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import {handleAddQuestion} from "../../actions/questions";

const OPTION_ONE = "OPTION_ONE";
const OPTION_TWO = "OPTION_TWO";

// TODO validation
class AddQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
    toHome: false
  }

  handleChange = (event) => {
    const value = event.target.value;
    switch (event.target.id) {
      case OPTION_ONE:
        this.setState((currentState) => ({
          optionOne: value,
          optionTwo: currentState.optionTwo
        }));
        break;
      case OPTION_TWO:
        this.setState((currentState) => ({
          optionOne: currentState.optionOne,
          optionTwo: value
        }));
        break;
      default:
        break;
    }
  }

  handleSubmit = () => {
    const {dispatch} = this.props;
    if (!this.validEntry) {

      return
    }
    dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo));
    this.props.history.push("/")
  }

  validEntry = () => {
    const minLength = 5
    return this.state.optionOne.length > minLength
      && this.state.optionTwo.length > minLength
  }

  render() {
    return (
        <Container className={"mc-auto"}>
          <Card className={"mx-auto"}>
            <Card.Header>Create a New Question</Card.Header>
            <Card.Title>Would you rather...</Card.Title>
            <Card.Body>
              <Form>
                <Card.Text as={"div"}>
                  <Form.Control
                      id={OPTION_ONE}
                      type={"text"}
                      placeholder={"Option one..."}
                      onChange={this.handleChange}
                  />
                </Card.Text>
                <Card.Text as={"div"}>
                  <hr/>
                </Card.Text>
                <Card.Text as={"div"}>

                  <Form.Control
                      id={OPTION_TWO}
                      type={"text"}
                      placeholder={"Option two..."}
                      onChange={this.handleChange}
                  />
                </Card.Text>
              </Form>
              {/*todo add text indication of invalid entry*/}
              <Button
                  disabled={!this.validEntry()}
                  onClick={this.handleSubmit}>Submit</Button>
            </Card.Body>
          </Card>
        </Container>
    );
  }
}

export default connect()(AddQuestion);
