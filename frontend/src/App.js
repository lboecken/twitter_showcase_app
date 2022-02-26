import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import SearchTweets from "./Components/SearchTweets";
import RandomTweets from "./Components/RandomTweets";
import Homepage from "./Components/Homepage";

const App = () => {
  return (
    <div>
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/searchtweets" element={<SearchTweets />} />
            <Route path="/randomtweets" element={<RandomTweets />} />
          </Routes>
        </>
      </Router>
    </div>
  );
};

export default App;
