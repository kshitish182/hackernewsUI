import { get } from '../utils/http';

/**
 *  Gets all the top news id
 *  @params {string} endpoint is provided as param
 *
 *  @returns {data[]} Contains all the top stories id in a array
 */

export const getAllData = async () => {
  const ids = await get('/topstories.json?print=pretty');
  if (!ids) {
    return console.log('empty');
  }

  return ids;
};

export const getNewsItem = async (newsId) => {
  const item = await get(`/item/${newsId}.json?print+pretty`);

  if (!item) {
    return console.log('empty');
  }
  return item;
};

// export const getAllData = () =>
//   http
//     .get('/topstories.json?print=pretty')
//     .then((data) => {
//       console.log(data.data.length, data.data);
//       sortToObj(data.data);
//     })
//     .catch((err) => console.log(err));
