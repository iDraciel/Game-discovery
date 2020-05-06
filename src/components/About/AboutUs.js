import React, { Profiler } from 'react';
import {Helmet} from "react-helmet";
import './AboutUs.css';
import profilepic from '../About/dp-pastel-clipped.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

const aboutUs = () => (<div>
    <Helmet><title>About Us</title></Helmet>
    <body className="wrapper">
        <div className="row">
            <div className="columns">
            <div className="card">
                <img src = {profilepic} className="profile" alt="profile"></img>
                <h1 className="nameheading">Mohammed Abraz</h1>
                <h2 className="infoheading">UI/UX Designer</h2>
                <h2 className="infoheading"> <a href="https://www.twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>  
      <a href="https://www.github.com/" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
            </h2>
            </div>
            </div> 
            <div className="columns">
            <div className="card">
                <img src = {profilepic} className="profile" alt="profile"></img>
                <h1 className="nameheading">Mohammed Abraz</h1>
                <h2 className="infoheading">UI/UX Designer</h2>
                <h2 className="infoheading"><a href="https://www.twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>  
      <a href="https://www.github.com/" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a></h2>
            </div>
            </div>
             <div className="columns">
            <div className="card">
                <img src = {profilepic} className="profile" alt="profile"></img>
                <h1 className="nameheading">Mohammed Abraz</h1>
                <h2 className="infoheading">UI/UX Designer</h2>
                <h2 className="infoheading"><a href="https://www.twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>  
      <a href="https://www.github.com/" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a></h2>
            </div>
            </div>
        </div>
    </body>
    </div>
);

export default aboutUs;