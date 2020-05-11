import React, { Profiler } from 'react';
import {Helmet} from "react-helmet";
import './AboutUs.css';
import profilepic from '../About/dp-pastel-clipped.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";
  import Footer from '../Footer/Footer';
  import Puru from './Purushottam.png';
  import Akhil from './Akhil.png';

const aboutUs = () => (<div>
    <Helmet><title>About Us</title></Helmet>
    <body className="wrapper">
        <div className="row">
            <div className="columns">
            <div className="card">
                <img src = {Akhil} className="profile" alt="profile"></img>
                <h1 className="nameheading">Akhil Raj</h1>
                <h2 className="infoheading">Frontend Developer</h2>
                <h2 className="infoheading"> <a href="https://twitter.com/Akhil_ARJ" target="blank" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>  
      <a href="https://github.com/akhilrajarj" target="blank" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
            </h2>
            </div>
            </div> 
            <div className="columns">
            <div className="card">
                <img src = {Puru} className="profile" alt="profile"></img>
                <h1 className="nameheading">Purushottam</h1>
                <h2 className="infoheading">Fullstack Developer</h2>
                <h2 className="infoheading"><a href="https://twitter.com/MOTI0N_" target="blank" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>  
      <a href="https://github.com/iDraciel/" target="blank" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a></h2>
            </div>
            </div>
             <div className="columns">
            <div className="card">
                <img src = {profilepic} className="profile" alt="profile"></img>
                <h1 className="nameheading">Abraz</h1>
                <h2 className="infoheading">UI/UX Designer</h2>
                <h2 className="infoheading"><a href="https://www.twitter.com/" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>  
      <a href="https://github.com/callmeabraz" target="blank" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a></h2>
            </div>
            </div>
        </div>
    </body>
    <Footer />
    </div>
);

export default aboutUs;