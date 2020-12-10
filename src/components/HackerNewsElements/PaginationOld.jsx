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
   * @param {array} data[]
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

  const lastPage = !!paginationSlots && Object.keys(paginationSlots).length - 1;
  const isLastPage = !!paginationSlots && pageIndex === lastPage;

  return (
    <>
      <ul className="pagination list list--news-feed">
        {!!paginationSlots &&
          paginationSlots[pageIndex].map((value, index) => <NewsItem key={index} newsItemId={value} />)}
      </ul>
      <div className="pagination__action-bar">
        {!!pageIndex && (
          <button className="btn--icon left" onClick={() => setPageIndex(0)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chevrons-left"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="11 7 6 12 11 17" />
              <polyline points="17 7 12 12 17 17" />
            </svg>
          </button>
        )}
        {!!pageIndex && <button className="btn-left-arrow" onClick={() => setPageIndex(pageIndex - 1)} />}
        <div className="circular-index">{pageIndex + 1}</div>
        {!isLastPage ? <button className="btn-right-arrow" onClick={() => setPageIndex(pageIndex + 1)} /> : <></>}
        {!isLastPage ? (
          <button className="btn--icon right" onClick={() => setPageIndex(lastPage)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chevrons-right"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="7 7 12 12 7 17" />
              <polyline points="13 7 18 12 13 17" />
            </svg>
          </button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Pagination;
