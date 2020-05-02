import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import logo from "../Toolbar/esportsLogo.png";

import './Toolbar.css';
import "bootstrap/dist/css/bootstrap.css";
import {NavLink} from 'react-router-dom';

const toolbar = props => (
    <header className="toolbar"> 
        <nav className="toobar-navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar-logo"><a href="/"><img src={logo} className="logo" alt="logo"></img></a></div>
            <div className="spacer" />
            <div className="toolbar-navigation-items">
                <ul>
<<<<<<< HEAD
                    <li> <NavLink to ="/top-games" >Top Games</NavLink></li>
                    <li>  <NavLink to ="/top-streams" >Top Streams</NavLink></li>
                    <li><NavLink to="/about-us" >About US</NavLink></li>
=======
                    <li> <Link to ="/top-games" style={{textDecoration:"none"}}>Popular Games</Link></li>
                    <li>  <Link to ="/top-streams" style={{textDecoration:"none"}}>Top Streams</Link></li>
                    <li><Link to="/upcoming"style={{textDecoration:"none"}}>Upcoming Games</Link></li>
                    <li><Link to="/about-us" style={{textDecoration:"none"}}>About US</Link></li>
>>>>>>> trial
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
