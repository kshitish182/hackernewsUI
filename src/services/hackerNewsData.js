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
    return;
  }

  return ids;
};

export const getNewsItem = async (newsId) => {
  const item = await get(`/item/${newsId}.json?print+pretty`);

  if (!item) {
    return;
  }
  return item;
};
