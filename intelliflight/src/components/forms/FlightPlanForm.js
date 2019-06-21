import React from 'react';
import { GoogleComponent } from 'react-google-location';

class FlightPlanForm extends React.Component {
    
    render() {
        return (
            <div className="top-content plan-flight">
                <form onSubmit={this.props.submitFlightPlan}>
                    <p>Starting Point</p>
                    <GoogleComponent
                        apiKey={process.env.REACT_APP_GOOGLE_KEY}
                        language={'en'}
                        coordinates={true}
                        locationBoxStyle={'custom-style'}
                        locationListStyle={'custom-style-list'}
                        onChange={event => {
                            localStorage.setItem('start', JSON.stringify(event))
                        }}
                    />
                    <p>Destination</p>
                    <GoogleComponent
                        apiKey={process.env.REACT_APP_GOOGLE_KEY}
                        language={'en'}
                        coordinates={true}
                        locationBoxStyle={'custom-style'}
                        locationListStyle={'custom-style-list'}
                        onChange={event => {
                            localStorage.setItem('destination', JSON.stringify(event))
                        }}
                    />
                    <button className="submit-btn-style">SUBMIT</button>
                </form>
            </div>
        )
    }
}

export default FlightPlanForm;