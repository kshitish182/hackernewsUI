import React from 'react';

import NewsItem from './NewsItem';

const Pagination = (props) => {
  const { newsIds, itemsInView } = props;
  const [paginationSlots, setPaginationSlot] = React.useState(null);
  const [pageIndex, setPageIndex] = React.useState(0);

  /**
   *  This function takes in array of ids
   *  and returns sortedObject
   *
   *  {[index]: [groupedArrays]}
   *
   * @param {array} data
   *
   * @returns {object}
   */

  function sortToObj(data) {
    let sortedObj = {};
    let index = 0;
    let groupedArray = [];

    data.forEach((value, idx) => {
      if (idx % itemsInView === 0 && idx !== 0) {
        groupedArray = [];
        index++;
      }

      groupedArray = [...groupedArray, value];
      sortedObj = { ...sortedObj, [index]: [...groupedArray] };
    });

    return sortedObj;
  }

  React.useEffect(() => setPaginationSlot(sortToObj(newsIds)), [newsIds]);

  const isLastPage = !!paginationSlots && pageIndex === Object.keys(paginationSlots).length - 1;

  return (
    <>
      <ul className="pagination list list--news-feed">
        {!!paginationSlots &&
          paginationSlots[pageIndex].map((value, index) => <NewsItem key={index} newsItemId={value} />)}
      </ul>
      <div className="pagination__action-bar">
        {!!pageIndex && <button className="btn-left-arrow" onClick={() => setPageIndex(pageIndex - 1)} />}
        <div className="circular-index">{pageIndex + 1}</div>
        {!isLastPage ? <button className="btn-right-arrow" onClick={() => setPageIndex(pageIndex + 1)} /> : <></>}
      </div>
    </>
  );
};

export default Pagination;
