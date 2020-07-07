import axios from 'axios'


let api = axios.create({
 headers:  {
   'Client-ID':'yusgahii8qpbeaab0yi3dyh3wg6yw9',
     'accept': 'application/vnd.twitchtv.v5+json',
     'Authorization':'Bearer be6ur42jjtx1dbvbbzngf5fmp2e6mx'
     
 },
   
})
export default api;