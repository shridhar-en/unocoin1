import React, { useState } from "react";
import Home from "../components/Home/Home";
import { Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import ManageUser from "../components/ManageUser/ManageUser";
import DeleteUser from "../components/DeleteUser/DeleteUser";

const useStyles = makeStyles({
  container: {
    marginTop: "2rem",
  },
  toogleModal: {
    padding: 5,
    textTransform: "capitalize",
  },
});

const empData = [
  {
    id: 1,
    name: "Akshay",
    city: "Pune",
    dob: "1994-10-26",
    phone: "1234567890",
  },
  {
    id: 2,
    name: "Shridhar",
    city: "Bangalore",
    dob: "1994-29-08",
    phone: "8970589947",
  },
  {
    id: 3,
    name: "Kiran",
    city: "Mysore",
    dob: "1995-12-26",
    phone: "9743838986",
  },
  {
    id: 4,
    name: "Akash",
    city: "Delhi",
    dob: "1994-10-26",
    phone: "1234567890",
  },
  {
    id: 5,
    name: "Karthik",
    city: "Bihar",
    dob: "1994-10-24",
    phone: "8722999404",
  },
];

const initalState = {
  id: "",
  name: "",
  dob: "",
  city: "",
  phone: "",
};

function Main() {
  const classes = useStyles();
  const [employeeData, setEmployeeData] = useState(empData);

  const [toogleModal, setToogleModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [employee, setEmployee] = useState(initalState);

  const [modalState, setModalState] = useState("ADD");

  const onChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const toogleAddUser = () => {
    setModalState("ADD");
    setEmployee(initalState);
    setToogleModal(!toogleModal);
  };

  const toogleDeleteUser = (deleteUser) => {
    setEmployee(deleteUser);
    setDeleteModal(!deleteModal);
  };

  const onSave = () => {
    let newData = [...employeeData];
    if (modalState === "UPDATE") {
      let empIndex = newData.findIndex((emp) => emp.id === employee.id);
      //record is present
      // -1 is record is not present
      if (empIndex !== -1) {
        newData[empIndex] = employee;
      }
    } else {
      newData.push({ ...employee, id: newData.length + 1 });
    }
    setEmployeeData(newData);
    setToogleModal(false);
  };

  const onUpdate = (employee) => {
    setModalState("UPDATE");
    setEmployee(employee);
    setToogleModal(true);
  };

  const onDelete = () => {
    let newData = [...employeeData];
    newData = newData.filter((emp) => emp.id !== employee.id);
    setEmployeeData(newData);
    setDeleteModal(false);
  };

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Box textAlign="right">
        <Button
          variant="contained"
          color="primary"
          className={classes.toogleModal}
          onClick={toogleAddUser}
        >
          + Add User
        </Button>
      </Box>
      <Home
        onUpdate={onUpdate}
        onDelete={toogleDeleteUser}
        employeeData={employeeData}
      />
      <ManageUser
        open={toogleModal}
        handleClose={toogleAddUser}
        employee={employee}
        onChange={onChange}
        onSave={onSave}
      />
      <DeleteUser
        isOpen={deleteModal}
        handleClose={toogleDeleteUser}
        handleSuccess={onDelete}
      />
    </Container>
  );
}
export default Main;
