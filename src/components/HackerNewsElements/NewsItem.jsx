import React from 'react';

import { getDifferenceInTime } from '../../utils/time';
import { getNewsItem } from '../../services/hackerNewsData';

const NewsItem = ({ newsItemId, expandNewsDetail, getSelectedNewsItemData }) => {
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

  const handleNewsItemClick = () => {
    getSelectedNewsItemData(newsItemData);
    expandNewsDetail(true);
  };

  return (
    <>
      {isdataLoading
        ? loadingState
        : newsItemData && (
            <li className="list__item" onClick={handleNewsItemClick}>
              <h2 className="text--header">{newsItemData.title}</h2>
              <div className="text--secondary">
                Score: <span className="separator">{newsItemData.score}</span>
                By: <span className="separator">{newsItemData.by} </span>
                {getDifferenceInTime(newsItemData.time)}
              </div>
            </li>
          )}
    </>
  );
};

export default NewsItem;
