import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import PirepHistoryInput from "../forms/PIREPHistoryInput"

export default function FormDialog(props) {
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
        Hour Window
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" className="dialog-title orange">SUBMIT NEW PIREP</DialogTitle>
        <DialogContent className="orange pirep-form">
        <div className="postform">
          <PirepHistoryInput 
            // handleClose={handleClose}
            // updatePireps={props.updatePireps}
          />
        </div>

        </DialogContent>
      </Dialog>
    </div>
  );
}