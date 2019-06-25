import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
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
        <div className="plan-flight-container">
          <DialogTitle id="form-dialog-title" className="dialog-title orange">PLAN A ROUTE</DialogTitle>
          <DialogContent className="orange post-form">
            <FlightPlanForm 
              submitFlightPlan={props.submitFlightPlan}
              handleClose={handleClose}
            />
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}