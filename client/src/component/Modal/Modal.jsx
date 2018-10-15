import React, { Component } from "react";
import Favorite from "../Favorite";
import "./modal.css";

const Modal = ({ closeModal, modalState, trip }) => {
  if (!modalState) {
    return null;
  }
  //   Modal.propTypes = {
  //     closeModal: React.PropTypes.func.isRequired,
  //     modalState: React.PropTypes.bool.isRequired,
  //     title: React.PropTypes.string
  //   };

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head head">
          <p className="modal-card-title">{trip.title}</p>
          <button className="delete" onClick={closeModal} />
        </header>
        <section className="modal-card-body details">
          <div className="content">
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
          </div>
        </section>
        <footer className="modal-card-foot foot">
          <a className="button" onClick={closeModal}>
            Close Trip Details
          </a>

          <Favorite />
        </footer>
      </div>
    </div>
  );
};

export default Modal;
