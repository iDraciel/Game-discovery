import React from 'react';
import './Footer.css';
import Play from './Play.png';
const Footer =() =>{
    return(<div>
         <footer className="footer">
  <div className="footer-container">
    <img src={Play} className="footer-pic"/>
    <div className="footer-para">
    <p className="first-para" >GameSpaceX.com is a website about PC and Console games that shows updates, streams, and news about games. Check out the latest update of upcoming AAA games and live streams.
  Legal notice: GameSpaceX.com does NOT host any pirated or illegal content, does NOT provide links to any pirated or illegal sites.
    GameSpaceX uses Pictures and Videos from Twitch and Rawg.io. Copyrights are owned by those providers and can be removed upon official request.GameSpaceX is solemnly an informational website that provides updates on mostly PC games and view watch of games.
    GameSpaceX encourages users to purchase games from market and at least one purchase link on each game page is provided.</p>
  </div>
    </div>
    <div className="footer-social">
      <p className="footer-rights">copyright © 2020 GameSpaceX</p>
      </div>
  </footer>
  </div>

    );
}
export default Footer;