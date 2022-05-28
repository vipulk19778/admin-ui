import React from "react";
import { useStyles } from "./pagination-styles";

export const PaginationRenderer = ({ value }) => {
  const classes = useStyles();
  const {
    listItem,
    setListItem,
    pageArray,
    handleRight,
    handleLeft,
    handleClick,
    filterArr,
    setIsAllChecked,
  } = value;

  const deleteById = () => {
    let arrayId = [];
    filterArr.forEach((data) => {
      if (data.isChecked === true) {
        arrayId.push(data.id);
      }
    });

    let tempArr = listItem;

    arrayId.map((id) => {
      return (tempArr = tempArr.filter((data) => data.id !== id));
    });
    setListItem(tempArr);
    setIsAllChecked(false);
  };

  return (
    <>
      <div className={classes.buttonsContainer}>
        <button className={classes.deleteSelected} onClick={deleteById}>
          Delete Selected
        </button>
        <div className={classes.paginationContainer}>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className={`page-item ${classes.listItemPrev}`}>
                <a className="page-link" onClick={handleLeft}>
                  Prev
                </a>
              </li>
              {pageArray.map((value, index) => {
                return (
                  <li
                    className={`page-item ${classes.listItemNumbers}`}
                    key={index}
                  >
                    <a className="page-link" onClick={() => handleClick(value)}>
                      {value}
                    </a>
                  </li>
                );
              })}
              <li className={`page-item ${classes.listItemPrev}`}>
                <a className="page-link" onClick={handleRight}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
