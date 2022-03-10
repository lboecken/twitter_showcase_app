import React, { useEffect, useState } from "react";
import NavBar from "../Components/Navbar";
import axios from "axios";
import "../App.css";
import retweetsAction from "../img/retweet-action.png";
import likeAction from "../img/like-action.png";
import replyAction from "../img/reply-action_0.png";
import playBtn from "../img/play_gif_2.png";
import locationIcon from "../img/location_icon_main.jpg";
import createdAtIcon from "../img/created_at_icon_main.jpg";
import verifiedIcon from "../img/verified_icon.jpg";
import earthPixImg from "../img/earthPixImg.jpg";
import dogFeelingsImg from "../img/dogFeelingsImg.jpg";
import motivationalImg from "../img/motivational_Img.png";
import artStationImg from "../img/artStationImg.jpeg";
import lifehackerImg from "../img/lifehackerImg.jpg";

const RandomTweets = () => {
  const [randomTweets, setRandomTweets] = useState([]);

  async function getEarthPixTweets() {
    await axios
      .get("api/randomtweets?userTweets=" + "/1152279248/tweets")
      .then((res) => {
        setRandomTweets(res.data);
      });
  }

  async function getDogFeelingsTweets() {
    await axios
      .get("api/randomtweets?userTweets=" + "/846137120209190912/tweets")
      .then((res) => {
        setRandomTweets(res.data);
      });
  }

  async function getMotivationalTweets() {
    await axios
      .get("api/randomtweets?userTweets=" + "/12728672/tweets")
      .then((res) => {
        setRandomTweets(res.data);
      });
  }

  async function getArtStationTweets() {
    await axios
      .get("api/randomtweets?userTweets=" + "/1655398482/tweets")
      .then((res) => {
        setRandomTweets(res.data);
      });
  }

  async function getLifeHackerTweets() {
    await axios
      .get("api/randomtweets?userTweets=" + "/7144422/tweets")
      .then((res) => {
        setRandomTweets(res.data);
      });
  }

  function getUserInfo(author_id) {
    return randomTweets.includes.users.find((user) => user.id === author_id);
  }

  function getMedia(media_key) {
    return randomTweets?.includes?.media?.find(
      (media) => media.media_key === media_key
    );
  }

  const data = randomTweets?.data?.map((tweet, index) => {
    tweet.key = index + 1;

    return {
      ...tweet,
      user: getUserInfo(tweet.author_id),
      retweet_metrics:
        tweet?.referenced_tweets?.map((item) =>
          randomTweets?.includes?.tweets?.find((tweet) => tweet.id === item.id)
        ) || [],
      media: getMedia(tweet?.attachments?.media_keys[0]),
      playBtn: { playBtn },
      key: tweet.key,
      rt: tweet?.referenced_tweets?.map((item) => {
        return (item.type = "(Retweeted) " || []);
      }),
    };
  });

  const largeNumFormatter = (num) => {
    return Math.abs(num) > 999 && Math.abs(num) < 999999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "K"
      : Math.abs(num) > 999999
      ? Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + "M"
      : Math.sign(num) * Math.abs(num);
  };

  const fullMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

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

  function profileTimeConvert(date) {
    let theDate = new Date(date);
    let mm = theDate.getMonth();
    let year = theDate.getFullYear();
    let fullDate = fullMonths[mm] + " " + year;

    return fullDate;
  }

  let oneRandomTweet = Math.floor(Math.random() * 100) + 1;

  const renderedRandomTweets =
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
      tweet.user.created_at = profileTimeConvert(tweet.user.created_at);

      if (!tweet.user.location) {
        tweet.user.location = "Unknown";
      }

      if (tweet.key === oneRandomTweet) {
        return (
          <>
            <div className="box">
              <div className="userName">
                <img
                  className="circularProfileIcon"
                  src={tweet.user.profile_image_url}
                ></img>
                <div className="name-padding">
                  <div className="profile-name">
                    {tweet.user.name}
                    <img src={verifiedIcon} className="verified"></img>
                  </div>
                  <div>@{tweet.user.username}</div>
                </div>
              </div>
              <div className="descriptionPadding">{tweet.user.description}</div>
              <div className="metricPadding">
                <div className="extraPadding">
                  <img src={locationIcon} className="locationIcon"></img>

                  {tweet.user.location}
                </div>
                <div className="extraPadding">
                  <img src={createdAtIcon} className="locationIcon"></img>
                  Joined {tweet.user.created_at}
                </div>
              </div>
              <div className="metricPadding">
                <div className="extraPadding">
                  {largeNumFormatter(tweet.user.public_metrics.following_count)}{" "}
                  Following{" "}
                </div>
                <div>
                  {largeNumFormatter(tweet.user.public_metrics.followers_count)}{" "}
                  Followers{" "}
                </div>
              </div>
            </div>
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
                  {largeNumFormatter(
                    tweet?.retweet_metrics[0]?.public_metrics?.reply_count
                  ) || largeNumFormatter(tweet.public_metrics.reply_count)}
                </div>
                <div>
                  <img src={retweetsAction} className="analyticsIcons"></img>{" "}
                  {largeNumFormatter(
                    tweet?.retweet_metrics[0]?.public_metrics?.retweet_count
                  ) || largeNumFormatter(tweet.public_metrics.retweet_count)}
                </div>
                <div>
                  <img src={likeAction} className="analyticsIcons"></img>{" "}
                  {largeNumFormatter(
                    tweet?.retweet_metrics[0]?.public_metrics?.like_count
                  ) || largeNumFormatter(tweet.public_metrics.like_count)}
                </div>
              </div>
            </p>
          </>
        );
      }
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
                  <div className="row"> </div>
                </div>
              </div>
            </div>
            <h1>Random Tweet Generator</h1>
            <p className="center_p">
              {" "}
              Click on one of the icons below to show a random tweet from that
              profile.
            </p>
            <p></p>
          </div>
        </div>
      </div>
      <p></p>
      <div className="staticProfileIcons-container">
        <div onClick={getEarthPixTweets}>
          <img src={earthPixImg} className="staticProfileIcons"></img>
          <p className="label">Earth Pics</p>
        </div>
        <div onClick={getDogFeelingsTweets}>
          <img src={dogFeelingsImg} className="staticProfileIcons"></img>
          <p className="label">Thoughts of Dog</p>
        </div>

        <div onClick={getMotivationalTweets}>
          <img src={motivationalImg} className="staticProfileIcons"></img>
          <p className="label">Motivational Quotes</p>
        </div>

        <div onClick={getArtStationTweets}>
          <img src={artStationImg} className="staticProfileIcons"></img>
          <p className="label">ArtStation</p>
        </div>

        <div onClick={getLifeHackerTweets}>
          <img src={lifehackerImg} className="staticProfileIcons"></img>
          <p className="label">Lifehacker</p>
        </div>
      </div>

      <p></p>
      <p>{renderedRandomTweets}</p>
    </>
  );
};

export default RandomTweets;
