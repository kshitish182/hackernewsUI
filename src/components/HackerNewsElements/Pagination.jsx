import React from 'react';

import NewsItem from './NewsItem';

const Pagination = ({ newsIds }) => {
  const [paginationSlots, setPaginationSlot] = React.useState(null);
  const [pageIndex, setPageIndex] = React.useState(0);

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
      <ul className="pagination list">
        {!!paginationSlots &&
          paginationSlots[pageIndex].map((value, index) => <NewsItem key={index} newsItemId={value} />)}
      </ul>
      <div className="pagination__action-bar">
        {!!pageIndex && <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>}
        <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
      </div>
    </>
  );
};

export default Pagination;
