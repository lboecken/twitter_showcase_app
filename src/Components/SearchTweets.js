import React from 'react'
import NavBar from "../Components/Navbar";


const SearchTweets = () => {
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