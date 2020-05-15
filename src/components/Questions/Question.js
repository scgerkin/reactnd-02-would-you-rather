import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

//todo Styling is hacky as a button, might need custom css
class Question extends Component {
  state = {
    option: ""
  }

  _onOptionChange(option) {
    this.setState({
      option: option
    });
  }

  render() {
    const {question} = this.props;
    const {option} = this.state;

    return (
        <Card>
          <Card.Header>{question.author} asks...</Card.Header>
          <Card.Title>Would you rather...</Card.Title>
          <Card.Text>
              <Button
                  onClick={this._onOptionChange.bind(this, "optionOne")}
                  active={option === "optionOne"}
                  variant={option === "optionOne" ? "success":"secondary"}
              >{question.optionOne}</Button>Votes:{question.oneVotes}
              <br/>
              <Button
                  onClick={this._onOptionChange.bind(this, "optionTwo")}
                  active={option === "optionTwo"}
                  variant={option === "optionTwo" ? "success":"secondary"}
              >{question.optionTwo}</Button>Votes:{question.twoVotes}
          </Card.Text>

          <Card.Footer>
            <Button>Submit</Button>
          </Card.Footer>

        </Card>
    );
  }
}

function mapStateToProps({authedUser, questions}, {id}) {
  const question = questions[id];

  return {
    authedUser,
    qid: id,
    question: question
        ? {
          qid: question.id,
          author: question.author,
          timestamp: question.timestamp,
          optionOne: question.optionOne.text,
          oneVotes: question.optionOne.votes.length,
          optionTwo: question.optionTwo.text,
          twoVotes: question.optionTwo.votes.length
        }
        : "NO QUESTION"
  }
}

export default withRouter(connect(mapStateToProps)(Question));
