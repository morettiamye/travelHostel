import React from "react";
import Modal from "../Modal/Modal";
import Favorite from "../Favorite";
import "./tripcard.css";

class TripCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState;

      return { modalState: newState };
    });
  }

  render() {
    return (
      <div className="container1">
        <div className="polariod">
          <figure className="image is-square">
            <img
              src="https://bulma.io/images/placeholders/128x128.png"
              alt="Trip"
            />
            <div className="favorite">
              <a className="button is-primary" onClick={this.toggleModal}>
                See Trip Details
              </a>
            </div>
            {/* <p className="is-size-7 title"> */}
            <Favorite />
            {/* </p> */}
          </figure>
          <i className="fas fa-thumbtack fa-2x" />
        </div>
        <Modal
          closeModal={this.toggleModal}
          modalState={this.state.modalState}
          title="Dope trip to Amsterdam, yall!"
        >
          <ul>City Explored: (import city name)</ul>
          <ul>Time Spent Exploring: (import duration)</ul>
          <ul>Season Traveled: (import season traveled)</ul>
          <ul>Activities: (import activites form)</ul>
        </Modal>
      </div>
    );
  }
}

export default TripCard;
