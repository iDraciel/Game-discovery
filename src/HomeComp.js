import React from 'react';
import Home from './components/Home/Home.js';
import TopOrdered from './components/TopOrdered.js';
import {Helmet} from "react-helmet";
import Latestrelease from './components/Latestrelease';
const HomeComp =()=>{
    return(
        <div>

       <Helmet><title>Home</title></Helmet>

      <Home/>

    <TopOrdered/>
     <Latestrelease/>
     
      </div>
    );
}
export default HomeComp;