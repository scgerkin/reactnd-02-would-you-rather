import React from "react";
import {connect} from "react-redux";

class Leaderboard extends React.Component {
  render() {
    return (
        <div>
          Leaderboard Page
        </div>
    )
  }
}

function mapStateToProps() {

}

export default connect(mapStateToProps())(Leaderboard)
