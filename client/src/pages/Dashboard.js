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
     
      <div>
        <p className="is-size-3">Hello, {localStorage.getItem("username")} !</p>
        <br />
        <br />
        <div className="columns is-mobile">
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
            <div className="column">
            <p className="is-size-5">Favorites</p>
            <br/>
            <div className="tile is-ancestor">
            <div className="tile is-vertical is-parent">
        <TripCard />
        </div>
        </div>
          </div>
        </div>

       
    );
  }
}

export default Dashboard;
