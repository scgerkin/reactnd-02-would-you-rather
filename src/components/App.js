import React from 'react';
import {MemoryRouter as Router, Route} from "react-router-dom";
import '../styles/App.css';
import {NavContainer} from "./Navigation/NavContainer";
import {Home} from "./Home/Home";
import {Leaderboard} from "./Leaderboard/Leaderboard";
import {Questions} from "./Questions/Questions";

function App() {
  return (
      <Router>
        <div className="App">
          <NavContainer/>
          <div>
            <Route exact path={"/"} component={Home}/>
            <Route path={"/questions"} component={Questions}/>
            <Route path={"/leaderboard"} component={Leaderboard}/>
          </div>
        </div>
      </Router>
  );
}

export default App;
