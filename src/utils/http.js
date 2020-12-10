import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0',
  headers: {
    'content-type': 'application/json',
  },
});

export const get = async (endpoint) => {
  try {
    const data = await http.get(endpoint);
    return data;
  } catch (err) {
    console.log(err);
  }
};
