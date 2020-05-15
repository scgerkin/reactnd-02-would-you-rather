import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class Question extends Component {
  render() {
    const {question} = this.props;
    return (
        <div>
          {question.qid}
          <br/>
          {question.author}
          <br/>
          {question.timestamp}
          <br/>
          {question.optionOne}
          <br/>
          {question.optionTwo}
        </div>
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
          optionTwo: question.optionTwo.text
        }
        : "NO QUESTION"
  }
}

export default withRouter(connect(mapStateToProps)(Question));
