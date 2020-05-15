import React from "react";
import {connect} from "react-redux";
import Question from "./Question";
import CardColumns from "react-bootstrap/CardColumns";

class QuestionPage extends React.Component {

  render() {
    return (
        <div>
          <h3>Questions</h3>
          {/*nts Defaults to 3 cols, might be configurable*/}
          <CardColumns>
            {this.props.questionIds.map((id) => (
                <Question key={id} id={id}/>
            ))}
          </CardColumns>
        </div>
    )
  }
}

function mapStateToProps({questions}, props) {
  return {
    questionIds: Object.keys(questions)
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  }

}

export default connect(mapStateToProps)(QuestionPage);
