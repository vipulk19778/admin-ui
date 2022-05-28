import React from "react";
import { useStyles } from "./list-item-styles";
import { ListItemRenderer } from "./list-item-renderer";
import axios from "axios";

export const ListItemContainer = () => {
  const classes = useStyles();

  const [listItem, setListItem] = React.useState([]);
  const [value, setValue] = React.useState("");

  const [isAllChecked, setIsAllChecked] = React.useState(false);

  const [currentPage, setCurrentPage] = React.useState(1);

  let pageLimit = 10;

  let filterArr = [];

  if (value === "") {
    filterArr = listItem;
  } else {
    filterArr = listItem.filter((obj) => {
      let name = obj.name.toLowerCase();
      let email = obj.email.toLowerCase();
      let role = obj.role.toLowerCase();
      let data =
        name.includes(value.toLowerCase()) ||
        email.includes(value.toLowerCase()) ||
        role.includes(value.toLowerCase());
      return data;
    });
  }

  let pages = Math.ceil(filterArr.length / pageLimit);

  let pageArray = [];

  for (let i = 1; i <= pages; i++) {
    pageArray.push(i);
  }

  let si = (currentPage - 1) * pageLimit;

  let ei = si + pageLimit;

  filterArr = filterArr.slice(si, ei);

  const url =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

  React.useEffect(() => {
    loadListItem();
  }, []);

  const loadListItem = async () => {
    return await axios
      .get(url)
      .then((response) => {
        let data = response.data;
        let updatedData = data.map((prevData) => {
          return { ...prevData, isChecked: false };
        });
        setListItem(updatedData);
      })
      .catch((err) => console.log(err.message));
  };

  const handleDeleteButton = (id) => {
    let newArr = [];
    newArr = listItem.filter((obj) => obj.id !== id);
    setListItem([...newArr]);
  };

  const handleEditButton = (id) => {
    let tempArr = [];
    const editItem = filterArr.find((prevData) => {
      return id === prevData.id;
    });
    tempArr = editItem;
  };

  const handleCheckBoxChange = (event) => {
    let { id, checked } = event.target;
    if (id === "selectAll") {
      setIsAllChecked(checked);

      let tempUser = filterArr.map((data) => {
        return { ...data, isChecked: checked };
      });

      if (currentPage === 1) {
        let remainingArr = listItem.slice(ei, listItem.length);
        setListItem([...tempUser, ...remainingArr]);
      }
      if (currentPage > 1 && currentPage < 5) {
        let beforeArr = listItem.slice(0, si);
        let afterArr = listItem.slice(ei, listItem.length);
        setListItem([...beforeArr, ...tempUser, ...afterArr]);
      }
      if (currentPage === 5) {
        let remainingArr = listItem.slice(0, si);
        setListItem([...remainingArr, ...tempUser]);
      }
    } else {
      setIsAllChecked(false);
      setListItem(
        listItem.map((data) => {
          if (data.id === id) data.isChecked = checked;
          return data;
        })
      );
    }
  };

  const store = {
    listItem,
    setListItem,
    currentPage,
    setCurrentPage,
    pageLimit,
    loadListItem,
    pageArray,
    filterArr,
    handleDeleteButton,
    handleEditButton,
    isAllChecked,
    setIsAllChecked,
    classes,
    value,
    setValue,
    handleCheckBoxChange,
    pages,
  };
  return <ListItemRenderer store={store} />;
};
