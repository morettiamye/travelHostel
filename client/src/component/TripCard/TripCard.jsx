import React from "react";
import Favorite from "../Favorite";
import "./tripcard.css";

const TripCard = props => (
  <div className="column is-10 is-offset-1">
    <div className="polaroid">
      <figure className="image is-square">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Trip" />
      </figure>
        <div className="favorite">
          <Favorite />
        </div>
        <i className="fas fa-thumbtack fa-2x"></i>
      <p className="is-size-7">Sarah, Dec '02</p>
    </div>
  </div>
);

export default TripCard;
