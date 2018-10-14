import React from "react";
import API from "../../utils/API";

class Auth extends React.Component {
  state = {
    username: "",
    password: "",
    header: ""
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
    const signUp = this.props.location.pathname === "/signup";
    return (
      <div>
      <h2>
        { signUp ? "Sign Up" : "Log In" }
      </h2>
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
      </div>
    );
  }
}

export default Auth;
