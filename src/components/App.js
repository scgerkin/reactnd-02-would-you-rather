import React from 'react';
import '../styles/App.css';
import {Leaderboard} from "./Leaderboard/Leaderboard";
import {Questions} from "./Questions/Questions";
import {Nav} from "./Nav/Nav";
import {Auth} from "./Auth/Auth";
import {Home} from "./Home/Home";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Auth/>
      <Home/>
      <Leaderboard/>
      <Questions/>
    </div>
  );
}

export default App;
