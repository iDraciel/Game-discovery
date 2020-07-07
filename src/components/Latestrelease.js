import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './Games.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Latestrelease extends Component {
    state = {
        users: [],
      
      };
    
      getUsers() {
        axios
          .get(`https://cors-anywhere.herokuapp.com/https://api.rawg.io/api/games?dates=2020-04-01,2020-04-30&platforms=18,1,7`)
          .then(response =>
            response.data.results.map(user => ({
              name: `${user.name}`,
              image: `${user.background_image}`,
              date:`${user.released}`,
              slug:`${user.slug}`,
            }))
          )
          .then(users => {
            this.setState({
              users:users.slice(0,8),
          
            });
          })
      }
    
      componentDidMount() {
        this.getUsers();
      }
    
      render() {
        const { users } = this.state;
        return (
          <React.Fragment>
            <h1 style={{marginTop:"15px"}}>Latest Released Games</h1>
            
            <div className="live-update">
        <div className="inner">
        </div>
        <h6 className="header-6">Live Updates</h6>
        </div>
            <div className="row">
           { users.map(user => {
                  const { name,image,date,slug} = user;
                  return (
                         <div className="column" key={name}>
                      <div className="card">
                        <img src={image} className="image" style={{width:"300",height:"300"}} alt={slug} />
                        <h6 style={{marginTop:"15px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",fontWeight:'bold'}}>{name}</h6>
                  <p>{date}</p>
                  <Link
                    className="button-link"
                    to={{
                      pathname: "games/" + user.slug,
                     
                    }}
                  > <button className="learn-more">Learn More</button>
                  </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
          </React.Fragment>
        );
      }
    
}
export default Latestrelease;