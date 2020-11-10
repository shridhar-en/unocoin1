import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  dialog: {
    "& .MuiDialog-paper": {
      backgroundColor: "deepskyblue",
      color: "white",
    },
    "& .MuiDialogTitle-root": {
      padding: "8px",
    },
    "& .MuiOutlinedInput-input": {
      padding: "12px",
      background: "white",
      borderRadius: 10,
    },
  },
  container: {
    margin: "1rem 0rem",
  },
  manageUser: {
    padding: 5,
    textTransform: "capitalize",
  },
  textField: {
    width: "100%",
  },
});

export default function ManageUser({
  open,
  employee,
  onSave,
  onChange,
  handleClose,
}) {
  const classes = useStyles();
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xs"
        fullWidth
        className={classes.dialog}
      >
        <DialogTitle id="alert-dialog-title">{"Create User"}</DialogTitle>
        <DialogContent>
          <Grid container alignItems="center" className={classes.container}>
            <Grid item md={4}>
              Name
            </Grid>
            <Grid item md={8}>
              <TextField
                classes={{ root: classes.textField }}
                type="text"
                id="outlined-basic1"
                label=""
                variant="outlined"
                name="name"
                value={employee.name}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" className={classes.container}>
            <Grid item md={4}>
              DOB
            </Grid>
            <Grid item md={8}>
              <TextField
                type="date"
                classes={{ root: classes.textField }}
                id="outlined-basic2"
                label=""
                variant="outlined"
                name="dob"
                value={employee.dob}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" className={classes.container}>
            <Grid item md={4}>
              City
            </Grid>
            <Grid item md={8}>
              <TextField
                classes={{ root: classes.textField }}
                id="outlined-basic3"
                type="text"
                label=""
                variant="outlined"
                name="city"
                value={employee.city}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" className={classes.container}>
            <Grid item md={4}>
              Phone
            </Grid>
            <Grid item md={8}>
              <TextField
                classes={{ root: classes.textField }}
                id="outlined-basic4"
                type="number"
                label=""
                variant="outlined"
                name="phone"
                value={employee.phone}
                onChange={onChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onSave}
            disabled={
              employee.phone === "" ||
              employee.name === "" ||
              employee.dob === "" ||
              employee.city === ""
            }
            color="primary"
            variant="contained"
          >
            Save Changes
          </Button>
          <Button onClick={handleClose} color="secondary" variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
