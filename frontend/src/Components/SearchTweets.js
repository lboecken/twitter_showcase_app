import React, { useEffect, useState } from 'react'
import NavBar from "./Navbar";
import axios from "axios"


// add state for tweets [array]
// update state with the res data 
//render data inside tweets array

const SearchTweets = () => {

  const [tweets, setTweets] = useState([])

  useEffect(
    () => {

      const recentTweets = []

      axios.get("api/searchtweets").then((res) => {
        
        const tweetData = res.data.data
        tweetData.map((tweet) => {
          
            recentTweets.push(tweet.text)
            setTweets(recentTweets.flat())
            console.log(tweet.text)
            // console.log(tweets)
          })
     
    })
    }, [setTweets]
  )
  return (
    <div className="maincontainer background">
    <div className="container-fluid">
      <div className="row no-gutter">
        <div className="col-md-6">
    <NavBar />
     
          <div className="login d-flex py-5">
            <div className="container">
              <div className="row">
          <h1>Search Tweets</h1>

          <p>{tweets}</p>
      
        
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
);
};

export default SearchTweets
