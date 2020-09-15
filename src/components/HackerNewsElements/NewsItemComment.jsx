import React from 'react';
import { sanitize } from 'dompurify';

import { getDifferenceInTime } from '../../utils/time';
import { getNewsItem } from '../../services/hackerNewsData';

const NewsItemComment = ({ commentId }) => {
  const [commentData, setCommentData] = React.useState(null);
  const [isDataLoading, setDataLoadingStatus] = React.useState(false);

  const loadingState = (
    <li className="list__item">
      <div className="comment-block preloader-block">
        <div className="preloader-block__content sm" />
        <div className="preloader-block__content comment-block__comment" />
      </div>
    </li>
  );

  React.useEffect(() => {
    (async function fetchComment() {
      setDataLoadingStatus(true);
      const data = await getNewsItem(commentId);
      setDataLoadingStatus(false);
      setCommentData(data.data);
    })();
  }, [commentId]);

  return (
    <>
      {isDataLoading
        ? loadingState
        : commentData &&
          commentData.text && (
            <li className="list__item">
              <div className="comment-block">
                <div className="text--secondary">
                  <span className="separator text--bold">{commentData.by}</span>
                  <span>{getDifferenceInTime(commentData.time)}</span>
                </div>
                <div
                  className="comment-block__comment"
                  dangerouslySetInnerHTML={{ __html: sanitize(commentData.text) }}
                />
              </div>

              {commentData.kids && (
                <ul className="list list--comment-feed">
                  {commentData.kids.map((kid, idx) => (
                    <NewsItemComment key={`news-comment-${kid}`} commentId={kid} />
                  ))}
                </ul>
              )}
            </li>
          )}
    </>
  );
};

export default NewsItemComment;
