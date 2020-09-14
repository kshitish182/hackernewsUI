import React from 'react';
import { sanitize } from 'dompurify';

import { getNewsItem } from '../../services/hackerNewsData';

const NewsItemComment = ({ commentId }) => {
  const [commentData, setCommentData] = React.useState(null);
  const [isDataLoading, setDataLoadingStatus] = React.useState(false);

  const loadingState = 'Fetching';

  React.useEffect(() => {
    (async function fetchComment() {
      setDataLoadingStatus(true);
      const data = await getNewsItem(commentId);
      setDataLoadingStatus(false);
      setCommentData(data.data);
    })();
  }, [commentId]);

  console.log(commentData);

  return (
    <>
      {isDataLoading
        ? loadingState
        : commentData && (
            <div className="comment-block">
              <div dangerouslySetInnerHTML={{ __html: sanitize(commentData.text) }} />
              {commentData &&
                commentData.kids &&
                commentData.kids.map((kid, idx) => <NewsItemComment key={`news-comment-${kid}`} commentId={kid} />)}
            </div>
          )}
    </>
  );
};

export default NewsItemComment;
