import React from 'react';
import {Helmet} from "react-helmet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

import Abraz from '../About/Abraz.png';
import Puru from './Purushottam.png';
import Akhil from './Akhil.png';

import './AboutUs.css';
import Footer from '../Footer/Footer';

const aboutUs = () => (<div>
    <Helmet><title>About</title></Helmet>
    <div className="wrapper">

        <div className= "about-info-heading">
            <h1 className="about-main-heading">We are an Aggregation Platform for Games and Esports</h1>
            <h2 className="about-main-info">The vision in building this platform has been to help peeps like you to get into esports and gaming.</h2>
            <h2 className="about-main-info">We help you in:</h2>
            <h2 className="about-main-info">-> How to Start</h2>
            <h2 className="about-main-info">-> Where to Start</h2>
            <h2 className="about-main-info">-> What to Watch</h2>
        </div>

        <div className="  ">
          <h2 className="about-main-info">What is Esports you ask?</h2>
          <p>
            Esports (also known as electronic sports, e-sports, or eSports) is a form of sport competition using video games.<br></br>
            Esports often takes the form of organized, multiplayer video game competitions, particularly between professional players, individually or as teams.
          </p>

          <div className="spacer-about"></div>

          <h2 className="about-main-info">How does GameSpaceX help you ask?</h2>
          <p>
          The platform is designed and built in such a way that we are at the forefront in showing you new game releases and the best streams on Esports.<br></br>
          We also help you explore the gaming world. Think of us as the yellow pages of Gaming and Esports.
          </p>
        </div>

        <div className="about-people">
          <h2 className="about-main-info">People behind GamespaceX</h2>

        {/* Profile Cards */}
          <div className="profile-card">
            <div className="profile-card-left">
              <img src = {Abraz} className="profile" alt="profile"></img>
            </div>

            <div className="profile-card-right">
              <h2 className="profile-name">Mohammed Abraz</h2>
              <p>
              Hi, I am a UI/UX Designer from Bangalore. I am currently a student of Game and Mobile Application Development.<br></br>
              I have worked as a Graphic Designer for more than two years with a reputed Advertising firm.<br></br>
              Currently honing my skills in UI/UX and learning Web Development.
              </p>

              <div className="profile-right-buttons">
                <button className="twitter-button">
                  <a href="https://twitter.com/callmeabraz" target="blank" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="1x" />    Twitter</a>
                </button>

                <button className="github-button">
                  <a href="https://github.com/callmeabraz" target="blank" className="github social">
                    <FontAwesomeIcon icon={faGithub} size="1x" />    Github</a>
                </button>

              </div>
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-card-left">
              <img src = {Akhil} className="profile" alt="profile"></img>
            </div>

            <div className="profile-card-right">
              <h2 className="profile-name">Akhil Raj</h2>
              <p>
              Hi, I am a UI/UX Designer from Bangalore. I am currently a student of Game and Mobile Application Development.<br></br>
              I have worked as a Graphic Designer for more than two years with a reputed Advertising firm.<br></br>
              Currently honing my skills in UI/UX and learning Web Development.
              </p>

              <div className="profile-right-buttons">
                <button className="twitter-button">
                  <a href="https://twitter.com/Akhil_ARJ" target="blank" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="1x" />    Twitter</a>
                </button>

                <button className="github-button">
                  <a href="https://github.com/akhilrajarj" target="blank" className="github social">
                    <FontAwesomeIcon icon={faGithub} size="1x" />    Github</a>
                </button>

              </div>
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-card-left">
              <img src = {Puru} className="profile" alt="profile"></img>
            </div>

            <div className="profile-card-right">
              <h2 className="profile-name">Purushottam</h2>
              <p>
              Hi, I am a UI/UX Designer from Bangalore. I am currently a student of Game and Mobile Application Development.<br></br>
              I have worked as a Graphic Designer for more than two years with a reputed Advertising firm.<br></br>
              Currently honing my skills in UI/UX and learning Web Development.
              </p>

              <div className="profile-right-buttons">
                <button className="twitter-button">
                  <a href="https://twitter.com/MOTI0N_" target="blank" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="1x" />    Twitter</a>
                </button>

                <button className="github-button">
                  <a href="https://github.com/iDraciel/" target="blank" className="github social">
                    <FontAwesomeIcon icon={faGithub} size="1x" />    Github</a>
                </button>

              </div>
            </div>
          </div>

        </div>

    </div>

    <Footer />
    
  </div>
);

export default aboutUs;