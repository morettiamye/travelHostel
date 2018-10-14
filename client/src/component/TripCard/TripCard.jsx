import React from "react";
import Modal from "../Modal/Modal";
import Favorite from "../Favorite";
import "./tripcard.css";
import API from "../../utils/API";

class TripCard extends React.Component {
  state = {
    modalState: false,
    trips: []
  };

  componentDidMount() {
    API.getTripCity({ city: localStorage.getItem("selectedCity") }).then(
      res => {
        this.setState({ trips: res.data });

        // console.log(res.data);
      }
    );
  }

  toggleModal = () => {
    this.setState((prev, props) => {
      const newState = !prev.modalState;

      return { modalState: newState };
    });
  };

  renderPhoto = trip => {
    let url = trip.photos.length ? trip.photos[0] : trip.photo;
    return <img src={url} alt="Trip" />;
  };

  renderTrips = () => {
    return this.state.trips.map(trip => {
      return (
        <div className="container1">
          <div className="polariod">
            <figure className="image is-square">
              {this.renderPhoto(trip)}
              <div className="favorite">
                <a className="button is-primary" onClick={this.toggleModal}>
                  {trip.title}
                </a>
              </div>
              <Favorite trip={trip} />
            </figure>
            <i className="fas fa-thumbtack fa-2x" />
          </div>
          <Modal
            closeModal={this.toggleModal}
            modalState={this.state.modalState}
            title={trip.title}
          >
            <p>{`City Explored : 
            ${trip.city}`}</p>
            <p>{`Time Spent Exploring : 
            ${trip.duration} days`}</p>
            <p>{`Season Traveled : 
            ${trip.season}`}</p>
            <p>{`How we got to there : 
            ${trip.transportations}`}</p>
            <p>{`Our accomodations : 
            ${trip.accomodations}`}</p>
            <p>{`Some food spots I recommend from my trip : 
            ${trip.food}`}</p>
            <p>{`Some activities I highly suggest you try : 
            ${trip.activities}`}</p>
            <div>
              <p>Check out these awesome photos I took!</p>
              <img src={trip.photos} alt="trip photos" />
            </div>
          </Modal>
        </div>
      );
    });
  };

  render() {
    return <div className="render">{this.renderTrips()}</div>;
  }
}

export default TripCard;
