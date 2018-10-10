import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
//import Bulletin from "./pages/Bulletin";
import Dashboard from "./pages/Dashboard";
import UserTrips from "./pages/UserTrips";
import MainForm from "./component/Form/Main";
import Modal from "./component/Modal";
import TripCard from "./component/TripCard";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/trip" component={MainForm} />
          <Route exact path="/usertrips" component={TripCard} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

// import NavBar from "./component/NavBar";
// import Footer from "./component/Footer";
// import Duration from "./component/Form/Duration";
// import Season from "./component/Form/Season";
// import NoMatch from "./component/NoMatch/NoMatch";
// import SearchCity from "./component/SearchCity";
// import Favorite from "./component/Favorite";
// import Form from "./component/Form";
// import FormNote from "./component/FormNote";
// import PictureUploader from "./component/PictureUploader";
// import Trip from "./component/Trip";
