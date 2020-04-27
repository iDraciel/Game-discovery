import React from 'react';
import {Link} from 'react-router-dom';
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
        <li> <Link to ="/top-games">Top Games</Link></li>
          <li>  <Link to ="/top-streams">Top Streams</Link></li>
            <li><a href="/">About Us</a></li>
        </ul>
    </nav>
  );
};

export default sideDrawer;