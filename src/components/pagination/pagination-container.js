import React from "react";
import { PaginationRenderer } from "./pagination-renderer";

export const PaginationContainer = ({ store }) => {
  const {
    listItem,
    setListItem,
    currentPage,
    setCurrentPage,
    pageLimit,
    loadListItem,
    pageArray,
    setPageArray,
    filterArr,
    handleDeleteButton,
    isAllChecked,
    setIsAllChecked,
    pages,
  } = store;

  const handleLeft = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleRight = () => {
    if (currentPage < pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClick = (value) => {
    if (value !== currentPage) {
      setCurrentPage(value);
    }
  };

  const value = {
    listItem,
    setListItem,
    currentPage,
    setCurrentPage,
    pageLimit,
    loadListItem,
    pageArray,
    setPageArray,
    handleRight,
    handleLeft,
    handleClick,
    filterArr,
    handleDeleteButton,
    isAllChecked,
    setIsAllChecked,
    pages,
  };

  return <PaginationRenderer value={value} />;
};
