import React from 'react';
import API from "../../utils/API"

class Auth extends React.Component {
    state = {
        username: "",
        password: ""
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

    };
    handleFormSubmit = event => {
        event.preventDefault();

        switch (this.props.location.pathname) {
            case "/login": {
                API.login(this.state)
                    .then(res => {
                        console.log(res.data)
                        this.props.handleLogIn(res.data);
                    })
                    .catch(err => {
                        console.log(err)
                    })
                break;
            }
            case "/signup": {
                API.signup(this.state)
                    .then(res => {
                        console.log(res.data)
                        this.props.handleSignUp(res.data);

                    })
                    .catch(err => {
                        console.log(err)

                    })
                break;
            }

        }



    };

    render() {
        return (
            <form>
                <p>Username:</p>
                <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
                <p>Password:</p>
                <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                <button type="submit" onClick={this.handleFormSubmit}>Submit</button>
            </form>
        );
    }
}

export default Auth;