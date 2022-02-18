import React, {useState} from 'react'
import "../App.css";

function Navbar() {
  return (
    <div className="container">

<nav className="navbar navbar-expand-xl navbar-light">
  <a className="navbar-brand" href="#">Twidda</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav mx-1 ">
      <a className="nav-item nav-link active" href="#">Home</a>
      <a className="nav-item nav-link" href="#">Search Tweets</a>
      <a className="nav-item nav-link" href="#">Random Tweet Finder</a>
      
    </div>
  </div>
</nav>
   
    
    </div>
  )
}

export default Navbar