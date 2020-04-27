import React,{Component} from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

import logo from "../Toolbar/esportsLogo.png";

import './Toolbar.css';

import {Link} from 'react-router-dom';

const toolbar = props => (
    <header className="toolbar"> n
        <nav className="toobar-navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar-logo"><a href="/"><img src={logo} className="logo" alt="logo"></img></a></div>
            <div className="spacer" />
            <div className="toolbar-navigation-items">
                <ul>
                    <li> <Link to ="/top-games">Top Games</Link></li>
                    <li>  <Link to ="/top-streams">Top Streams</Link></li>
                    <li><a href="/">About Us</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
