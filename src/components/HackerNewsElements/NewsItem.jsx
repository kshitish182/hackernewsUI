import React from 'react';
import { Link } from 'react-router-dom';

import { getDifferenceInTime } from '../../utils/time';
import { getNewsItem } from '../../services/hackerNewsData';

const NewsItem = ({ newsItemId }) => {
  const [isdataLoading, setLoadingStatus] = React.useState(false);
  const [newsItemData, setNewsItemData] = React.useState(null);

  const loadingState = (
    <li className="list__item preloader-block">
      <div className="preloader-block__content" />
      <div className="preloader-block__content sm mt--5" />
    </li>
  );

  React.useEffect(() => {
    (async () => {
      setLoadingStatus(true);
      const data = await getNewsItem(newsItemId);
      setNewsItemData(data.data);
      setLoadingStatus(false);
    })();
  }, [newsItemId]);

  return (
    <>
      {isdataLoading
        ? loadingState
        : newsItemData && (
            <li className="list__item">
              <Link
                to={{
                  pathname: `/news-feed/${newsItemData.id}`,
                  state: { newsItemData },
                }}
              >
                <h2 className="text--header">{newsItemData.title}</h2>
                <div className="text--secondary">
                  Score: <span className="separator">{newsItemData.score}</span>
                  By: <span className="separator">{newsItemData.by} </span>
                  {getDifferenceInTime(newsItemData.time)}
                </div>
              </Link>
            </li>
          )}
    </>
  );
};

export default NewsItem;
