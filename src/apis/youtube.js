import axios from 'axios'
const KEY = 'AIzaSyCOfNZ6b_iFrlPqv7ZZVAQ02GQPA5py27Q'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,

    }

})