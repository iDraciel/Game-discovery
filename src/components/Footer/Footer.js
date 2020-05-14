import React from 'react';
import './Footer.css';
import Logo from '../Toolbar/Logo.png';

import {NavLink} from 'react-router-dom';

const Footer =() =>{
    return(<div>
         
      <footer className="footer">
       
          <div className="footer-logo-container">
            <img src={Logo} alt="footer-pic" className="footer-pic"/>
            <h2 className= "foogter-logo-name">GameSpaceX</h2>
          </div>

          <div className="footer-info">
            Explore a collection of video games and Esports
          </div>

          <div className="footer-navigation-items">
              <ul>

                <li><NavLink to="/about-us" >About Us</NavLink></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><NavLink to="/terms-and-conditions" >Terms and Conditions</NavLink></li>
                   
              </ul>
          </div>

          {/* <div className= "footer-legal">
            <p>
            GameSpaceX.com is a website about PC and Console games that shows updates, streams, and news about games.<b></b>
            <b>Check out the latest update of upcoming AAA games and live streams.</b>
            <b>Legal notice: GameSpaceX.com does NOT host any pirated or illegal content, does NOT provide links to any pirated or illegal sites.</b>
            <b>GameSpaceX uses Pictures and Videos from Twitch and Rawg.io. Copyrights are owned by those providers and can be removed upon official request.</b>
            <b>GameSpaceX is solemnly an informational website that provides updates on mostly PC games and view watch of games.</b>
            <b>GameSpaceX encourages users to purchase games from market and at least one purchase link on each game page is provided.</b>
            </p>
          </div> */}

          <div className = "footer-rights">

            <div className= "footer-notice">
              Video games, pictures, all trademarks, and registered trademarks are the property of their respective owners.
            </div>

            <div className="spacer" />

            <div className= "footer-notice">
              © 2020 GameSpaceX
            </div>
          </div>

        

          
  </footer>
  </div>

    );
}
export default Footer;