import React from 'react';
import {NavLink} from 'react-router-dom';
import './SideDrawer.css';

const sideDrawer = props => {
    // eslint-disable-next-line
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

  return(
    <nav className={drawerClasses}>
        <ul>
        <li> <NavLink to ="/top-games">Top Games</NavLink></li>
          <li>  <NavLink to ="/top-streams">Top Streams</NavLink></li>
            <li><a href="/">About Us</a></li>
        </ul>
    </nav>
  );
};

export default sideDrawer;