import React from 'react';

// import Pagination from './Pagination';
import { getAllData } from '../../services/hackerNewsData';

import Pagination from '../common/Pagination';
import NewsItem from './NewsItem';
// import

const loadingState = (
  <div className="flex-wrapper flex-wrapper--ctr empty-state">
    <div className="loader-wrapper">
      <div className="loader" />
    </div>
    <div className="text--secondary">Loading Feed</div>
  </div>
);

const NEWS_ITEMS_IN_VIEW = 10;
const NewsDashboard = () => {
  const [newsIds, updateNewsIds] = React.useState([]);
  const [isDataFetching, setDataFetchingStatus] = React.useState(false);

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
    return loadingState;
  }

  // return <Pagination newsIds={newsIds} itemsInView={NEWS_ITEMS_IN_VIEW} />;

  return <Pagination dataArray={newsIds} paginationItem={NewsItem} pageLimit={NEWS_ITEMS_IN_VIEW} />;
};

export default NewsDashboard;
