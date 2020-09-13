import React from 'react';

import { getNewsItem } from '../../services/hackerNewsData';

const NewsItem = ({ newsItemId }) => {
  const [newsItemData, setNewsItemData] = React.useState(null);
  const [isdataLoading, setLoadingStatus] = React.useState(false);

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
      setNewsItemData(data);
      setLoadingStatus(false);
    })();
  }, [newsItemId]);

  console.log(newsItemData && newsItemData.data);

  return (
    <>
      {isdataLoading ? (
        loadingState
      ) : (
        <li className="list__item">
          <h2 className="text--header">{newsItemData && newsItemData.data.title}</h2>
          <div className="text--secondary">
            By: <span>{newsItemData && newsItemData.data.by} </span>
          </div>
        </li>
      )}
    </>
  );
};

export default NewsItem;
