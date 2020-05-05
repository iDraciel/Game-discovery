import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import './GamePage.css'

const GamePage = (props) => {
    const [gameData, setGameData] = useState({
        Title: '',
        Description: '',
        StoreLinks: [],
        Trailer: '',
        Image: ''

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
        <div className="gamePageContainer">
            <h1>{gameData.Title}</h1>
            <img src={gameData.Image} style={{ width: "100%", height: '300px' }} alt="GameImage" />
            
            <p>
                {gameData.Description}
            </p>
              <div className="video-container">
               <ReactPlayer width="100%" height="100%"  url={gameData.Trailer} controls />
              </div>
             
            
            <div className="store">
                 <p>Available in the Following stores</p>
                {gameData.StoreLinks.map((storeLink, i) => {
                    return <p key={i} >{i + 1}. {storeLink.store.name}:
                       <a href={storeLink.url} style={{ textDecoration: 'none' }} target="_blank"
                            rel="noopener noreferrer">Go to Store</a>
                    </p>

                })
                }
            </div>
        </div>
    );
}




export default GamePage;