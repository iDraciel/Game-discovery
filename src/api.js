import axios from 'axios'


let api = axios.create({
 headers:  {
       'Client-ID':'vozsmfvwspvelkmffqnoz0ackzvhwn',
     'accept': 'application/vnd.twitchtv.v5+json',
     'Authorization':'Bearer usj7focn70capa7oeu03f09lh3295s'
     
 },
   
})
export default api;