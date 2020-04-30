import React,{Component} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import CSGO from '../images/ESL-CS.jpg';
import ESL from '../images/ESL.jpg';
import DOTA from '../images/ESL-DOTA.jpg';
import './Home.css';
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
             
            </div>
        );
    }
}

export default Home;