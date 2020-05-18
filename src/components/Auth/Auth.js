import React from "react";
import {connect} from "react-redux";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import FigureImage from "react-bootstrap/FigureImage";
import Button from "react-bootstrap/Button";
import {setAuthedUser} from "../../actions/authedUser";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";

//todo styling
class Auth extends React.Component {
  state = {
    selectedUser: ""
  }

  onLogin = () => {
    const selection = this.state.selectedUser;
    if (!selection) {
      return;
    }
    const {dispatch} = this.props
    dispatch(setAuthedUser(selection))
  }

  render() {
    const {users} = this.props
    const userIds = Object.keys(users)


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
              <Form>
                <Col>
                  <Form.Control as={"select"}>
                    <Dropdown.Item
                        as={"option"}
                        key={"blank"}
                        onSelect={()=>this.setState({selectedUser: ""})}
                    >Select a user...</Dropdown.Item>
                    {userIds.map(id => (
                        <Dropdown.Item
                            as={"option"}
                            key={id}
                            onSelect={()=>this.setState({selectedUser: id})}
                        >
                          {users[id].name}
                        </Dropdown.Item>
                    ))}
                  </Form.Control>
                </Col>
                <Col>
                  <Button
                      disabled={this.state.selectedUser === ""}
                      onClick={this.onLogin}
                  >Login</Button>
                </Col>
              </Form>
            </Card.Body>
          </Card>
        </Container>
    )
  }
}

function mapStateToProps({users}) {
  return {
    users: users ? users : {}
  }
}

export default connect(mapStateToProps)(Auth);
