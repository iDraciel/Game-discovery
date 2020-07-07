import React,{Component} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import JS4 from '../images/JS4.jpg';
import Creed from '../images/Creed.jpg';
import Batl from '../images/Batl.jpg';
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
                 
              <a href="https://www.producthunt.com/posts/gamespacex?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-gamespacex" target="blank"><img className="slide-image" src={JS4} alt="slide1"/>
              </a>  
               </div>
               <div className="slide">
                
               <img className="slide-image" 
               src={Batl} alt="slide2"/>
               
               </div>
               <div className="slide">
               
                 <img className="slide-image"  src={Creed}  alt="slide3"/>
             
               </div>
            </Slider>
             
            </div>
        );
    }
}

export default Home;