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
      axios.get("api/searchtweets").then(res => {
        setTweets(res.data)
        console.log(res.data)
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

          <p>{tweets.name}</p>
          <p>{tweets.hair_color}</p>
          <p>{tweets.eye_color}</p>
        
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