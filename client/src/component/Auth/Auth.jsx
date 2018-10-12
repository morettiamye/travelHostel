import React from "react";
import { Redirect } from 'react-router';
import API from "../../utils/API";

class Auth extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ username: "", password: "" });

    switch (this.props.location.pathname) {
      case "/login": {
        API.login(this.state)
          .then(res => {
            console.log(res.data);
            localStorage.setItem("userID", res.data.userID)
            this.props.handleLogIn(res.data);
          })
          .catch(err => {
            console.log(err);
          });
        break;
      }
      case "/signup": {
        API.signup(this.state)
          .then(res => {
            console.log(res.data);
            this.props.handleSignUp(res.data);
          })
          .catch(err => {
            console.log(err);
          });
        break;
      }
    }
  };

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/dashboard" />
    }
    return (
      <form>
        <p>Username:</p>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <p>Password:</p>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <button type="submit" onClick={this.handleFormSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default Auth;
