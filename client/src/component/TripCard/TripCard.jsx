import React from "react";
import Modal from "../Modal/Modal";
import Favorite from "../Favorite";
import "./tripcard.css";
import API from "../../utils/API";

class TripCard extends React.Component {
  state = {
    activeModal: -1,
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

  toggleModal = idx => {
    this.setState({
      modalState: !this.state.modalState,
      activeModal: idx
    });
  };

  renderPhoto = trip => {
    let url = trip.photos.length ? trip.photos[0] : trip.photo;
    return <img src={url} alt="Trip" />;
  };

  renderTrips = () => {
    return this.state.trips.map((trip, idx) => {
      return (
        <div key={idx} className="tile is-child is-6">
          <div className="polaroid">
            <figure className="image is-square">
              {this.renderPhoto(trip)}
            </figure>
            <div className="favorite">
              <Favorite trip={trip} />
            </div>
            <i className="fas fa-thumbtack fa-2x" />
            <p
              className="is-size-7 tripTitle"
              onClick={() => this.toggleModal(idx)}
            >
              {trip.title}
            </p>
          </div>
          <Modal
            closeModal={this.toggleModal}
            modalState={idx === this.state.activeModal}
            trip={trip}
          />
        </div>
      );
    });
  };

  render() {
    return <div className="render">{this.renderTrips()}</div>;
  }
}

export default TripCard;
