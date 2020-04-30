import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './Games.css';
import axios from 'axios';
class Crackgames extends Component {
    state = {
        users: []
      };
      fetchUsers() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.crackwatch.com/api/games?page=0&is_released=true`)
          .then(response =>{
            this.setState({users: response.data.slice(0,8)}) 
        });     
      }
      componentDidMount() {
        this.fetchUsers();
      }
      render() {
        const { users } = this.state;
        return (
          <React.Fragment>
              <h1>Latest Released Games</h1>
              <div className="live-update">
        <div className="inner">
        </div>
        <h6 className="header-6">Live Updates</h6>
        </div>
            <div className="row">
              {users.map(user => {
                const {releaseDate,_id, image } = user;
                return (
                  <div className="column" key={_id}>
                      <div className="card">
                    <img alt={image} className="image" src={image} style={{width:"300",height:"300"}} />
                    <p>{releaseDate}</p>
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
export default Crackgames;