import axios from 'axios'


let api = axios.create({
 headers:  {
   'Client-ID':'yusgahii8qpbeaab0yi3dyh3wg6yw9',
     'accept': 'application/vnd.twitchtv.v5+json',
     'Authorization':'Bearer p93gkuxz11zgnmrg5px1k73mnugqti'
     
 },
   
})
export default api;