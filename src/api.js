import axios from 'axios'


let api = axios.create({
 headers:  {
   'Client-ID':'yusgahii8qpbeaab0yi3dyh3wg6yw9',
     'accept': 'application/vnd.twitchtv.v5+json',
     'Authorization':'Bearer 2q9wp39rs3uouqphk76c4v3ayf7ya6'
     
 },
   
})
export default api;