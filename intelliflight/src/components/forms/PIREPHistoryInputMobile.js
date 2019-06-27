import React from "react";
import Button from "@material-ui/core/Button";

class PirepHistoryInput extends React.Component {
  state = {
    hours: 2
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  updateHours = e => {
    e.preventDefault();
    this.props.updateHourWindow(this.state.hours);
  };

  render() {
    return (
      <form className="mobilehourForm" onSubmit={this.updateHours}>
        <p>PIREP History (hours)</p>
        <input
          className="custom-style"
          name="hours"
          value={this.state.hours}
          placeholder="Hour Window"
          onChange={this.handleChange}
        />
        <button className="hour-button-container"
        onClick={this.props.handleClose}>
          <Button
            className="submit-btn-style"
            variant="contained"
            color="primary"
              
          >
            Update
          </Button>
        </button>
      </form>
    );
  }
}

export default PirepHistoryInput;
