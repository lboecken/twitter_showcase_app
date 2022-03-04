import React, { useEffect, useState } from "react";
import NavBar from "./Navbar";
import axios from "axios";
import "../App.css";
import retweetsAction from "../img/retweet-action.png";
import likeAction from "../img/like-action.png";
import replyAction from "../img/reply-action_0.png";
// import moment from 'moment';

// add state for tweets [array]
// update state with the res data
//render data inside tweets array

const SearchTweets = () => {
  const [tweets, setTweets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {

    getTweets()
    
  }, []);

  async function getTweets() {
    await axios.get("api/searchtweets").then((res) => {
      setTweets(res.data);
      console.log(res.data);
      
    });
  }

  function getUserInfo(author_id) {
    return tweets.includes.users.find((user) => user.id === author_id);
  }

  function getMedia (media_key) {
    return tweets.includes.media.find((media) => media.media_key === media_key )
  }


  const data = tweets?.data?.map((tweet) => {
    return {
      ...tweet,
      user: getUserInfo(tweet.author_id),
      retweet_metrics: tweet?.referenced_tweets?.map((item) => 
      tweets?.includes?.tweets.find((tweet) => tweet.id === item.id)
      ) || [],
      media: getMedia(tweet?.attachments?.media_keys[0])
    };
  });


  console.log({ data });

  // function timeConvert (date) {
  //   let seconds = Math.floor(((new Date()) - new Date(date)) / 1000);

  //   let interval = Math.floor(seconds / 31536000);

  //   if (interval > 1) {
  //     return interval + " years";
  //   }

  //   interval = Math.floor(seconds / 2592000);
  //   if (interval > 1) {
  //     return interval + " months";
  //   }
  //   interval = Math.floor(seconds / 86400);

  //   if (interval > 1) {
  //     return interval + " days";
  //   }
  //   interval = Math.floor(seconds / 3600);

  //   if (interval > 1) {
  //     return interval + " hours";
  //   }
  //   interval = Math.floor(seconds / 60);

  //   if (interval > 1) {
  //     return interval + " minutes";
  //   }
  //   return (seconds).toString() + " seconds"; 
  // }

  // console.log(timeConvert("2022-03-03T06:11:20.000Z"))

  const renderedTweets = data && data.map((tweet) => {

    if (tweet?.media?.type == "animated_gif") {
      console.log("There is a gif present")
    }
  
    return (
      <p className="box">
        <div className="userName">
          <img className="circularIcon" src={tweet.user.profile_image_url}></img>
          <div className="name-padding">
            <div>{tweet.user.name}</div>
            <div>@{tweet.user.username}</div>
            {/* <div>{tweet.created_at}</div> */}
          </div>
        </div>
        <div className="text-padding">{tweet?.retweet_metrics[0]?.text || tweet.text}</div>
        <div> 
        <a href={tweet?.media?.url} target="_blank">
        <img className="mediaImg" src={tweet?.media?.url}></img>
        </a>
        </div>

        <div className="analyticsDiv">
          <div>
            <img src={replyAction} className="analyticsIcons"></img>{" "}
            {tweet?.retweet_metrics[0]?.public_metrics?.reply_count || tweet.public_metrics.reply_count}
          </div>
          <div>
            <img src={retweetsAction} className="analyticsIcons"></img>{" "}
            {tweet?.retweet_metrics[0]?.public_metrics?.retweet_count || tweet.public_metrics.retweet_count}
          </div>
          <div>
            <img src={likeAction} className="analyticsIcons"></img>{" "}
            {tweet?.retweet_metrics[0]?.public_metrics?.like_count || tweet.public_metrics.like_count}
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
