import React, {Component} from 'react';
import {connect} from "react-redux";

class Question extends Component {
  render() {
    const {question} = this.props;
    return (
        <div>
          {question}
        </div>
    );
  }
}

function mapStateToProps({authedUser, users, questions}, props) {
  //const {id} = props.match.params;
  const id = "8xf0y6ziyjabvozdd253nd";
  const question = questions[id];

  return {
    authedUser,
    question: question ? "QUESTION" : "NO QUESTION"
  }
}

export default connect(mapStateToProps)(Question);
