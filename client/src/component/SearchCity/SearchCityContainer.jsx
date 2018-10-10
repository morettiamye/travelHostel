import React, { Component } from "react";
import Search from "./SearchCity"

class SearchCity extends Component {
    // Setting the initial state of the Counter component
    state = {
        city: ""
    };


    handleCitySearch = event => {
        event.preventDefault();

        API.getTripCity(this.props.match.params.city)
        console.log(this.props.match.params.city)
            .then(res => this.setState({ city: res.data }))
        console.log(res.data)
            .catch(err => console.log(err));

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
                <Search handleInputChange={this.handleInputChange} handleCitySearch={this.handleCitySearch} />
            </div>
        )
    }
}
export default SearchCity; 