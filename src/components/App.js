import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import '../styles/App.css';
import NavContainer from "./Navigation/NavContainer";
import {Home} from "./Home/Home";
import {Leaderboard} from "./Leaderboard/Leaderboard";
import {Auth} from "./Auth/Auth";
import NewQuestion from "./Questions/NewQuestion";

function App() {
  return (
      <Router>
        <div className="App">
          <NavContainer/>
          <div>
            <Route exact path={"/"} component={Home}/>
            <Route path={"/questions/create"} component={NewQuestion}/>
            <Route path={"/leaderboard"} component={Leaderboard}/>
            <Route path={"/auth"} component={Auth}/>
          </div>
        </div>
      </Router>
  );
}

export default App;
