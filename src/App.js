import React, {Component} from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Games from './components/Games.js';
import GameStream from './components/GamesStreams.js';
import LiveStream from './components/LiveStreams.js';
import ScrollToTop from './scrollToTop.js';
import AboutUs from './components/About/AboutUs.js';
<<<<<<< HEAD
import Home from './components/Home/Home';
=======
import HomeComp from './HomeComp.js';
>>>>>>> trial
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Crackrelease from './components/Crackrelease';
class App extends Component{
  state = {
    sideDrawerOpen: false,
  }
  drawerToggleClickHandler = () => {
          this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render(){
    let backdrop;
    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
  return (
   
    <Router>
       <ScrollToTop>
    <div className="App">
    <div style={{height: '100%'}}>
   <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
  <SideDrawer show={this.state.sideDrawerOpen} />
    {backdrop}

     </div>
<<<<<<< HEAD
    
     <Route exact path='/'  component={Home}/>
=======
     
     <Route exact path='/' component={HomeComp}/>
     <Route exact path='/upcoming' component={Crackrelease}/>
>>>>>>> trial
     <Route exact path='/game/:id' component={GameStream} />
      <Route exact path='/top-games' component={Games}/>
      <Route exact path='/top-Streams' component={LiveStream}/>
      <Route exact path='/about-us' component={AboutUs} />
    </div>
    </ScrollToTop>
    </Router>


  );
}
}

export default App;
