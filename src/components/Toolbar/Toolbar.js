import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import logo from "../Toolbar/Logo.png";

import './Toolbar.css';
import "bootstrap/dist/css/bootstrap.css";
import {NavLink} from 'react-router-dom';

const toolbar = props => (
    <header className="toolbar"> 
        <nav className="toobar-navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar-logo"><NavLink to="/Home"><img src={logo} className="logo" alt="logo"/></NavLink></div>
            <div className="spacer" />
            <div className="toolbar-navigation-items">
                <ul>
                <li> <NavLink to ="/Top-Games" >Top Games</NavLink></li>
                <li>  <NavLink to ="/upcoming" >Upcoming Games</NavLink></li>
                    <li>  <NavLink to ="/top-streams" >Top Streams</NavLink></li>
                    <li><NavLink to="/about-us" >About Us</NavLink></li>
                   
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
