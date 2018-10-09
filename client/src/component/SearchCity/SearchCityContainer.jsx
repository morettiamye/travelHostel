import React, { Component } from "react";
import Search from "./SearchCity"

class SearchCity extends Component {
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
                <Search handleInputChange={this.handleInputChange} />
            </div>
        )
    }
}
export default SearchCity; 