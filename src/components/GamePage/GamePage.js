import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import './GamePage.css';
import {Helmet} from "react-helmet";

const GamePage = (props) => {
    const [gameData, setGameData] = useState({
        Title: '',
        Description: '',
        StoreLinks: [],
        Trailer: '',
        Image: '',
      

    });
    useEffect(() => {
        axios.get(`https://api.rawg.io/api/games/${props.match.params.id}`)
            .then(response => {
                const { name, description_raw, stores, clip, background_image } = response.data;
                setGameData({
                    Title: name,
                    Description: description_raw,
                    StoreLinks: stores,
                    Trailer: clip.clips.full,
                    Image: background_image
                });
  
            });
     
    }, [props.match.params.id]);
    return ( 
        <div>
        <Helmet><title>{gameData.Title}</title></Helmet>
        <div className="gamePageContainer">
            <h1>{gameData.Title}</h1>
            <div className="game-content">
            <img src={gameData.Image} className="game-image" alt="GameImage" />
            <div className="text" >
            <p className="game-text">
                {gameData.Description}
            </p>
            </div>
            </div>
              <div className="video-container">
               <ReactPlayer playing width="100%" height='auto' url={gameData.Trailer} controls />
              </div>
             
            
            <div className="video-container">
                 <h2 className="game-text">Available in the Following stores</h2>
                {gameData.StoreLinks.map((storeLink, i) => {
                    return <a className="button button5" href={storeLink.url} style={{textDecoration:"none"}}  
                    target="blank" rel="noopener noreferrer" key={i}> {storeLink.store.name}</a> 
                

                })
                }
            </div>
        </div>
        </div>
    );
}




export default GamePage;