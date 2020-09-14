import React from 'react';
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

  const getMarkup = () => {
    return {
      _html: 'commentData.text',
    };
  };

  // const htmlText = commentData &&  {_html: "<div>" + commentData.text + "</div>"} || {_html: "<div><div/>"};
  console.log(commentData);

  return (
    <>
      {isDataLoading
        ? loadingState
        : commentData && (
            <div className="comment-block">
              <div dangerouslySetInnerHTML={getMarkup()} />
              {/* {commentData.text} */}
              {commentData &&
                commentData.kids &&
                commentData.kids.map((kid, idx) => <NewsItemComment commentId={kid} />)}
            </div>
          )}
    </>
  );
};

export default NewsItemComment;
