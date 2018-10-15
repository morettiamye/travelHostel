import React from "react";
import SearchCity from "../component/SearchCity";


class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="column is-10 is-offset-1 is-mobile">
          <h1 className="is-size-3 is-size-5-mobile">Welcome to Virtual Hostel</h1>

          <p className="is-size-7-mobile">Virtual Hostel is the easiest way to search for ideas for your next trip.  We allow users to submit reviews of their trips, and leave ideas of places you should visit as well.  Search by city, store favorites, and submit your own trips!</p>

          <br />
          <br />

          <SearchCity />
        </div>
      </div >
    );
  }
};

export default Home;
