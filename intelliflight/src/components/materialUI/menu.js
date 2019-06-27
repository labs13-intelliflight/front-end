import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";

import FormDialog from "./formdialog";
import FlightPlanFormDialog from "./flightplanFormDialog";
import HourFormDialog from "./hoursformdialog";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  paper: {
    marginRight: theme.spacing(2)
  }
}));

export default function MenuListComposition(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  function handleToggle() {
    setOpen(prevOpen => !prevOpen);
  }

  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls="menu-list-grow"
          aria-haspopup="true"
          onClick={handleToggle}
          variant="contained"
          color="primary"
        >
          OPTIONS
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          keepMounted
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper id="menu-list-grow">
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList className="orange">
                    <MenuItem onClick={handleClose}>
                      <HourFormDialog
                        handleChange={props.handleChange}
                        updateHourWindow={props.updateHourWindow}
                      />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <FormDialog updatePireps={props.updatePireps} />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <FlightPlanFormDialog
                        submitFlightPlan={props.submitFlightPlan}
                      />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Button
                        variant="contained"
                        color="primary"
                        className="btn-color menu-button"
                        onClick={props.logout}
                      >
                        Log out
                      </Button>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
