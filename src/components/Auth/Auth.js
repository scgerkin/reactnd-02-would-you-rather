import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import FigureImage from "react-bootstrap/FigureImage";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import {useAuth0} from "../../auth/react-auth0-spa";

function Auth() {
  const {loginWithPopup} = useAuth0();
  return (
      <Container>
        <Card>
          <Card.Header>
            <h4>Welcome to the Would You Rather App!</h4>
            <h5>Please sign in to continue</h5>
          </Card.Header>
          <Card.Body>
            <Col>
              <FigureImage
                  src="/react-redux.jpg"
                  width={150}
                  height={150}
                  roundedCircle
              />
            </Col>
            <Col>
              <Button
                  onClick={loginWithPopup}
              >Login</Button>
            </Col>
          </Card.Body>
        </Card>
      </Container>
  )
}

export default Auth;
