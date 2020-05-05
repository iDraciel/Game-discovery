import React, {Component} from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Games from './components/Games.js';
import GameStream from './components/GamesStreams.js';
import LiveStream from './components/LiveStreams.js';
import ScrollToTop from './scrollToTop.js';
import AboutUs from './components/About/AboutUs.js';
import HomeComp from './HomeComp.js';
import ErrorPage from './404.js';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Crackwatch from './components/Crackwatch';

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
     <Switch>
     <Route exact path='/' component={HomeComp}/>
     <Route path='/Home' component={HomeComp}/>
     <Route exact path='/upcoming' component={Crackwatch}/>
     <Route exact path='/game/:id' component={GameStream} />
      <Route exact path='/Popular-games' component={Games}/>
      <Route exact path='/top-Streams' component={LiveStream}/>
      <Route exact path='/about-us' component={AboutUs} />
      <Route path="*" component={ErrorPage} />
      </Switch>         
    </div>
    </ScrollToTop>
    </Router>


  );
}
}

export default App;
