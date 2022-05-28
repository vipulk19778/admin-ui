import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
    width: "92%",
  },
  listItemNumbers: {
    cursor: "pointer",
  },
  listItemPrev: {
    cursor: "pointer",
  },
  listItemNext: {
    cursor: "pointer",
  },
  buttonsContainer: {
    display: "flex",
    width: "90%",
    margin: "0 auto",
  },
  deleteSelected: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
    width: "8%",
    background: "crimson",
    color: "white",
    fontSize: "12px",
    border: "none",
    outline: "none",
    textAlign: "center",
    borderRadius: "20px",
    height: "35px",
    paddingTop: "7px",
  },
});
