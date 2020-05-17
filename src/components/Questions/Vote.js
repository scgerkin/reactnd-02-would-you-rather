import React, {Component} from 'react';
import {connect} from "react-redux";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {handleVote} from "../../actions/questions";

const OPTION_ONE = "optionOne"
const OPTION_TWO = "optionTwo"

// TODO Style question area a little better, maybe options should be smaller?
// TODO On vote, navigate? This might be handled with state change though
//  once results card is implemented
class Vote extends Component {
  state = {
    option: ""
  }

  onCastVote() {
    const {dispatch, authedUser, qid} = this.props;
    const {option} = this.state;

    if (!option || option === "") {
      return;
    }

    dispatch(handleVote(authedUser, qid, option));
  }

  render() {
    const {optionOne, optionTwo} = this.props;

    return (
        <div>
          <Row>
            <h4>Would you rather?</h4>
          </Row>
          <Form>
            <Form.Group>
              <Form.Label as={"legend"}/>
              <Row>
                <Form.Check
                    type={"radio"}
                    id={optionOne}
                    name={optionOne}
                    label={optionOne}
                    onChange={() => this.setState(() => ({option: OPTION_ONE}))}
                />
              </Row>
              <Row>
                <Form.Check
                    type={"radio"}
                    id={optionTwo}
                    name={optionOne}
                    label={optionTwo}
                    onChange={() => this.setState(() => ({option: OPTION_TWO}))}
                />
              </Row>
            </Form.Group>
            <Row>
              <Button
                  onClick={() => this.onCastVote()}
                  disabled={this.state.option === ""}
                  className={"btn-secondary"}
              >
                Cast your Vote!
              </Button>
            </Row>
          </Form>
        </div>
    );
  }
}

function mapStateToProps({dispatch, authedUser}, {qid}) {
  return {
    dispatch, authedUser, qid
  }
}

export default connect(mapStateToProps)(Vote);
