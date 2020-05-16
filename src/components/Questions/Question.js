import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Vote from "./Vote";

// TODO get user.name from state instead of question.author
// TODO Get question ID from path params
// nts
//  I think this should act as a dispatch component to either Vote or Result
//  It can determine which one should be displayed and give the appropriate
//  information based on the component to display
class Question extends Component {
  render() {
    const {question} = this.props;

    return (
        <Container>
          <Vote
              id={this.props.id}
              author={question.author} // todo, this needs to be retrieved from users state
              authorAvatar={"http://placekitten.com/150/150"} //todo
          />
        </Container>
    );
  }
}

//fixme code duplication
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
