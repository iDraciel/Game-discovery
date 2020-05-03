import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './Games.css';
import axios from 'axios';
import {Helmet} from "react-helmet";

class Crackwatch extends Component {
    state = {
        users: [],
      
      };
    
      getUsers() {
        axios
          .get(`https://api.rawg.io/api/games?dates=2020-05-05,2021-12-31`)
          .then(response =>
            response.data.results.map(user => ({
              name: `${user.name}`,
              image: `${user.background_image}`,
             date:`${user.released}`
            
            }))
          )
          .then(users => {
            this.setState({
              users:users.slice(0,10),
          
            });
          })
      }
    
      componentDidMount() {
        this.getUsers();
      }
    
      render() {
        const { users } = this.state;
        return (<div>
          <Helmet><title>Upcoming Games</title></Helmet>
          <React.Fragment>
            <h1>Upcoming Games</h1>
            
            <div className="live-update">
        <div className="inner">
        </div>
        <h6 className="header-6">Live Updates</h6>
        </div>
            <div className="row">
           { users.map(user => {
                  const { name,image,date} = user;
                  return (
                         <div className="column" key={name}>
                      <div className="card">
                        <img src={image} className="image" style={{width:"300",height:"300"}} alt={name} />
                        <h6 style={{marginTop:"15px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}}>{name}</h6>
                        <p>{date}</p>
                        
                     
                      </div>
                    </div>
                  );
                })}
            </div>
          </React.Fragment>
          </div>
        );
      }
    
}
export default Crackwatch;
