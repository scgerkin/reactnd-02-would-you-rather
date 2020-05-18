import React from "react";
import {connect} from "react-redux";
import Container from "react-bootstrap/Container";
import LeaderboardItem from "./LeaderboardItem";

//todo styling
//consider adding a header/title
class Leaderboard extends React.Component {

  render() {
    const {ids} = this.props

    return (
        <Container>
          {ids.map((id,index) => (
              <LeaderboardItem key={id} id={id} position={index}/>
          ))}
        </Container>
    )
  }
}

function mapStateToProps({users, authedUser}) {

  const userIdsSortedByPointsInDescendingOrder =
      Object.keys(users).sort((a, b) =>
          (Object.keys(users[b].answers).length + users[b].questions.length)
          -
          (Object.keys(users[a].answers).length + users[a].questions.length)
      )

  return {
    ids: userIdsSortedByPointsInDescendingOrder
  }
}

export default connect(mapStateToProps)(Leaderboard)
