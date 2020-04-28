import React,{useState,useEffect} from 'react';
import './Games.css';
import api from '../api.js';

const GameStream=({match,location})=>{
    const [streamData, setStreamData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const result = await api.get(
          `https://api.twitch.tv/helix/streams?game_id=${location.state.gameID}`
        );
        let dataArray = result.data.data;
        let finalArray = dataArray.map(stream => {
          let newURL = stream.thumbnail_url
            .replace("{width}", "300")
            .replace("{height}", "300");
          stream.thumbnail_url = newURL;
          return stream;
        });
        setStreamData(finalArray);
      };
      fetchData();
    }, []);
    return( <div>
            <div className="row">
            {streamData.map(stream => (
            
            <div className="column">
                <div className="card">
              <img className="image" key={stream.id} src={stream.thumbnail_url} />
                <h5>{stream.user_name}</h5>
                <p>
                  {stream.viewer_count} live viewers
                </p>
                <button className="button-link">
                  <a
                    style={{textDecoration:"none"}}
                    href={"https://twitch.tv/" + stream.user_name}
                    target="_blank"
                  >
                    Visit
                  </a>
                </button>
              </div>
            </div>
        
        ))}
            </div>
    </div>);
   

}
export default GameStream;