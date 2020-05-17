import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

class QuestionPreview extends React.Component {

  handleOnClick = () => {
    const {id} = this.props
    console.log("ID", id)
    console.log(this.props)
    console.log("History", this.props.history)
    this.props.history.push(`/questions/${id}`)
  }

  render() {
    const {displayText} = this.props
    return (
        <Container>
          <Row>
            <h4>Would you rather</h4>
          </Row>
          <Row as={"p"}>
            {displayText}
          </Row>
          <Row>
            <Button
                onClick={this.handleOnClick}
            >View Poll</Button>
          </Row>
        </Container>
    );
  }
}

export default withRouter(connect()(QuestionPreview));
