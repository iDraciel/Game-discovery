import axios from 'axios'


let api = axios.create({
 headers:  {
      'Client-ID':'vozsmfvwspvelkmffqnoz0ackzvhwn',
     'accept': 'application/vnd.twitchtv.v5+json',
     'Authorization':'Bearer kqxswv28xsvyahua5g14llb9balawy'
     
 },
   
})
export default api;