import React from 'react';

const Pagination = (props) => {
  const { dataArray, pageLimit, paginationItem, paginationActionBar = '', goToPage = 0 } = props;
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

  React.useEffect(() => {
    if (!goToPage) {
      return;
    }

    return setPageIndex(goToPage - 1);
  });

  React.useEffect(() => setPaginationSlot(sortToObj(dataArray)), [dataArray]);

  const isLastPage = !!paginationSlots && pageIndex === Object.keys(paginationSlots).length - 1;
  const lastPage = !!paginationSlots && Object.keys(paginationSlots).length - 1;

  const isValidPageIndex = !!paginationSlots && pageIndex >= 0 && pageIndex <= Object.keys(paginationSlots).length - 1;

  console.log(!!paginationActionBar);

  const ActionBar =
    !!paginationActionBar && typeof paginationActionBar === 'function' ? (
      <RenderActionBar
        ActionBarComponent={paginationActionBar}
        currentPageIndex={pageIndex}
        isLastPage={isLastPage}
        lastPage={lastPage}
      />
    ) : (
      <div className="pagination__action-bar">
        {!!pageIndex && <button className="btn-left-arrow" onClick={() => setPageIndex(pageIndex - 1)} />}
        <div className="circular-index">{pageIndex + 1}</div>
        {!isLastPage ? <button className="btn-right-arrow" onClick={() => setPageIndex(pageIndex + 1)} /> : <></>}
      </div>
    );

  return (
    <>
      {isValidPageIndex ? (
        <>
          <ul className="pagination list list--news-feed">
            {!!paginationSlots &&
              paginationSlots[pageIndex].map((value, index) => (
                <RenderListItem key={index} listItemData={value} ListComponent={paginationItem} />
              ))}
          </ul>
          {ActionBar}
        </>
      ) : (
        <RenderErrorComponent />
      )}
    </>
  );
};

const RenderListItem = (props) => {
  const { ListComponent } = props;

  if (!!ListComponent && typeof ListComponent !== 'function') {
    return <></>;
  }

  return <ListComponent {...props} />;
};

const RenderActionBar = (props) => {
  const { ActionBarComponent } = props;

  if (!!ActionBarComponent && typeof ActionBarComponent !== 'function') {
    return <></>;
  }

  return <ActionBarComponent {...props} />;
};

const RenderErrorComponent = () => <div>Page Not Found !!!</div>;

export default Pagination;
