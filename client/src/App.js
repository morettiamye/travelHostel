import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Bulletin from "./pages/Bulletin";
import Dashboard from "./pages/Dashboard";
import UserTrips from "./pages/UserTrips";
import MainForm from "./component/Form/Main";
import Modal from "./component/Modal";
import TripCard from "./component/TripCard";
import Auth from "./component/Auth"
import API from "./utils/API"


class App extends Component {
  state = {
    isLoggedIn: false,
    user: {
      id: "",
      name: ""
    }
  }

  handleLogin = user => {
    this.setState({
      isLoggedIn: true,
      user
    })
    localStorage.setItem("username", user.username)
  };

  handleSignup = user => {
    this.setState({
      isLoggedIn: true,
      user
    })
  };

  handleLogOut = () => {
    API.logout()
      .then(res => {
        this.setState({
          isLoggedIn: false,
          user: {
            id: "",
            name: ""
          }
        });
        localStorage.removeItem("username")
      })
      .catch(err => { console.log(err) })
  };

  componentDidMount() {
    if (localStorage.getItem("username")) {
      API.checkLogin(localStorage.getItem("username"))
        .then(res => {
          if (res.data.status === "loggedIn") {
            this.setState({
              isLoggedIn: true,
              user: res.data.user
            })
          }
        })
    }
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="site">
            <div className="site-content">
              <NavBar isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} />
              <div className="hero-body">
                <div className="container has-text-centered">
                <div className="box column is-three-fifths is-offset-one-fifth">
                  <Route exact path="/" component={Home} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/trip" component={MainForm} />
                  <Route exact path="/usertrips" component={TripCard} />
                  <Route exact path="/login" render={(props) => <Auth {...props} handleLogIn={this.handleLogin} />} />
                  <Route exact path="/signup" render={(props) => <Auth {...props} handleSignUp={this.handleSignup} />} />
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
