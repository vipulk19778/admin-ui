import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import ListItem from "@mui/material/ListItem";
import { PaginationContainer } from "../pagination/pagination-container";

export const ListItemRenderer = ({ store }) => {
  const {
    filterArr,
    handleDeleteButton,
    handleEditButton,
    isAllChecked,
    classes,
    value,
    setValue,
    handleCheckBoxChange,
  } = store;

  return (
    <>
      <div className={classes.contactListItemContainer}>
        <h1 className={classes.h1}>Admin UI</h1>

        <div className={classes.tableContainer}>
          <div className={classes.searchBarContainer}>
            <input
              type="text"
              className={classes.searchBar}
              placeholder="Search by name, email or role"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <SearchIcon className={classes.searchIcon} />
          </div>
          <div className={classes.tableToDoStyle}>
            <div className={classes.tableHeader}>
              <div>
                <input
                  type="checkbox"
                  className={classes.tableHeader_checkBox}
                  id="selectAll"
                  checked={isAllChecked}
                  onChange={handleCheckBoxChange}
                />
              </div>
              <div className={classes.tableHeaderName}>Name</div>
              <div className={classes.tableHeaderEmail}>Email</div>
              <div className={classes.tableHeaderRole}>Role</div>
            </div>
            <div className={classes.tableHeaderActions}>Actions</div>
          </div>
          {filterArr.length === 0 ? (
            <div>No Data Found</div>
          ) : (
            filterArr.map((item) => (
              <div className={classes.todoStyle} key={item.id}>
                <ListItem className={classes.li} id={item.id}>
                  <div className={classes.detailsContainer}>
                    <div>
                      <input
                        type="checkbox"
                        className={classes.detailsContainer_checkBox}
                        id={item.id}
                        checked={item.isChecked}
                        onChange={handleCheckBoxChange}
                      />
                    </div>
                    <div className={classes.name}>{item.name}</div>
                    <div className={classes.email}>{item.email}</div>
                    <div className={classes.role}>{item.role}</div>
                  </div>
                </ListItem>
                <div className={classes.iconsContainer}>
                  <EditIcon
                    className={classes.edit}
                    aria-hidden="true"
                    onClick={() => {
                      handleEditButton(item.id);
                    }}
                  />
                  <DeleteOutlineIcon
                    className={classes.delete}
                    aria-hidden="true"
                    id={item.id}
                    onClick={() => {
                      handleDeleteButton(item.id);
                    }}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <PaginationContainer store={store} />
    </>
  );
};
