import React,{useState,useEffect} from 'react';
import api from '../api.js';
import './LiveStreams.css';
import "bootstrap/dist/css/bootstrap.css";
import {Helmet} from "react-helmet";
import Loader from './UI/loader';
import Footer from './Footer/Footer';
const LiveStreams=()=>{
    const [streams,setStreams] =useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            const result = await api.get('https://api.twitch.tv/helix/streams')
           // console.log(result.data);
           let dataArray = result.data.data
          let finalArray = dataArray.map(stream=>{
               let newURL = stream.thumbnail_url 
               .replace('{width}','300')
               .replace("{height}", "300")
               stream.thumbnail_url = newURL;
               return stream;
           });
        setStreams (finalArray);
        setLoading(false);
        };
        fetchData();
    },[]);
    return( 
    <div>
      {loading?<Loader/>:
      <React.Fragment>
      <Helmet><title>Top Streams</title></Helmet>
        <h1 style={{marginTop:"60px"}}>Top Live Streams</h1>
        <div className="live-update">
        <div className="inner">
        </div>
        <h6 className="header-6">Live Updates</h6>
        </div>
        <div className="row">
        {streams.map(stream =>(
         
            <div className="column" key={stream.id}>
                <div className="card">
               <img src={stream.thumbnail_url} alt="" className="image"/>
                 <h5>{stream.user_name}</h5>
                 <div className="live-viewers">
                 <button className="pulse-button"/>
                 <p style={{marginTop:"-7px",marginLeft:"6px"}}>{stream.viewer_count}</p>
                   </div>
                  <a className="button-link" style={{textDecoration:"none"}}
                    href={"https://twitch.tv/" + stream.user_name}
                    target="_blank" rel="noopener noreferrer"><button className="Game-button" style={{textDecoration:"none"}}>Watch Live
                     </button>            
                    </a>
                  
                  </div>
                </div>


        ))}
        </div>
        <Footer />
        </React.Fragment>}
        
      </div>
      );
  
  }
  export default LiveStreams;
