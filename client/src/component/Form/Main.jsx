import React from "react";
import axios from "axios";
// import City from './City';
// import Duration from './Duration';
// import Season from './Season';
// import FormNote from '../FormNote'
import PictureUploader from "../PictureUploader";

export default class Main extends React.Component {
  state = {
    user: localStorage.getItem("userID"),
    city: "",
    cityDump: "",
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


  handleSubmitForm = (e) => {
    e.preventDefault();
    this.setState({ city: localStorage.getItem("selectedCity") },
      () => {

        console.log(this.state)
        axios.post("/api/trips", this.state);
        this.setState({
          title: "",
          cityDump: "",
          duration: "",
          season: "",
          food: "",
          accomodations: "",
          transportations: "",
          activities: "",
          photos: []
        });
      })
    console.log(localStorage.getItem("userID"))

  };

  render() {
    return (
      <div className="column is-10 is-offset-1">
        <p className="is-size-3 has-text-black">Submit a Trip</p>
        <br />
        <div className="field is-grouped-centered has-text-left">
          <label className="label">Trip Title</label>
          <div className="control">
            <input maxLength="30"
              className="input is-link"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </div>
          <br />
          <label className="label">City</label>
          <div className="control">

            <div name="form_citydetails" id="form_citydetails" encType="multipart/form-data" >
              <input
                className="ff_elem input is-link"
                type="text"
                name="cityDump"
                id="f_elem_city"
                placeholder="Start typing city name"
                onChange={this.handleInputChange}
                value={this.cityDump} />
            </div>
          </div>
          <br />
          <label className="label">Trip Duration (in days)</label>
          <div className="control">
            <input
              className="input is-link"
              type="text"
              name="duration"
              value={this.state.duration}
              onChange={this.handleInputChange}

            />
          </div>
          <br />
          <label className="label">Season</label>
          <div className="control">
            <div className="select is-link is-small">
              <select name="season" onChange={this.handleInputChange}>
                <option>Select</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
                <option value="Fall">Fall</option>
                <option value="Winter">Winter</option>
                <option value="Rainy">Rainy </option>
                <option value="Dry">Dry</option>
              </select>
            </div>
          </div>
          <br />
          <p className="is-size-5 has-text-black has-text-centered">Trip Comments</p>
          <br />
          <label className="label">Food</label>
          <div className="control">
            <textarea
              className="textarea is-link"
              rows="5"
              type="text"
              name="food"
              value={this.state.food}
              onChange={this.handleInputChange}
            />
          </div>
          <br />
          <label className="label">Accomodations</label>
          <div className="control">
            <textarea
              className="textarea is-link"
              rows="5"
              type="text"
              name="accomodations"
              value={this.state.accomodations}
              onChange={this.handleInputChange}
            />
          </div>
          <br />
          <label className="label">Transportation</label>
          <div className="control">
            <textarea
              className="textarea is-link"
              rows="5"
              type="text"
              name="transportations"
              value={this.state.transportations}
              onChange={this.handleInputChange}
            />
          </div>
          <br />
          <label className="label">Activities</label>
          <div className="control">
            <textarea
              className="textarea is-link"
              rows="5"
              type="text"
              name="activities"
              value={this.state.activities}
              onChange={this.handleInputChange}
            />
          </div>
          <br />
          <div className="control">
            <PictureUploader getPhotos={this.getPhotos} />
            <br />
            <button className="button is-link" onClick={this.handleSubmitForm}>Submit</button>
          </div>
        </div>
      </div>

    );
  }
}
