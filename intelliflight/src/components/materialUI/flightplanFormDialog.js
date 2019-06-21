import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import FlightPlanForm from "../forms/FlightPlanForm";

export default function FlightPlanFormDialog(props) {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="contained" color="primary" className="btn-color" onClick={handleClickOpen}>
        Plan Flight
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" className="dialog-title orange">PLAN A ROUTE</DialogTitle>
        <DialogContent className="orange pirep-form">
        <div className="postform">
           <FlightPlanForm 
                submitFlightPlan={props.submitFlightPlan}
           />
        </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}