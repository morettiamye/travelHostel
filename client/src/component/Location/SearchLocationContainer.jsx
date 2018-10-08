import React, { Component } from "react";
import Location from "./Location"

class LocationResult extends Component {
    // Setting the initial state of the Counter component
    state = {
        city: ""
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div>
                <Location handleInputChange={this.handleInputChange} />
            </div>
        )
    }
}
export default LocationResult; 