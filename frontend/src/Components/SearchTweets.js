import React, { useEffect, useState } from "react";
import NavBar from "./Navbar";
import axios from "axios";
import "../App.css";
import retweetsAction from "../img/retweet-action.png";
import likeAction from "../img/like-action.png";
import replyAction from "../img/reply-action_0.png";

// add state for tweets [array]
// update state with the res data
//render data inside tweets array

const SearchTweets = () => {
  const [tweets, setTweets] = useState([]);
  const [users, setUsers] = useState([]);
  const [analytics, setAnalytics] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("api/searchtweets").then((res) => {
      setTweets(res.data.data);
      setUsers(res.data.includes.users);
      setAnalytics(res.data.includes.tweets);
      console.log(res.data.includes.tweets);
      console.log(res.data.data);
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

    // analytics.map((metric) => {
    //   if (metric.id == ((tweet.referenced_tweets[0]).id).toString()) {
    //     tweet.public_metrics.like_count =  metric.public_metrics.like_count;
    //     tweet.public_metrics.reply_count = metric.public_metrics.reply_count;
    //   }

    // });

    return (
      <p className="box">
        <div className="userName">
          <img className="circularIcon" src={tweet.profile_image_url}></img>
          <div className="name-padding">
            <div>{tweet.name}</div>
            <div>@{tweet.username}</div>
          </div>
        </div>
        <div className="text-padding">{tweet.text}</div>
        <div className="analyticsDiv">
          <div>
            <img src={replyAction} className="analyticsIcons"></img>{" "}
            {tweet.public_metrics.reply_count}
          </div>
          <div>
            <img src={retweetsAction} className="analyticsIcons"></img>{" "}
            {tweet.public_metrics.retweet_count}
          </div>
          <div>
            <img src={likeAction} className="analyticsIcons"></img>{" "}
            {tweet.public_metrics.like_count}
          </div>
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
