import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import TripCard from "../component/TripCard";
import Modal from "../component/Modal";
import API from "../utils/API";

class UserTrips extends Component {
  state = {};

  render() {
    return (
      <div>

        <TripCard />
        <Modal />

      </div>
    );
  }
}

export default UserTrips;
