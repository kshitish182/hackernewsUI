import React from 'react';
import NewsItemComment from './NewsItemComment';

const NewsItemDetail = ({ newsItemData }) => {
  console.log(newsItemData);

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
          <div className="text--secondary text--md mt--30">Comments</div>
          {!!newsItemData.kids.length &&
            newsItemData.kids.map((kid, idx) => <NewsItemComment key={`news-comment-${kid}`} commentId={kid} />)}
        </>
      )}
    </>
  );
};

export default NewsItemDetail;
