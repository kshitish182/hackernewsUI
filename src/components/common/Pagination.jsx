import React from 'react';

const Pagination = (props) => {
  const { dataArray, pageLimit, paginationItem, paginationActionBar = '' } = props;
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
      if (idx % pageLimit === 0 && idx !== 0) {
        groupedArray = [];
        index++;
      }

      groupedArray = [...groupedArray, value];
      sortedObj = { ...sortedObj, [index]: [...groupedArray] };
    });

    return sortedObj;
  }

  React.useEffect(() => setPaginationSlot(sortToObj(dataArray)), [dataArray]);

  const isLastPage = !!paginationSlots && pageIndex === Object.keys(paginationSlots).length - 1;

  const ActionBar =
    !!paginationActionBar && typeof paginationActionBar === 'function' ? (
      paginationActionBar
    ) : (
      <div className="pagination__action-bar">
        {!!pageIndex && <button className="btn-left-arrow" onClick={() => setPageIndex(pageIndex - 1)} />}
        <div className="circular-index">{pageIndex + 1}</div>
        {!isLastPage ? <button className="btn-right-arrow" onClick={() => setPageIndex(pageIndex + 1)} /> : <></>}
      </div>
    );

  console.log(paginationItem);

  return (
    <>
      <ul className="pagination list list--news-feed">
        {!!paginationSlots &&
          paginationSlots[pageIndex].map((value, index) => (
            <RenderListItem key={index} listItemData={value} listComponent={paginationItem} />
          ))}
      </ul>
      {ActionBar}
    </>
  );
};

const RenderListItem = (props) => {
  const { listComponent } = props;

  if (!!listComponent && typeof listComponent !== 'function') {
    return <></>;
  }

  return React.createElement(listComponent, { ...props }, null);
};

export default Pagination;
