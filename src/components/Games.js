import React,{useState,useEffect} from 'react';
import api from '../api.js';
import './Games.css';
import {Link} from 'react-router-dom';


const Games=()=>{
    const [games,setGames] =useState([]);

    useEffect(()=>{
        const fetchData = async () => {
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
        };
        fetchData();
    },[]);
    return( <div>
      <h1>Most Popular Games</h1>
      <div className="row">
      {games.map(game =>(
       
          <div className="column">
              <div className="card">
              <img className="image" alt={game.id} src={game.box_art_url} />
            
                <h5>{game.name}</h5>
                <button className="Game-button">
                  <Link
                    className="button-link"
                    to={{
                      pathname: "game/" + game.name,
                      state: {
                        gameID: game.id
                      }
                    }}
                  >
                    {game.name} {" "}
                  </Link>
                </button>
              </div>
              </div>
       
        
      ))}
      </div>
    </div>
    );

}
export default Games;