import React from "react";
import Button from "../component/Button";
// import Trip from "../component/Trip";

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
      <div className="Dashboard">
        
      </div>
    );
  }
}

export default Dashboard;
