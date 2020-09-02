import axios from 'axios'


let api = axios.create({
 headers:  {
   'Client-ID':'yusgahii8qpbeaab0yi3dyh3wg6yw9',
     'accept': 'application/vnd.twitchtv.v5+json',
     'Authorization':'Bearer krx5ah3fwm0fmm0k1kbex97k3dlblm'
     
 },
   
})
export default api;