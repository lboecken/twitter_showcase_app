import React, { useEffect, useState } from "react";
import NavBar from "./Navbar";
import axios from "axios";
import "../App.css";
import { Button } from "react-bootstrap";

// add state for tweets [array]
// update state with the res data
//render data inside tweets array

const SearchTweets = () => {
  const [tweets, setTweets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("api/searchtweets").then((res) => {
      console.log(res.data.data, res.data.includes);

      setTweets(res.data.data, res.data.includes);
    });
  }, []);

  const renderedTweets = tweets.map((tweet) => {
    return (
      <p className="box">
        ({tweet.id}) {tweet.text}
        <div>
          ({tweet.username} {tweet.name}
          Retweets: {tweet.public_metrics.retweet_count}) (Likes:{" "}
          {tweet.public_metrics.like_count}) (Replies:{" "}
          {tweet.public_metrics.reply_count})
        </div>
      </p>
    );
  });

  return (
    <>
      <div className="maincontainer background">
        <div className="container-fluid">
          <div className="row no-gutter">
            <div className="col-md-6">
              <NavBar />

              <div className=" d-flex py-2">
                <div className="container">
                  <div className="row"></div>
                </div>
              </div>
            </div>
            <h1>Search Twidda</h1>

            <input
              type="text"
              placeholder="Search for People, Topics or Keywords"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              autoFocus="True"
            />

            <p></p>
            <button className="centerText">Search</button>
            <p></p>
          </div>
        </div>
      </div>
      <div></div>

      <p></p>

      <div>{renderedTweets}</div>
    </>
  );
};

export default SearchTweets;
