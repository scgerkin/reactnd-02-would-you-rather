import React from "react";
import {connect} from "react-redux";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import FigureImage from "react-bootstrap/FigureImage";
import Button from "react-bootstrap/Button";
import {setAuthedUser} from "../../actions/authedUser";

class Auth extends React.Component {

  onLogin = () => {
    const {dispatch} = this.props
    const AUTHED_ID = "sarahedo"

    dispatch(setAuthedUser(AUTHED_ID))
  }

  render() {
    return (
        <Container>
          <Card>
            <Card.Header>
              <h4>Welcome to the Would You Rather App!</h4>
              <h5>Please sign in to continue</h5>
            </Card.Header>
            <Card.Body>
              <FigureImage
                  src="/react-redux.jpg"
                  width={150}
                  height={150}
                  roundedCircle
              />
              <Button
                  onClick={this.onLogin}
              >Login</Button>
            </Card.Body>
          </Card>
        </Container>
    )
  }
}

function mapStateToProps() {

}

export default connect(mapStateToProps)(Auth);
