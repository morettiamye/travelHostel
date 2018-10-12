import React from "react";
import SearchCity from "../component/SearchCity";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="column is-10 is-offset-1">
      <h1>Welcome to Virtual Hostel</h1>

      <p>Virtual Hostel is the easiest way to search for ideas for your next trip.  We allow users to submit reviews of their trips, and leave ideas of places you should visit as well.  Search by city, store favorites, and submit your own trips!</p>
        
        <br/>
        <br/>
        <h1>Start typing a city..</h1>
        <SearchCity />
      </div>
      </div>
    );
  }
}

export default Home;
