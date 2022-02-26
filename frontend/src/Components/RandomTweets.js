import React,  { useEffect, useState }  from 'react'
import NavBar from "../Components/Navbar";
import axios from "axios"
import "../App.css";

const RandomTweets = () => {


  const [randomTweets, setRandomTweets] = useState([])

  useEffect(
    () => {
      axios.get("api/randomtweets").then(res => {
        setRandomTweets(res.data)
        console.log(res.data)
      })
    }, [setRandomTweets]
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
          <h1>Random Tweet Generator</h1>

          <p>{randomTweets.name}</p>
          <p>{randomTweets.hair_color}</p>
          <p>{randomTweets.eye_color}</p>
        
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </div>
  )
}

export default RandomTweets