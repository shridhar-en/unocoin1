import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/EditOutlined";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";

const useStyles = makeStyles({
  container: {
    marginTop: "2rem",
  },
  paper: {
    marginTop: "1rem",
  },
  table: {
    minWidth: 650,
    "& .MuiTableCell-root": {
      border: "1px solid rgba(224, 224, 224, 1)",
    },
  },
  header: {
    backgroundColor: "deepskyblue",
  },
  tCell: {
    fontWeight: "600",
    fontFamily: "unset",
  },
  addUser: {
    padding: 5,
    textTransform: "capitalize",
  },
});

function Home({ onUpdate, onDelete, employeeData }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell classes={{ root: classes.tCell }}>Id</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">City</TableCell>
            <TableCell align="center">DOB</TableCell>
            <TableCell align="center">Phone No.</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeData.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center" className={classes.tBorder}>
                {row.name}
              </TableCell>
              <TableCell align="center">{row.city}</TableCell>
              <TableCell align="center">{row.dob}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">
                <EditIcon onClick={() => onUpdate(row)} />
                <DeleteIcon onClick={() => onDelete(row)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Home;
