import React, { useEffect, useState } from "react";
import NavBar from "./Navbar";
import axios from "axios";
import "../App.css";

// add state for tweets [array]
// update state with the res data
//render data inside tweets array


const SearchTweets = () => {
  const [tweets, setTweets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("api/searchtweets").then((res) => {
      setUsers(res.data.includes.users);

      setTweets(res.data.data);
    });
  }, []);

  const renderedTweets = tweets.map((tweet) => {
    users.map((user) => {
      if (user.id == tweet.author_id) {
        tweet.name = user.name;
        tweet.username = user.username;
        tweet.profile_image_url = user.profile_image_url;
      }
    });

    return (
      <p className="box">
        <img src={tweet.profile_image_url}></img>
        {tweet.name} <br></br>@{tweet.username} <br></br>
        {tweet.text}
        <div>
          (Retweets: {tweet.public_metrics.retweet_count}) (Likes:{" "}
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
