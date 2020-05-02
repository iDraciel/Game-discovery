import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './Games.css';
import axios from 'axios';

class TopOrdered extends Component {
    state = {
        users: [],
      
      };
    
      getUsers() {
        axios
          .get(`https://cors-anywhere.herokuapp.com/https://api.rawg.io/api/games?dates=2019-01-01,2020-12-31&ordering=-added`)
          .then(response =>
            response.data.results.map(user => ({
              name: `${user.name}`,
              image: `${user.background_image}`
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
            <h1>Top Ordered Games</h1>
            
            <div className="live-update">
        <div className="inner">
        </div>
        <h6 className="header-6">Live Updates</h6>
        </div>
            <div className="row">
           { users.map(user => {
                  const { name,image } = user;
                  return (
                         <div className="column" key={name}>
                      <div className="card">
                        <img src={image} className="image" style={{width:"300",height:"300"}} alt={name} />
                        <h6 style={{marginTop:"15px"}}>{name}</h6>
                      <hr />
                      </div>
                    </div>
                  );
                })}
            </div>
          </React.Fragment>
        );
      }
    
}
export default TopOrdered;