import React,{Component} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
<<<<<<< HEAD
import './Home.css';




=======
import CSGO from '../images/ESL-CS.jpg';
import ESL from '../images/ESL.jpg';
import DOTA from '../images/ESL-DOTA.jpg';
import './Home.css';
>>>>>>> trial
class Home extends Component{
    
    render(){
        const settings = {
            dots: true,
            infinite: true,
            autoplay:true,
            autoplaySpeed:3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade:true,
            cssEase:"ease-out"
          };
      
        return (
            <div>
            <Slider {...settings}>
               <div className="slide">
<<<<<<< HEAD
                 <img style={{width:"100%",height:"100%"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUs5I_m7A3YL85OeXA0e01ES91DzFMcxlyCqapzkS0Oj4kNwbL&usqp=CAU" alt="slide1"/>
               </div>
               <div className="slide">
               <img style={{width:"100%",height:"100%"}} 
               src="https://data2.origin.com/content/dam/originx/web/app/programs/About/aboutorigin_3840x2160_battlefield1.jpg" alt="slide1"/>
               </div>
               <div className="slide">
                 <img style={{width:"100%",height:'100%'}} src="https://icdn2.digitaltrends.com/image/best-mac-games-fortnite-500x500.jpg"  alt="slide2"/>
               </div>
        </Slider> 
          
=======
                 <a href="https://www.twitch.tv/esl" target="_blank"rel="noopener noreferrer">
                 <img style={{width:"100%",height:"auto"}} src={ESL} alt="slide1"/>
                 </a>
               </div>
               <div className="slide">
                 <a href="https://www.youtube.com/channel/UCaYLBJfw6d8XqmNlL204lNg" target="_blank" rel="noopener noreferrer">
               <img style={{width:"100%",height:"auto"}} 
               src={DOTA} alt="slide2"/>
               </a>
               </div>
               <div className="slide">
               <a href="https://www.youtube.com/channel/UCPq2ETz4aAGo2Z-8JisDPIA" target="_blank" rel="noopener noreferrer">
                 <img style={{width:"100%",height:'auto'}} src={CSGO}  alt="slide3"/>
                 </a>
               </div>
            </Slider>
             
>>>>>>> trial
            </div>
        );
    }
}

export default Home;