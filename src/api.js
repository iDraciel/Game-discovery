import axios from 'axios'


let api = axios.create({
 headers:  {
     
     'accept': 'application/vnd.twitchtv.v5+json',
    'Authorization' :'Bearer juo7kui3bff2s4lmvdpgps0ofx0ag1'
     
 },
   
})
export default api;