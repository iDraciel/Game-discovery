import React from 'react';
import Home from './components/Home/Home.js';
import TopOrdered from './components/TopOrdered.js';
import {Helmet} from "react-helmet";
const HomeComp =()=>{
    return(
        <div>

       <Helmet><title>Home</title></Helmet>

      <Home/>

    <TopOrdered/>
    
      </div>
    );
}
export default HomeComp;