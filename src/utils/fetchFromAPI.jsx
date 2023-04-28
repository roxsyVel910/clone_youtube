
import axios from 'axios';

export const BASE_URL ='https://youtube-v3-alternative.p.rapidapi.com/video';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '4b29d7264fmsh963aca413fb60a8p10c826jsndb3c084aa14a',
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
    
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
console.log("data mfsofmsofm soy", data)
  return data;
};

