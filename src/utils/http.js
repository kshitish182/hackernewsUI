import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0',
  headers: {
    'content-type': 'application/json',
  },
});

export const getAllData = () =>
  http
    .get('/topstories.json?print=pretty')
    .then((data) => {
      console.log(data.data.length);
      sortToObj(data.data);
    })
    .catch((err) => console.log(err));

function sortToObj(data) {
  // console.log(data);

  let arrayObj = {};
  const compartment = Math.floor(data.length / 10);
  let i = 0;
  let arr = [];
  data.map((value, idx) => {
    if (idx % 10 === 0 && idx !== 0) {
      arr = [];
      i++;
    }
    arr = [...arr, value];
    arrayObj = { ...arrayObj, [i]: [...arr] };
  });

  console.log(arrayObj);
}
