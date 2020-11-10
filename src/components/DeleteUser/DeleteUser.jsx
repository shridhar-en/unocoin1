import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  actions: {
    justifyContent: "center",
  },
});

export default function DeleteUser({ isOpen, handleClose, handleSuccess }) {
  const classes = useStyles();
  return (
    <Dialog
      open={isOpen}
      onClose={() => handleClose(null)}
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle id="alert-dialog-title">
        {"Are you sure you want to delete Employee?"}
      </DialogTitle>
      <DialogActions classes={{ root: classes.actions }}>
        <Button onClick={handleSuccess} color="primary" variant="contained">
          Yes
        </Button>
        <Button onClick={handleClose} color="secondary" variant="outlined">
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}
