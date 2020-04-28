import React from 'react';

import '../About/AboutUs.css';
import profilepic from '../About/dp-pastel-clipped.png';

const aboutUs = (props) => (

    <body className="wrapper">
        <div className="card-style">
            <div className="cards">
                <img src = {profilepic} className="profile" alt="profile"></img>
                <h1 className="nameheading">Mohammed Abraz</h1>
                <h2 className="infoheading">UI/UX Designer</h2>
                <h2 className="infoheading"><a href="/">Twitter</a></h2>
            </div>

            <div className="cards">
                <img src = {profilepic} className="profile" alt="profile"></img>
                <h1 className="nameheading">Mohammed Abraz</h1>
                <h2 className="infoheading">UI/UX Designer</h2>
                <h2 className="infoheading"><a href="/">Twitter</a></h2>
            </div>

            <div className="cards">
                <img src = {profilepic} className="profile" alt="profile"></img>
                <h1 className="nameheading">Mohammed Abraz</h1>
                <h2 className="infoheading">UI/UX Designer</h2>
                <h2 className="infoheading"><a href="/">Twitter</a></h2>
            </div>
        </div>
    </body>
);

export default aboutUs;