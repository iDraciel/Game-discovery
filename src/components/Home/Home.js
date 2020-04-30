import React,{Component} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
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
              <h3 style={{color:'white',marginTop:'40px',textAlign:'center'}}>Some description about website or Any other Generic info/data</h3>
            </div>
        );
    }
}

export default Home;