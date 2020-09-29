import React from 'react';

import Pagination from './Pagination';
import { getAllData } from '../../services/hackerNewsData';

const NEWS_ITEMS_IN_VIEW = 10;
const NewsDashboard = () => {
  const [newsIds, updateNewsIds] = React.useState([]);
  const [isDataFetching, setDataFetchingStatus] = React.useState(true);

  React.useEffect(() => {
    async function fetchAllData() {
      setDataFetchingStatus(true);
      const data = await getAllData();
      updateNewsIds(data.data);
      setDataFetchingStatus(false);
    }

    fetchAllData();
  }, []);

  if (isDataFetching) {
    return <></>;
  }

  return <Pagination newsIds={newsIds} itemsInView={NEWS_ITEMS_IN_VIEW} />;
};

export default NewsDashboard;
