import React from "react";
import Button from "../component/Button";
import Trip from "../component/Trip";

class Dashboard extends Component {
  state = {
      favTrips: []
  };

  componentDidMount = () => {
    //API.getfavTrips ... 
    // setState({ req.body })
  }

  render() {
    return (
      <div className="buttonDiv">
        <Button name={addTrip} />
        <Button name={favTrip} />
        <Button name={myTrip} />
        <div className="favTripDiv" {this.state.favTrip}/>
      </div>
    );
  }
}

export default Dashboard;
