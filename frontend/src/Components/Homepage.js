import React from "react";
import "../App.css";
import NavBar from "../Components/Navbar";

const Homepage = () => {
  return (
    <div className="maincontainer">
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-6 background">
        <NavBar />
            <div className="login d-flex py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 title">
                    <h1 className="display-5 ">Say Goodbye to Doomscrolling!</h1>
                    <br></br>
                    <p className="text-muted mb-4">
                      Scrolling through Twitter is all fun, games and laughs until an innocent 
                      glance at the "What's Happening" section sends you spiraling into an anxious doomscrolling episode.
                      Twidda strips away the bells and whistles and allows you to protect your peace of mind by being super 
                      deliberate with your search. 
                    </p>
                    <p className="text-muted mb-4">
                    Search the topics that interest you sans distraction in the Search Tweets
                    section or check out the Random Tweet Generator for a wholesome shot of dopamine. 
                    Your Cortisol levels will undoubtedly thank you! 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-flex bg-image"></div>
         
        </div>
      </div>
    </div>
  );
};

export default Homepage;

