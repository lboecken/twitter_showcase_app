import React, { useEffect, useState } from "react";
import NavBar from "../Components/Navbar";
import axios from "axios";
import "../App.css";
import "../img/index.js"


const RandomTweets = () => {


  const [randomTweets, setRandomTweets] = useState([]);

  const userIds = [{ID: 1152279248, name: "Earth Pix"}];

  async function getTweets(Id) {
    await axios
    .get((`api/randomtweets?userTweets=/${Id}/tweets`))
    .then((res) => {
      setRandomTweets(res.data);
  });
}
  
  let oneRandomTweet = Math.floor(Math.random() * 100) + 1;

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
        {userIds.map((user) => {return (
        <div onClick={() => getTweets(user.ID)}>
        <img src={user.IMG} className="staticProfileIcons"></img>
        <p className="label">{user.name}</p>
      </div>
        )})}

      <p></p>
      <p>{renderedRandomTweets}</p>
    </>
  );
};

export default RandomTweets;

