import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  contactListItemContainer: {
    height: "570px",
    overflow: "hidden",
    width: "100%",
    background: "white !important",
    "@media screen and (max-width:768px)": {
      width: "100%",
    },
  },
  h1: {
    color: "white",
    backgroundColor: "#8566aa",
    padding: "10px 0 10px 0",
    marginTop: "0",
    marginBottom: "10px",
  },

  newContactForm: {
    fontSize: "12px",
    cursor: "pointer",
    boxShadow: " 5px 5px 15px -5px rgba(0, 0, 0, 0.3)",
    textDecoration: "none",
    "@media (max-width:768px)": {
      fontSize: "14px",
    },
  },

  tableContainer: {
    position: "relative",
    width: "90%",
    margin: "10px auto",
    "@media (max-width:768px)": {
      margin: "20px auto",
    },
  },
  searchBarContainer: {
    position: "relative",
  },
  searchBar: {
    width: "100%",
    height: "40px",
    border: "0.1px solid #e0e4e5",
    marginBottom: "15px",
    padding: "5px 0px 5px 10px",
    "&:focus": {
      outline: "none",
    },
  },
  searchIcon: {
    position: "absolute",
    right: "2px",
    top: "8px",
    color: "#8566aa",
    background: "white",
    fontSize: "30px !important",
    cursor: "pointer",
  },
  todoStyle: {
    borderBottom: "0.1px solid #e0e4e5",
  },
  tableToDoStyle: {
    borderBottom: "0.1px solid #e0e4e5",
    position: "relative",
    fontWeight: "bold",
    color: "purple",
    width: "100%",
  },
  li: {
    paddingLeft: "0px",
    listStyle: "none",
    textAlign: "left",
    fontSize: "12px",
    fontWeight: "bold",
    minHeight: "40px",
    display: "flex",
    alignItems: "center",
    color: "#8566aa",
    cursor: "pointer",
    "&:hover": {
      background: "#f7f7f7",
    },
    "@media (max-width:768px)": {
      fontSize: "10px",
    },
  },
  detailsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(auto, 300px))",
    textAlign: "left",
  },
  tableHeader: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(200px, auto))",
    textAlign: "left",
  },
  tableHeader_checkBox: {
    position: "relative",
    left: "7%",
    "@media (min-width:1300px)": {
      left: "5%",
    },
  },
  tableHeaderName: {
    position: "relative",
    right: "5%",
    "@media (min-width:1300px) and (max-width:1550px)": {
      left: "0px",
    },
  },
  tableHeaderEmail: {
    position: "relative",
    right: "12%",
    "@media (min-width:1300px) and (max-width:1550px)": {
      left: "0px",
    },
  },
  role: {
    "@media (min-width:1430px)": {
      textAlign: "center",
    },
  },
  tableHeaderRole: {
    position: "relative",
    "@media (min-width:1300px)": {
      right: "10px",
    },
    "@media (min-width:1430px)": {
      right: "0px",
      left: "30px",
    },
  },
  tableHeaderActions: {
    position: "absolute",
    right: "5px",
    marginTop: "-25px",
  },
  iconsContainer: {
    position: "absolute",
    right: "0",
    marginTop: "-32px",
  },
  edit: {
    width: "20px",
    height: "20px",
    margin: "0 10px 0 20px",
    color: "#8566aa",
    cursor: "pointer",
    "&:hover": { color: "#20bf6b" },
  },
  delete: {
    width: "20px",
    height: "20px",
    color: "crimson",
    cursor: "pointer",
    "&:hover": { color: "red" },
  },
});
