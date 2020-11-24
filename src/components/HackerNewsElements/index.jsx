import React from 'react';
import { useLocation, Link } from 'react-router-dom';

// import Pagination from './Pagination';
import { getAllData } from '../../services/hackerNewsData';

import NewsItem from './NewsItem';
import Pagination from '../common/Pagination';

const loadingState = (
  <div className="flex-wrapper flex-wrapper--ctr empty-state">
    <div className="loader-wrapper">
      <div className="loader" />
    </div>
    <div className="text--secondary">Loading Feed</div>
  </div>
);

const useQuery = () => new URLSearchParams(useLocation().search);

const PagninationActionBar = (props) => {
  const pageIndex = props.currentPageIndex;

  return (
    <div className="pagination__action-bar">
      {!!pageIndex && (
        <Link to={`news-feed?page=${pageIndex}`}>
          <button className="btn-left-arrow" />
        </Link>
      )}
      <div className="circular-index">{pageIndex + 1}</div>
      {!props.isLastPage ? (
        <Link to={`news-feed?page=${pageIndex + 2}`}>
          <button className="btn-right-arrow" />
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
};

const NEWS_ITEMS_IN_VIEW = 10;
const NewsDashboard = (props) => {
  const [newsIds, updateNewsIds] = React.useState([]);
  const [isDataFetching, setDataFetchingStatus] = React.useState(false);
  const getPageFromQueryParam = useQuery().get('page');

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

  return (
    <Pagination
      dataArray={newsIds}
      paginationItem={NewsItem}
      paginationActionBar={PagninationActionBar}
      pageLimit={NEWS_ITEMS_IN_VIEW}
      goToPage={getPageFromQueryParam}
    />
  );
};

export default NewsDashboard;
