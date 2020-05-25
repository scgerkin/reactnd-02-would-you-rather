import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {handleDeleteQuestion} from "../../actions/questions";

class QuestionPreview extends React.Component {

  handleOnClick = () => {
    const {id} = this.props
    this.props.history.push(`/questions/${id}`)
  }

  handleOnDelete = () => {
    const {id, dispatch} = this.props
    dispatch(handleDeleteQuestion(id))
  }

  render() {
    const {displayText, isOwner} = this.props
    return (
        <Container>
          <Row>
            <h4>Would you rather</h4>
          </Row>
          <Row as={"p"}>
            {displayText}
          </Row>
          {this.renderButtons(isOwner)}
        </Container>
    );
  }

  renderButtons(isOwner) {
    if (isOwner) {
      return (
          <Row>
              <Button onClick={this.handleOnClick}>View Poll</Button>
              <Button onClick={this.handleOnDelete}>Delete Question</Button>
          </Row>
      )
    } else {
      return (
          <Row>
              <Button onClick={this.handleOnClick}>View Poll</Button>
          </Row>
      )
    }
  }
}


export default withRouter(connect()(QuestionPreview));
