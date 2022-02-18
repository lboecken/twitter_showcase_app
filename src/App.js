import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="maincontainer">
      <div className="container-fluid">
        <div className="row no-gutter">
          

          <div className="col-md-6 background">
                  <Navbar />
            <div className="login d-flex py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 title" >
                    <h3 className="display-6 ">Twitter Showcase App</h3>
                    <br></br>
                    <p className="text-muted mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    </p>
                    <p className="text-muted mb-4">
                    sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                    enim ad minim veniam, quis nostrud exercitation ullamco.
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

export default App;
