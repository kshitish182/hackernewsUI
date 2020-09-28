import React from 'react';
import NewsItemComment from './NewsItemComment';

const NewsItemDetail = (props) => {
  React.useEffect(() => {
    if (!props.location || !props.location.state || !props.location.state.newsItemData) {
      return;
    }

    setNewsItemData(props.location.state.newsItemData);
  }, [props.location]);

  const [newsItemData, setNewsItemData] = React.useState('');

  return (
    <>
      {newsItemData && (
        <>
          <h2 className="text--header text--lg">
            <a
              className="newsItem__header"
              href={newsItemData.url}
              target="_blank"
              title={newsItemData.url}
              rel="noopener noreferrer"
            >
              {newsItemData.title}
            </a>
          </h2>
          <h3 className="text--header text--md mx--30">Comments</h3>
          <ul className="list list--comment-feed">
            {newsItemData.kids && !!newsItemData.kids.length ? (
              newsItemData.kids.map((kid) => <NewsItemComment key={`news-comment-${kid}`} commentId={kid} />)
            ) : (
              <div className="text--secondary">No comments found</div>
            )}
          </ul>
        </>
      )}
    </>
  );
};

export default NewsItemDetail;
