import React from 'react';

import NewsItem from './NewsItem';
import NewsItemDetail from './NewsItemDetail';

const Pagination = ({ newsIds }) => {
  const [paginationSlots, setPaginationSlot] = React.useState(null);
  const [pageIndex, setPageIndex] = React.useState(0);
  const [isNewsDetailExpanded, expandNewsDetail] = React.useState(false);
  const [selectedNewsItemData, getSelectedNewsItemData] = React.useState(null);

  function sortToObj(data) {
    // console.log(data);

    let arrayObj = {};
    // const compartment = Math.floor(data.length / 10);
    let i = 0;
    let arr = [];
    data.map((value, idx) => {
      if (idx % 10 === 0 && idx !== 0) {
        arr = [];
        i++;
      }
      arr = [...arr, value];
      arrayObj = { ...arrayObj, [i]: [...arr] };
    });

    setPaginationSlot(arrayObj);
  }

  React.useEffect(() => sortToObj(newsIds), [newsIds]);

  return (
    <>
      {isNewsDetailExpanded ? (
        <NewsItemDetail newsItemData={selectedNewsItemData} />
      ) : (
        <>
          <ul className="pagination list list--news-feed">
            {!!paginationSlots &&
              paginationSlots[pageIndex].map((value, index) => (
                <NewsItem
                  key={index}
                  newsItemId={value}
                  expandNewsDetail={expandNewsDetail}
                  getSelectedNewsItemData={getSelectedNewsItemData}
                />
              ))}
          </ul>
          <div className="pagination__action-bar">
            {!!pageIndex && <button className="btn-left-arrow" onClick={() => setPageIndex(pageIndex - 1)} />}
            <div className="circular-index">{pageIndex + 1}</div>
            <button className="btn-right-arrow" onClick={() => setPageIndex(pageIndex + 1)} />
          </div>
        </>
      )}
    </>
  );
};

export default Pagination;
