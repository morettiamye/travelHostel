import React, { Component } from "react";
import Search from "./SearchCity";
import { withRouter } from "react-router-dom";

class SearchCityContainer extends Component {
    // Setting the initial state of the Counter component
    state = {
        city: "",
        trips: []
    };

    handleReroute = () => {
        if (localStorage.getItem("selectedCity")) {
            this.props.history.push("/bulletin")
        }

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
                <Search handleInputChange={this.handleInputChange} handleReroute={this.handleReroute} />
            </div>

        )
    }
}
export default withRouter(SearchCityContainer); 