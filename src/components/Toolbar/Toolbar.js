import React,{Component} from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import logo from "../Toolbar/esportsLogo.png";

import './Toolbar.css';

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
                    <li> <NavLink to ="/top-games">Top Games</NavLink></li>
                    <li>  <NavLink to ="/top-streams">Top Streams</NavLink></li>
                    <li> <NavLink to ="/about-us">About Us</NavLink></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
