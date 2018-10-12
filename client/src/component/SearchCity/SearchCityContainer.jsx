import React, { Component } from "react";
import Search from "./SearchCity"
import API from "../../utils/API"

class SearchCityContainer extends Component {
    // Setting the initial state of the Counter component
    state = {
        city: ""
    };


    handleCitySearch = event => {
        event.preventDefault();
        // Since we've set the selectedCity in localStorage after selecting the city in autocomplete
        // Look into localStorage, and check if we have one and update the city state with it
        if (localStorage.getItem("selectedCity")){
            API.getTripCity({city: localStorage.getItem("selectedCity")})
                .then(res => {
                    console.log(res.data)
                
                })
                .catch(err => console.log(err));
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
                <Search handleInputChange={this.handleInputChange} handleCitySearch={this.handleCitySearch} />
            </div>

        )
    }
}
export default SearchCityContainer; 