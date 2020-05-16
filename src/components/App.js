import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {connect} from "react-redux";
import '../styles/App.css';
import NavContainer from "./Navigation/NavContainer";
import Home from "./Home/Home";
import {Leaderboard} from "./Leaderboard/Leaderboard";
import {Auth} from "./Auth/Auth";
import NewQuestion from "./Questions/AddQuestion";
import {handleInitialData} from "../actions/shared";
import Question from "./Questions/Question";

// TODO Loading bar/spinner
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
        <Router>
          <div className="App">
            <NavContainer/>
            <div>
              <Question
                  id={"8xf0y6ziyjabvozdd253nd"}
              />
            </div>

            {/*<div>*/}
            {/*  <Route exact path={"/"} component={Home}/>*/}
            {/*  <Route exact path={"/add"} component={NewQuestion}/>*/}
            {/*  <Route path={"/leaderboard"} component={Leaderboard}/>*/}
            {/*  <Route path={"/auth"} component={Auth}/>*/}
            {/*</div>*/}
          </div>
        </Router>
    );
  }
}

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
