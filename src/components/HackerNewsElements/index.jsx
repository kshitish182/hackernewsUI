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
  const { lastPage, isLastPage } = props;

  return (
    <div className="pagination__action-bar">
      {/* button to the first page */}
      {!!pageIndex && (
        <Link to={`news-feed?page=${1}`} className="btn--icon btn--pagination left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevrons-left"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="11 7 6 12 11 17" />
            <polyline points="17 7 12 12 17 17" />
          </svg>
        </Link>
      )}

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
      {/* // button to the lastpage */}
      {!isLastPage ? (
        <Link to={`news-feed?page=${lastPage + 1}`} className="btn--icon btn--pagination right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevrons-right"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="7 7 12 12 7 17" />
            <polyline points="13 7 18 12 13 17" />
          </svg>
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
