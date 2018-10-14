import React from "react";
// import Button from "../component/Button";
import TripCard from "../component/TripCard";
class Dashboard extends React.Component {
  state = {
    favTrips: []
  };

  componentDidMount = () => {
    //API.getfavTrips ...
    // setState({ req.body })
  };

  render() {
    return (
      <div className="column is-10 is-offset-1">
        <p className="is-size-3">Hello, {localStorage.getItem("username")} !</p>
        <br />
        <br />
        <div className="columns">
          <div className="column is-4 is-offset-1">
            <a className="is-link button is-medium" href="/trip">
              Add Trip
            </a>
          </div>
          <div className="column">
            <a className="is-link button is-medium" href="/usertrips">
              My Trips
            </a>
          </div>
        </div>

        <p className="is-size-5">Favorites</p>
        <TripCard />
      </div>
    );
  }
}

export default Dashboard;
