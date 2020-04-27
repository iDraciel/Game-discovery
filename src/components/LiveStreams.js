import React,{useState,useEffect} from 'react';
import api from '../api.js';
import './LiveStreams.css';

const LiveStreams=()=>{
    const [streams,setStreams] =useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const result = await api.get('https://api.twitch.tv/helix/streams')
           // console.log(result.data);
           let dataArray = result.data.data
          let finalArray = dataArray.map(stream=>{
               let newURL = stream.thumbnail_url 
               .replace('{width}','300')
               .replace("{height}", "300")
               stream.thumbnail_url = newURL;
               return stream;
           })
        setStreams (finalArray);
        };
        fetchData();
    },[]);
    return( <div>
        <h1>Most Popular streams</h1>
        <div className="row">
        {streams.map(stream =>(
            <div className="column">
                <div className="card">
               <img src={stream.thumbnail_url} className="image"/>
                 <h5>{stream.user_name}</h5>
        <p>{stream.viewer_count}</p>
                 <button className="Game-button">
                  <a className="button-link"
                    href={"https://twitch.tv/" + stream.user_name}
                    target="_blank">Watch Live
                                 
                    </a>
                  </button>
                  </div>
                </div>
             

        ))}
        </div>
      </div>
      );
  
  }
  export default LiveStreams;
