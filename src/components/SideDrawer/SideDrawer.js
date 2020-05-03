import React from 'react';
import {Link} from 'react-router-dom';
import './SideDrawer.css';
import "bootstrap/dist/css/bootstrap.css";

const sideDrawer = props => {
    // eslint-disable-next-line
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

  return(
    <nav className={drawerClasses}>
        <ul>
        <li> <Link to ="/Popular-games">Popular Games</Link></li>
          <li>  <Link to ="/top-streams">Top Streams</Link></li>
          <li>  <Link to ="/upcoming">Upcoming Games</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
        </ul>
    </nav>
  );
};

export default sideDrawer;