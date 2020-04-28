import axios from 'axios'


let api = axios.create({
 headers:  {
     'Client-ID': 'vozsmfvwspvelkmffqnoz0ackzvhwn',
     'accept': 'application/vnd.twitchtv.v5+json'
 }
})
export default api;