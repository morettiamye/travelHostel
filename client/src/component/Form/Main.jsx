import React from "react";
import axios from "axios";
// import City from './City';
// import Duration from './Duration';
// import Season from './Season';
// import FormNote from '../FormNote'
import PictureUploader from "../PictureUploader";

export default class Main extends React.Component {
  state = {
    user: "",
    city: "",
    duration: "",
    season: "",
    food: "",
    accomodations: "",
    transportations: "",
    activities: "",
    photos: []
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getPhotos = photos => {
    console.log("This is getting done");
    this.setState({ photos });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    axios.post("/api/trips", this.state);
    this.setState({
      user: "",
      city: "",
      duration: "",
      season: "",
      food: "",
      accomodations: "",
      transportations: "",
      activities: "",
      photos: []
    });
  };

  render() {
    return (
      <div>
        <p>User:</p>
        <input
          type="text"
          name="user"
          value={this.state.user}
          onChange={this.handleInputChange}
        />
        <p>City:</p>
        <input
          type="text"
          name="city"
          value={this.state.city}
          onChange={this.handleInputChange}
        />
        <p>Duration (in days):</p>
        <input
          type="text"
          name="duration"
          value={this.state.duration}
          onChange={this.handleInputChange}
        />
        <p>Season:</p>
        <select name="season" onChange={this.handleInputChange}>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
          <option value="Rainy">Rainy </option>
          <option value="Dry">Dry</option>
        </select>
        <p>Food:</p>
        <input
          type="text"
          name="food"
          value={this.state.food}
          onChange={this.handleInputChange}
        />
        <p>Accomodations:</p>
        <input
          type="text"
          name="accomodations"
          value={this.state.accomodations}
          onChange={this.handleInputChange}
        />
        <p>Transportations:</p>
        <input
          type="text"
          name="transportations"
          value={this.state.transportations}
          onChange={this.handleInputChange}
        />
        <p>Activities:</p>
        <input
          type="text"
          name="activities"
          value={this.state.activities}
          onChange={this.handleInputChange}
        />
        <p>Photo(s):</p>
        <PictureUploader getPhotos={this.getPhotos} />

        <button onClick={this.handleSubmitForm}>Submit</button>
      </div>
    );
  }
}
