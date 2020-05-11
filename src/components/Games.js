import React,{useState,useEffect} from 'react';
import api from '../api.js';
import './Games.css';
import "bootstrap/dist/css/bootstrap.css";
import {Link,Redirect} from 'react-router-dom';
import {Helmet} from "react-helmet";
import Loader from './UI/loader';
import Footer from './Footer/Footer';

const Games=()=>{
    const [games,setGames] =useState([]);
    const [loading,setLoading] = useState(false);
       const mystyle={
         marginTop:"20px"
       }
    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            const result = await api.get('https://api.twitch.tv/helix/games/top')
            
           // console.log(result.data);
           let dataArray = result.data.data
          let finalArray = dataArray.map(game=>{
               let newURL = game.box_art_url 
               .replace('{width}','300')
               .replace("{height}", "300")
               game.box_art_url = newURL;
               return game;
           })
        setGames (finalArray);
        setLoading(false);
        
        };
        fetchData();
    },[]);
    const redirectPage = (name)=>{
     return  <Redirect to={`/games/${name}`}/>
    }
    return( <div>
    {loading?<Loader/>:<React.Fragment>
    <Helmet><title>Popular Games</title></Helmet>
      <h1>Most Popular Games</h1>
      <div className="live-update">
        <div className="inner">
        </div>
        <h6 className="header-6">Live Updates</h6>
        </div>
      <div className="row">
      {games.map(game =>(
       
          <div className="column" key={game.id}>
              <div className="card">
              <img className="image" alt={game.box_art_url} src={game.box_art_url} />
                  <Link
                    className="button-link"
                    to={{
                      pathname: "game/" + game.name,
                      state: {
                        gameID: game.id
                      }
                    }}
                  > <button style={mystyle} className="learn-more" onClick={()=>redirectPage(game.name)}>Learn More</button>
                  </Link>
                
              </div>
              </div>
       
        
      ))}
      </div>
      <Footer />
      </React.Fragment>
      }
     
    </div>
    );

}
export default Games;