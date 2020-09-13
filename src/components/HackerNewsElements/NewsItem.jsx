import React from 'react';

import { getNewsItem } from '../../services/hackerNewsData';

const NewsItem = ({ newsItemId }) => {
  const [newsItemData, setNewsItemData] = React.useState(null);
  const [isdataLoading, setLoadingStatus] = React.useState(false);

  const loadingState = <li>Fetching</li>;

  React.useEffect(() => {
    (async () => {
      setLoadingStatus(true);
      const data = await getNewsItem(newsItemId);
      setNewsItemData(data);
      setLoadingStatus(false);
    })();
  }, [newsItemId]);

  return <>{isdataLoading ? loadingState : <li className="card">{newsItemData && newsItemData.data.title}</li>}</>;
};

export default NewsItem;
