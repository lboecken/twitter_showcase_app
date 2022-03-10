import React, { useEffect, useState } from "react";
import NavBar from "./Navbar";
import axios from "axios";
import "../App.css";
import retweetsAction from "../img/retweet-action.png";
import likeAction from "../img/like-action.png";
import replyAction from "../img/reply-action_0.png";
import playBtn from "../img/play_gif_2.png";
import exploreImg from "../img/explore_img.png";

const SearchTweets = () => {
  const [tweets, setTweets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isData, setIsData] = useState(true);
  const [isDefault, setIsDefault] = useState(true);

  async function getTweets() {
    await axios.get("api/searchtweets?searchTerm=" + searchTerm).then((res) => {
      setTweets(res.data);
      setIsDefault(false);
      if (!res.data.data) {
        setIsData(false);
      } else {
        setIsData(true);
      }
    });
  }

  function getUserInfo(author_id) {
    return tweets.includes.users.find((user) => user.id === author_id);
  }

  function getMedia(media_key) {
    return tweets?.includes?.media?.find(
      (media) => media.media_key === media_key
    );
  }

  const data = tweets?.data?.map((tweet) => {
    return {
      ...tweet,
      user: getUserInfo(tweet.author_id),
      retweet_metrics:
        tweet?.referenced_tweets?.map((item) =>
          tweets?.includes?.tweets?.find((tweet) => tweet.id === item.id)
        ) || [],
      media: getMedia(tweet?.attachments?.media_keys[0]),
      playBtn: { playBtn },
      rt: tweet?.referenced_tweets?.map((item) => {
        return (item.type = "(Retweeted) " || []);
      }),
    };
  });

  const minMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function timeConvert(date) {
    let seconds = Math.floor((new Date() - new Date(date)) / 1000);

    let currentDate = new Date(date);
    let year = currentDate.getFullYear();
    let mm = currentDate.getMonth();
    let day = currentDate.getDate();
    let fullDate = `${minMonths[mm]} ${day}, ${year}`;

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return fullDate;
    }

    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return fullDate;
    }
    interval = Math.floor(seconds / 86400);

    if (interval > 1) {
      return fullDate;
    }
    interval = Math.floor(seconds / 3600);

    if (interval > 1) {
      return interval + " hrs ago";
    }

    interval = Math.floor(seconds / 60);

    if (interval > 1) {
      return interval + " mins ago";
    }
    return seconds.toString() + " secs ago";
  }

  const renderedTweets =
    data &&
    data.map((tweet) => {
      let target = tweet?.media?.url;
      let playButton = false;

      if (tweet?.media?.type == "animated_gif") {
        let url = tweet?.media?.preview_image_url;
        let extract = url.substring(url.indexOf("b/") + 2);
        let finalExtract = extract.replace(".jpg", "");
        let gif_URL = `https://video.twimg.com/tweet_video/${finalExtract}.mp4`;
        tweet.media.url = url;
        target = gif_URL;
        playButton = true;
      }

      tweet.created_at = timeConvert(tweet.created_at);

      return (
        <p className="box">
          <div className="userName">
            <img
              className="circularIcon"
              src={tweet.user.profile_image_url}
            ></img>
            <div className="name-padding">
              <div>
                {tweet.user.name} · {tweet.created_at}
              </div>
              <div>@{tweet.user.username}</div>
            </div>
          </div>
          <div className="text-padding">
            {tweet?.rt}
            {tweet?.retweet_metrics[0]?.text || tweet.text}
          </div>
          <div className="media-container">
            <a href={target} target="_blank">
              <img
                id="media"
                className="mediaImg"
                src={tweet?.media?.url}
                alt=""
              ></img>
              {playButton == true ? (
                <img className="playBtn" src={playBtn}></img>
              ) : (
                ""
              )}
            </a>
          </div>

          <div className="analyticsDiv">
            <div>
              <img src={replyAction} className="analyticsIcons"></img>{" "}
              {tweet?.retweet_metrics[0]?.public_metrics?.reply_count ||
                tweet.public_metrics.reply_count}
            </div>
            <div>
              <img src={retweetsAction} className="analyticsIcons"></img>{" "}
              {tweet?.retweet_metrics[0]?.public_metrics?.retweet_count ||
                tweet.public_metrics.retweet_count}
            </div>
            <div>
              <img src={likeAction} className="analyticsIcons"></img>{" "}
              {tweet?.retweet_metrics[0]?.public_metrics?.like_count ||
                tweet.public_metrics.like_count}
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
              id="input"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              onKeyUp={(event) => {
                if (event.key == "Enter") {
                  getTweets();
                }
              }}
              autoFocus="True"
            />

            <p></p>
            <button
              className="centerText"
              onClick={() => {
                getTweets();
              }}
            >
              Search
            </button>

            <p></p>
          </div>
        </div>
      </div>
      <div></div>

      <p></p>

      {isDefault ? (
        <p>
          <img className="explore" src={exploreImg}></img>
        </p>
      ) : isData ? (
        <div>{renderedTweets}</div>
      ) : (
        <p className="notFound">
          No Tweets Found. Please try searching for another term.
        </p>
      )}
    </>
  );
};

export default SearchTweets;
