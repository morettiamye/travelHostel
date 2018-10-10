import React from "react";
import "./tripcard.css";

const TripCard = props => (
  <div className="card">
    <div className="card-image">
      <img
        src="https://bulma.io/images/placeholders/1280x960.png"
        alt="Placeholder"
      />
    </div>
    <div className="card-content">
      <p className="title is-5">John Smith</p>
      <p className="subtitle is-6">
        @johnsmith
        <br />
        <a href="/">See My Trip Details!</a>
      </p>
    </div>
  </div>
);

export default TripCard;
