import React from 'react';

class PirepHistoryInput extends React.Component {

    state = {
        hours: 2
    }

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
    };

    updateHours = e => {
        e.preventDefault();
        this.props.updateHourWindow(this.state.hours);
    }

    render() {
        return (
            <form className="hourForm" onSubmit={this.updateHours}>
            <p>PIREP History (hours)</p>
            <input
                className="custom-style"
                name="hours"
                value={this.state.hours}
                placeholder="Hour Window"
                onChange={this.handleChange}
            />
            <button className="submit-btn-style"
            onClick={this.props.handleClose}
            >Update</button>
            </form>
        )
    }
}

export default PirepHistoryInput;