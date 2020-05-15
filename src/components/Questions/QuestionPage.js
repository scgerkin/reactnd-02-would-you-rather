import React from "react";
import {connect} from "react-redux";
import Question from "./Question";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

// TODO set cards in a column, 3? per row
//  This needs to be extracted into a separate function
//  refer to https://stackoverflow.com/a/37782919/12676661
//  Will need to switch on map index
//  Something like....
//  If index % 3 === 0
//  <Column>
//    <Card class={col-1}>
//  If index % 3 === 2 and not end of map
//    <Card class={col-2}>
//  If index % 3 === 2 and IS end of map
//    <Card class={col-2}>
//   </Column>
//  If index % 3 === 1
//    <Card class={col-3}>
//   </Column>
class QuestionPage extends React.Component {
  render() {
    return (
        <div>
          <h3>Questions</h3>
          <CardGroup>
            {this.props.questionIds.map((id, index) => (
                <Card key={id}>
                  <Question id={id}/>
                </Card>
            ))}
          </CardGroup>
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
