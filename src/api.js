import axios from 'axios'


let api = axios.create({
 headers:  {
       'Client-ID':'vozsmfvwspvelkmffqnoz0ackzvhwn',
     'accept': 'application/vnd.twitchtv.v5+json',
     'Authorization':'Bearer 64gy6t5nv3w91tupci1w6c8gqasgqt'
     
 },
   
})
export default api;